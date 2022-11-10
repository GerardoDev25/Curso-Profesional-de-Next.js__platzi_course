import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  async function fetchData(endpointParam) {
    try {
      const res = await axios.get(endpointParam);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(endpoint);
  }, [endpoint]);

  return data;
};
