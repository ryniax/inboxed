import axios from '../libs/axios';

export const HTTPGet = async (path: string, params?: object) => {
  const data = await axios.get(path, { params });
  return data;
};
