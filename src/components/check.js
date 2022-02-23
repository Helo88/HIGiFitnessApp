import Water from "./Water";
import WeightTracker from "./weightTracker";
import Community from "./Community";
import TrainerProfile from "./TrainerProfile";

function Check() {
    const isLoggedIn = localStorage.token;
    const isStaff = localStorage.is_staff;
    if ((isLoggedIn) && (isStaff ===  true)) {
      return(
        <TrainerProfile />
      );
    }
    
    return( 
        <>
    <Community />
    {/* <WeightTracker />   */}
    
    </>
    );
    
  }
  
//   ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Check isLoggedIn={false} />,
//     document.getElementById('root')
//   );

  export default Check;