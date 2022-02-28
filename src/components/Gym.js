import React from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../js/network";
import "../style/Gym.css";

const Gym = () => {
  const handleMap = () => {
    var googleMapSrc = `http://maps.google.com/maps/search/nearst+gyms`;
    window.open(googleMapSrc, "_blank");
  };


  return (
    <>
      <div className="px-2 " id="gymIntro">
        <div className="container pt-2 mt-5">
          <main id="clothingMain">
            <h1 className="mb-5 text-center text-uppercase fw-bold ">
              You Want To Subscribe To Gym ?!
            </h1>

            <div className="mx-auto p-1 text-center w-50" id="quotegym">
              <hr className="w-25 mx-auto"></hr>

              <p>
                <i className="bi bi-quote px-1"></i>
                Great Idea , Here Some Reasons Why You Shouldnot
                <i className="bi bi-quote px-1"></i>
              </p>

              <span>HIGE</span>
              <hr className="w-25 mx-auto mb-1"></hr>
            </div>
            <div id="gymbg">
              <div className="row">
                <ul
                  id="answers"
                  className="col-12 offset-0 offset-md-4 col-md-5 p-2 mt-4"
                >
                  <li>
                    <i className="bi bi-lightbulb pe-3 "></i> Waste Of Money
                  </li>
                  <li>
                    <i className="bi bi-lightbulb pe-3"></i>
                    Serious Injuries
                  </li>
                  <li>
                    <i className="bi bi-lightbulb pe-3"></i> Wasting Time In
                    Travel
                  </li>
                  <li>
                    <i className="bi bi-lightbulb pe-3 "></i> Restrictive and
                    not Comfortable
                  </li>
                  <li>
                    <i className="bi bi-lightbulb pe-3 text-light"></i> Gym
                    Guilt
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
        <div className="container pt-2 mt-5 ma">
          <main id="clothingMain">
            <h1 className="mb-5 text-center  ">
              Here to Find Your Nearst Gyms If You Like To Subscribe To one ,
              But You Can Build Your Own Home Gym , Just By One Click...
              <br></br>
              <Link to="/signup">
                <button type="submit" className="btn" id="btn2">
                  Sign up
                </button>
              </Link>
            </h1>
          </main>
        </div>
      </div>
      <section className="fullsize-video-bg">
        <div className="inner">
          <div>
            <h1 id="title">Find Your Nearest Gym</h1>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => handleMap()}
            >
              Click Here
            </button>
          </div>
        </div>
        <div id="video-viewport">
          <video
            className="vplayer"
            width="1920"
            height="1280"
            autoPlay
            loop
            muted
          >
            <source
              src="https://assets.gymbox.com/videos/global/map.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </>
  );
};

export default Gym;

//   const [position, setPosition] = useState({
//     lan: "",
//     lng: "",
//     zoom: 13,
//     showMap: false,
//   });
//   useEffect(() => {
//     axios
//       .get("https://maps.googleapis.com/maps/api/js?key=AIzaSyD2X23P9TqphXlrzI7O2OyZVVkYrcRWBnI&callback=initMap")
//       .then((res) => console.log(res));
//   });
//   const locatioIcon = new Icon({
//     iconUrl:
//       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",
//     iconSize: [32, 32],
//   });

//   const handlelocation = (position) => {
//     setPosition((prevState) => ({
//       ...prevState,
//       lan: position.coords.latitude,
//       lng: position.coords.longitude,
//     }));
//   };

//   const handlemap = () => {
//     navigator.geolocation.getCurrentPosition(handlelocation);
//     console.log(position.lan, position.lng);
//     setPosition((prevState) => ({
//       ...prevState,
//       showMap: true,
//     }));
//   };
//   function initMap() {
//     var options = {
//         zoom: 10,
//         center: { lat: 33.933241, lng: -84.340288 }
//     }
//     var map = new google.maps.Map(document.getElementById('map'), options);
//     var marker = new google.maps.Marker({
//         position: { lat: 33.933241, lng: -84.340288 },
//         map: map
//     });
// }
//   return (
//     <>
//         <div id="map">

//         </div>

//       {position.showMap === false ? (
//         <section className="fullsize-video-bg">
//           <div className="inner">
//             <div>
//               <h1 id="title">Find Your Nearest Gym</h1>
//               <button
//                 type="button"
//                 className="btn btn-info"
//                 onClick={() => handlemap()}
//               >
//                 Click Here
//               </button>
//             </div>
//           </div>
//           <div id="video-viewport">
//             <video
//               className="vplayer"
//               width="1920"
//               height="1280"
//               autoPlay
//               loop
//               muted
//             >
//               <source
//                 src="https://assets.gymbox.com/videos/global/map.mp4"
//                 type="video/mp4"
//               />
//             </video>
//           </div>
//         </section>
//       ) : (
//         <>
//           <MapContainer center={[31.2267523, 29.9624789]} zoom={position.zoom}>
//             <TileLayer
//               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={[31.2267523, 29.9624789]} icon={locatioIcon}>
//               <Popup></Popup>
//             </Marker>
//           </MapContainer>
//         </>
//       )}
//      </>
//    );
//  };

//  export default Gym;
