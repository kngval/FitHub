import React, { useState } from 'react';
import './workout.css';
import axios from 'axios'
import Modal from 'react-modal'

function WorkoutDetails({workout,onWorkoutDelete}) {

  const [modalToggle,setModalToggle] = useState(false);
  const [title,setTitle] = useState('')
  const [load,setLoad] = useState('')
  const [reps,setReps] = useState('')


    const openModal = () => {
        setModalToggle(true)
    }

    const closeModal = () =>{
        setModalToggle(false)
    }

  const handleDelete = async() =>{

  
    try{
        const response = await axios.delete(`${import.meta.env.VITE_REACT_APP_API_URL}/api/workouts/${workout._id}`)
        onWorkoutDelete()

    } catch (error){
      console.log(error);
    }
  }


  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): {workout.load}</strong></p>
      <p><strong>Reps: {workout.reps}</strong></p>
      <button onClick={openModal}>Edit</button>
      <button onClick={handleDelete}>Delete Workout</button>
      <Modal appElement={document.getElementById('root')} isOpen={modalToggle} onRequestClose={closeModal}>
        <h1>Edit Workout</h1>
      <form action="">
        <label>Workout: </label><input type="text" name='name' value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <label>Load (kg):</label> <input type="number" name="load" value={load} onChange={(e) => setLoad(e.target.value)} />
        <label>Reps: </label><input type="number" name='reps' value={reps} onChange={(e) => setReps(e.target.value)}/>
      </form>
      </Modal>
    </div>
  );
}

export default WorkoutDetails;