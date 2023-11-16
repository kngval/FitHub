import React, { useState } from 'react';
import Modal from 'react-modal'
import axios from 'axios'
function WorkoutModal({isOpen, onClose}) {
    const [title,setTitle] = useState('')
    const [load,setLoads] = useState('')
    const [reps, setReps] = useState('')
    
    const handleSubmit = async(e) =>{
        e.preventDefault();


        try{
            console.log('VITE_REACT_APP_API_URL:', import.meta.env.VITE_REACT_APP_API_URL);
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/api/workouts`,{
                title,
                load,
                reps
            })
            console.log('Response:', response.data)

            onClose()
        } catch(error) {
            console.log(error);
        }
    }


    const ModalStyles = {
        overlay:{
            backgroundColor:'#c0b7c7'
        },
        content:{
            textAlign:'center',
        }
    }

    const labelStyle = {
        display: 'block', // Make labels and inputs appear on separate lines
        marginBottom: '10px', // Add spacing between each label-input pair
        
      };
    
      const inputStyle = {
        marginBottom: '10px', // Add spacing between each label-input pair
        padding: '8px', // Add padding for better appearance
        
      };


  return (
    <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={onClose} contentLabel='Create Workout'>
        <h1>Create A New Workout</h1>
        <form action=""  method='POST' onSubmit={handleSubmit}>
            <div >
            <label style={labelStyle}>Workout: <input style={inputStyle} type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/></label>

            <label style={labelStyle}>Loads (kg): <input style={inputStyle} type="number" value={load} onChange={(e) => setLoads(e.target.value)}/></label>

            <label style={labelStyle}>Reps: <input style={inputStyle} type="number" value={reps} onChange={(e) => setReps(e.target.value)}/></label>
            </div>
            <button  type='submit'>Create</button>
        </form>
        <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default WorkoutModal;