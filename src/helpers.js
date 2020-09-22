import axios from "axios";

export const createPlaceholderImage = () => `https://picsum.photos/200`;

export const fetchData = async (api, dataSetter, errorSetter = null) => {
  try {
    const { data } = await axios.get(api);
    dataSetter(data);
  } catch (err) {
    // console.log(err);
  }
};
