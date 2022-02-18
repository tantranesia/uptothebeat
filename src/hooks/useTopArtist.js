import axios from 'axios';
import { useQuery } from 'react-query';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function useTopChart() {
  return useQuery(
    'topChart',
    () =>
      axios
        .get(
          `http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&api_key=${API_KEY}&format=json&limit=20`
        )
        .then((res) => res.data.artists.artist)
        .catch((err) => {
          console.log(err);
        }),
    {
      onSuccess: (artists) => {
        console.log('onsucces chart', { artists });
      },
    }
  );
}
