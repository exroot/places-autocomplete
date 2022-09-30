import axios from "axios";
import { ENDPOINTS } from "../utils/endpoints";

export const getPlaces = async (query, format) => {
  try {
    const { data } = await axios.get(
      `${ENDPOINTS.nominatim}search?q=${query}&format=${format}`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
