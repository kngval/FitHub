import { useEffect } from "react";
import axios from "axios";
import WorkoutDetails from "../src/components/WorkoutDetails";
import CreateWorkout from "../src/components/CreateWorkout";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  
  useEffect(() => {
    
    const fetchWorkouts = async () => {
      try {
      const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/workouts`,{
            headers:{
              'Authorization': `Bearer ${user.token}`
            }
          }
        );
        const initData = response.data;
        const data = initData.workouts
        console.log(data);
        if (response.status === 200) {
          dispatch({ type: "SET_WORKOUTS", payload: data });
        }
        console.log("data after dispatch",workouts);
      } catch (error) {
        console.log("CATCHED ERROR", error);
      }
    };
    if(user){
      fetchWorkouts();
    }
  }, [dispatch,user]);
  



  
  return (
    <div className="Home">
        <CreateWorkout />

        <div className="grid m-8 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {Array.isArray(workouts) && workouts.length === 0 && <h1>No Data</h1>}
          {Array.isArray(workouts) &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>

        
    </div>
  );
};

export default Home;
