import React, { useState } from 'react';
import WorkoutModal from './WorkoutModal';
import { useAuthContext } from '../../hooks/useAuthContext';
function CreateWorkout() {

    const [modalToggle,setModalToggle] = useState(false);
    const [error, setError] = useState(null);
    const {user} = useAuthContext();

  const handleModal =()=>{
    
    if(!user){
      setError('You must Login first')
      return
    }
    openModal()
  }

    const openModal = () => {
        setModalToggle(true)
    }

    const closeModal = () =>{
        setModalToggle(false)
    }

  return (
    <div className='text-center mt-5'>
      <button  className='create text-xs sm:text-sm rounded-xl p-4' onClick={handleModal}>+ Create New Workout</button>
      <WorkoutModal  isOpen={modalToggle} onClose={closeModal}/>
      {error && (<div className="w-full border-red bg-red-100 text-lg p-4 rounded-md mt-3">
        {error}
      </div>)}
    </div>
  );
}

export default CreateWorkout;