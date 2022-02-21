import Water from "./Water";
//import WeightTracker from "./weightTracker";
import Community from "./Community";

function Check() {
    const isLoggedIn = localStorage.token;
    const isStaff = localStorage.is_staff;
    if (isLoggedIn && isStaff) {
      return
       <Community />;
      
    }
    return( 
        <>
    <Water />
    {/* <WeightTracker /> */}
    
    </>
    );
  }
  
//   ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Check isLoggedIn={false} />,
//     document.getElementById('root')
//   );

  export default Check;