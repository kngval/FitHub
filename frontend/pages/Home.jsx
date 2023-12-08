import { useEffect } from "react";
import axios from "axios";
import WorkoutDetails from "../src/components/WorkoutDetails";
import CreateWorkout from "../src/components/CreateWorkout";
import "./home.css";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/workouts`
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

    fetchWorkouts();
  }, []);
  



  
  return (
    <div className="Home">
      <h2>Home</h2>
      <div className="workouts">
        <CreateWorkout />

        <div className="workout-list">
          {Array.isArray(workouts) && workouts.length === 0 && <h1>No Data</h1>}

          {Array.isArray(workouts) &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
