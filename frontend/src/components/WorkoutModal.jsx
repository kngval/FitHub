import React, { useState } from 'react';
import Modal from 'react-modal'
import axios from 'axios'
function WorkoutModal({isOpen, onClose}) {
    
    const handleSubmit = async(e) =>{
        e.preventDefault();


        try{
            const response = await axios.post('/api/workouts',{
                title,
                reps,
                load
            })
            console.log('Response:', response.data)
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
        <form action=""  method='POST'>
            <div >
            <label style={labelStyle}>Workout: <input style={inputStyle} type="text" required/></label>

            <label style={labelStyle}>Loads (kg): <input style={inputStyle} type="number" /></label>

            <label style={labelStyle}>Reps: <input style={inputStyle} type="number" /></label>
            </div>
            <button  type='submit' onSubmit={handleSubmit}>Create</button>
        </form>
        <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default WorkoutModal;