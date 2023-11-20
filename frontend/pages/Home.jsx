import { useEffect, useState } from "react";
import axios from 'axios'
import WorkoutDetails from "../src/components/WorkoutDetails";
import CreateWorkout from "../src/components/CreateWorkout";
import './home.css'

const Home = () =>{
    const [workouts,setWorkouts] =useState([])
    
    useEffect(()=>{
        fetchWorkouts()
    }, [])

    const fetchWorkouts = async() =>{
      try{
          const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/workouts`)
          const data = response.data
          if(response.status === 200)
          {
              setWorkouts(data.workouts);
          }

      } catch(error)
      {
          console.log(error);
      }
      
  }

    
    return (
        <div className="Home">
          <h2>Home</h2>
          <div className="workouts">
            <CreateWorkout onWorkoutAdded={fetchWorkouts}/>
            
            <div className="workout-list">
            {console.log(workouts)}
            {workouts.length === 0 && <h1>No Workouts</h1>}
            {workouts !== null &&
              workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} onWorkoutDelete={fetchWorkouts}/>
              )
                )}
                </div>
          </div>
        </div>
      );
      
}

export default Home;