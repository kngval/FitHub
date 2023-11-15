import React from 'react';

function WorkoutDetails({workout}) {
  return (
    <div>
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): {workout.load}</strong></p>
      <p><strong>Reps: {workout.reps}</strong></p>
    </div>
  );
}

export default WorkoutDetails;