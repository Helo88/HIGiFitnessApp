
import Community from "./Community";
import TrainerProfile from "./TrainerProfile";

function Check() {
    const isLoggedIn = localStorage.token;
    const isStaff = localStorage.is_staff;
    if (isStaff ===  'true') {
      return(
        <TrainerProfile />
      );
    }
    
    return( 
        <>
    <Community />
    
    </>
    );
    
  }

  export default Check;