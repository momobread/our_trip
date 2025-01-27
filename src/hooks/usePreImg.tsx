import { useQuery } from '@tanstack/react-query';

import { fetchPreImg } from '../service/preImgApi';
import { type preDataType } from '../types/Main';

const usePreImg = (): preDataType | undefined => {
  const { data } = useQuery<preDataType, Error>({
    queryKey: ['main_pre_img'],
    queryFn: fetchPreImg,
  });

  return data;
};
export { usePreImg };
