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
          `http://ws.audioscrobbler.com//2.0/?method=artist.search&artist=${value}&api_key=${API_KEY}&format=json`
        )
        .then((res) => res.data.results.artistmatches)
        .catch((err) => {
          console.log(err);
        }),
    {
      onSuccess: (result) => {
        console.log('onsucces search artist', { result });
      },
    }
  );
}