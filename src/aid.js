import { useParams, useHistory ,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

//to be inside a useFffect or a func

//    dispatch({
//     type:authenticationStatus,
//     payload :true
//   })
//const dispatch = useDispatch();


// const history = useHistory();
//let { id } = useParams();
// const { search } = useLocation();
// const searchParams = new URLSearchParams(search);
// const name = searchParams.get("name");

// const appLang = useSelector((state) => state.currentLang.lang);

// const [currentPage,setCurrentPage]=useState(1);
// const [moviesPerPage,setMoviesPerPage]=useState(6)
// const [moviesRes, setMoviesRes] = useState([]);


// useEffect(() => {
//     const searchMovies= ()=>
// {       axiosInstance
//        .get("3/search/movie", {
//          params: {
//            api_key:"21ddddf500f95cd948a2fcf4e257d8",
//           //  language:contextLang,
//            query: name,
//          },
//        })
//        .then((data)=>{setMoviesRes([...data.data.results]);
//          return data.results
//      })
//        .then((data)=>{console.log(data.data.results)})
//        .catch((err) => console.log(err));
//     }
//     searchMovies()
//  }, [name,appLang]);