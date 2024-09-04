import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers['Accept'] = 'application/json'; // Corrected to a string
    console.log('request sent');
    return request;
  },
  (error) => {
    console.log(error); // Log the full error
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (error) => {
    if (error.response) {
      console.log(error.response); // Log the error response
    } else {
      console.log(error); // Log the full error if response is undefined
    }
    return Promise.reject(error); // Ensure the error is still thrown
  }
);

export default authFetch;
