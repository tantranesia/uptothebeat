import axios from 'axios';
import { useQuery } from 'react-query';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function useSearchArtists() {
    const value = localStorage.getItem('artist')
  return useQuery(
    'searchArtists',
    () =>
      axios
        .get(
          `http://ws.audioscrobbler.com//2.0/?method=track.search&track=${value}&api_key=${API_KEY}&format=json`
        )
        .then((res) => res.data.results.trackmatches)
        .catch((err) => {
          console.log(err);
        }),
    {
      onSuccess: (result) => {
        console.log('onsucces search tracks', { result });
      },
    }
  );
}