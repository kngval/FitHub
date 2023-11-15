import React, { useState } from 'react';
import WorkoutModal from './WorkoutModal';
function CreateWorkout() {
    
    const [modalToggle,setModalToggle] = useState(false);


    const openModal = () => {
        setModalToggle(true)
    }

    const closeModal = () =>{
        setModalToggle(false)
    }

  return (
    <div>
      <h1>For Creating new Workout!</h1>
      <button onClick={openModal}>Create A New Workout</button>
      <WorkoutModal isOpen={modalToggle} onClose={closeModal}  />
    </div>
  );
}

export default CreateWorkout;