import { useEffect } from "react";
import authFetch from "../axios/interceptor";

const url = "https://www.course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch('/react-store-products');
      // console.log(resp);
    } catch (error) {
      if (error.response) {
        if(error.response.status === 404)return console.log('NOT FOUND');
        console.log(error.response); // Log the error response
      } else {
        console.log(error); // Log the full error if response is undefined
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};

export default Interceptors;
