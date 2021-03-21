import axios from '../libs/axios';

export const HTTPPost = async (path: string, body?: any, params?: object) => {
  const data = await axios.post(path, body, { params });
  return data;
};
