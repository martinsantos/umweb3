import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const getPosts = async () => {
  const res = await axios.get(`${API_URL}/posts`);
  return res.data;
};
