import { useEffect, useState } from "react";
import axios from 'axios'


const Home = () =>{
    const [workouts,setWorkouts] =useState(null)
    
    useEffect(()=>{
        const fetchWorkouts = async() =>{
            try{

                const api = axios.create({
                    baseURL: 'http://localhost:3000',
                  });

                const response = await api.get('/api/workouts')
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
              workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
          </div>
        </div>
      );
      
}

export default Home;