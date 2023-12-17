import React, { useState } from 'react';
import WorkoutModal from './WorkoutModal';

function CreateWorkout({onWorkoutAdded}) {
    
    const [modalToggle,setModalToggle] = useState(false);


    const openModal = () => {
        setModalToggle(true)
    }

    const closeModal = () =>{
        setModalToggle(false)
    }

  return (
    <div className='text-center mt-5'>
      <button  className='border-2 rounded-3xl border-black p-2' onClick={openModal}>Create A New Workout</button>
      <WorkoutModal  isOpen={modalToggle} onClose={closeModal}  onWorkoutAdded={onWorkoutAdded}/>
    </div>
  );
}

export default CreateWorkout;