import { useQuery } from '@tanstack/react-query';

import { fetchPreImg } from '../service/preImgApi';
import { type popularLoType } from '../types/Main';

const usePreImg = (): popularLoType[] | undefined => {
  const { data } = useQuery<popularLoType[], Error>({
    queryKey: ['main_pre_img'],
    queryFn: fetchPreImg,
  });

  return data;
};
export { usePreImg };
