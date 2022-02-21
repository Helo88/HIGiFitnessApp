import axios from "axios";



export const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

// Add a request interceptor

axiosInstance.interceptors.request.use(
 
  function (config) {
    console.log("Interceptor request", config);

	const token=localStorage.getItem('token')
	console.log("inter ",token)
    config.params = {
        ...config.params,
        // api_key:token,
        
    };
    config.headers = {
      ...config.headers,
	  'Authorization':token?`Token ${token}`:null
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    console.log("Interceptor response", response);
    // store.dispatch(setLoading(false))
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("Interceptor error", error);
    return Promise.reject(error);
  }
<<<<<<< HEAD
);
=======
);
>>>>>>> refs/remotes/origin/main
