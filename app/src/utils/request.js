import axios from 'axios'

const get = async (url, params) => {
  try {
    const { data } = await axios.get(url, params ? { params } : null);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const request = { get };

export default request;
