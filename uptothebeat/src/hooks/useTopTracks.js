import axios from 'axios';
import { useQuery } from 'react-query';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function useTopChart() {
  return useQuery(
    'topTracks',
    () =>
      axios
        .get(
          `http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key=${API_KEY}&format=json&limit=20`
        )
        .then((res) => res.data.tracks.track)
        .catch((err) => {
          console.log(err);
        }),
    {
      onSuccess: (tracks) => {
        console.log('onsucces tracks', { tracks });
      },
    }
  );
}