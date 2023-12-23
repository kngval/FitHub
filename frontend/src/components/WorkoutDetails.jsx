import React, { useState } from 'react';
import axios from 'axios'
import Modal from 'react-modal'
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext';
import { useAuthContext } from '../../hooks/useAuthContext';
function WorkoutDetails({workout}) {
  const {dispatch} = useWorkoutsContext();
  const [modalToggle,setModalToggle] = useState(false);
  const [title,setTitle] = useState('')
  const [load,setLoad] = useState('')
  const [reps,setReps] = useState('')
  const { user } = useAuthContext();

    const openModal = () => {
        setModalToggle(true)
    }

    const closeModal = () =>{
        setModalToggle(false)
    }

  const handleDelete = async() =>{

  
    try{
      if(!user){
        return
      }
        const response = await axios.delete(`${import.meta.env.VITE_REACT_APP_API_URL}/api/workouts/${workout._id}`,{
          headers:{
            'Authorization': `Bearer ${user.token}`
          }
        })

        const data = response.data

        if(response.status === 200)
        {
          dispatch({type: "DELETE_WORKOUT", payload: data})
        }

    } catch (error){
      console.log(error);
    }
  }


  const handleSubmit = async() =>{
    try {
      const response = await axios.patch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/workouts/${workout._id}`,{
        title,
        load,
        reps
      })

      const data = response.data;
      
      
      if(response.status === 200) {
        dispatch({type: 'EDIT_WORKOUT', payload: data })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='workoutDetails p-4 rounded-md shadow-2xl'>
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): {workout.load}</strong></p>
      <p><strong>Reps: {workout.reps}</strong></p>
      <button onClick={openModal}>Edit</button>
      <button onClick={handleDelete}>Delete Workout</button>
      <Modal appElement={document.getElementById('root')} isOpen={modalToggle} onRequestClose={closeModal}>

        <h1>Edit Workout</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>Workout: </label><input type="text" name='name' value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <label>Load (kg):</label> <input type="number" name="load" value={load} onChange={(e) => setLoad(e.target.value)} />
        <label>Reps: </label><input type="number" name='reps' value={reps} onChange={(e) => setReps(e.target.value)}/>

      <button type='submit'>Submit</button>
      </form>
      <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default WorkoutDetails;