import axios from "axios";

const instance = axios.create({
    baseURL: 'https://daria-khrushch.github.io/feedback-form/'
});

export const getFeedbacks = async () => {
  const { data } = await instance.get(`/`);
  return data;
};

export const addFeedback = async ({ name, email, message }) => {
  try {
    const { data } = await instance.post(`/`, {
      name,
      email,
      message,
    });
    return Promise.resolve(data);
  } catch (error) {
      alert(error);
  }
};

export default instance;