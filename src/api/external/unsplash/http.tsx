import { httpService } from '@/module/http';

export const fetchImages = async () => {
  const apiUrl = `https://api.unsplash.com/photos/random?count=20&client_id=${process.env.NEXT_PUBLIC_UNSPLSH_API_KEY}`;
  const response = await httpService.get<any>(apiUrl);
  console.log(response);
  return response;
};
