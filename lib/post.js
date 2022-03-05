import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPostData = async () => {
  const res = await axios.get(apiUrl);
  return res.data;
};

export const getPostAllIds = async () => {
  const res = await axios.get(apiUrl);
  return res.data.map((post) => {
    return {
      params: {
        id: String(post.id)
      }
    }
  })
}


export const getPostData = async (id) => {
  const res = await axios.get(`${apiUrl}/${id}/`);
  const post = res.data;
  return post;
}
