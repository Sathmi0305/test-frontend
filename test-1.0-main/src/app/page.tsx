import React from 'react';
import Patient from '../../components/patient';
import Message from '../../components/message';
import Timeline from '../../components/timeline';
import Visualization from '../../components/visualization';


export default function homepage() {
  return (
    <div className='flex flex-col space-y-10 p-8'>
    
      <Patient/>
      <Message/>
      <Timeline/>
      <Visualization/>
   
    </div>
  );
}

