import { useEffect, useState } from "react";
import axios from 'axios'
import WorkoutDetails from "../src/components/WorkoutDetails";
import CreateWorkout from "../src/components/CreateWorkout";


const Home = () =>{
    const [workouts,setWorkouts] =useState(null)
    
    useEffect(()=>{
        const fetchWorkouts = async() =>{
            try{
                const response = await axios.get('http://localhost:3000/api/workouts')
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
        fetchWorkouts()
    },[])
    return (
        <div className="Home">
          <h2>Home</h2>
          <div className="workouts">
            {console.log(workouts)}
            {workouts !== null &&
              workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout}/>
              )
                )}
          </div>
          <CreateWorkout />
        </div>
      );
      
}

export default Home;