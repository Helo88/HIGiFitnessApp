import {useState ,useEffect} from 'react';
import {useLocation ,useHistory} from 'react-router-dom';


export const LocateUser = ({location})=>{
//const location =useLocation()
    const history=useHistory()
    let lng;let lat;

useEffect(()=>{
    function getLoc(){
    navigator.geolocation.getCurrentPosition(function(pos){ 

        lng=pos.coords.longitude
        lat=pos.coords.latitude
        console.log (lng,lat)
        
        })
        ;
    }
        getLoc()
        


},[])
        return<>
        <button 
        onClick={()=>window.open(`https://www.google.com/maps/place/${parseInt(lat)}°07'24.0%22N+${parseInt(lng)}°07'23.4%22E/@${lat},${lng}/`)}>
            find me
        </button>
        </>
}