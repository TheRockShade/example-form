import axios from "axios";

const fetchApi = async (url: string, params: Object = {}) => {
  try {
    return await axios.get(url, { params });
  } catch (error) {
    console.error(error);
  }
};

export default fetchApi;
