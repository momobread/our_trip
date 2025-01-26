import axios from 'axios';

import { type popularLoType } from '../types/Main';

async function fetchPreImg(): Promise<popularLoType[]> {
  const SUPABASEURL = import.meta.env.VITE_SUPABASE_URL;
  const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;
  const response = await axios.get(`${SUPABASEURL}/rest/v1/APP_PRE_IMAGE`, {
    headers: {
      'Content-Type': 'application/json',
      apikey: APIKEY,
      Authorization: `Bearer ${APIKEY}`,
    },
    params: {
      select: '*',
    },
  });
  const data = response.data?.[0]?.popular_lo?.popular;
  return data;
}

export { fetchPreImg };
