import { useEffect, useState } from "react";
import { getPlaces } from "../services/placesServices";

export const usePlaceAutocomplete = ({ query }) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (!query || query.length < 1) {
      return;
    }
    (async () => {
      try {
        const data = await getPlaces(query, "json");
        const placeNames = data.map((placeData) => placeData.display_name);
        setResults(placeNames);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [query]);
  return results;
};
