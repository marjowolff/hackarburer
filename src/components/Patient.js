import React from 'react';
import ReactPlayer from 'react-player/youtube'
import myVideo from '../images/webcam.mov'
import './Patient.css'



const Patient = (props) => {
  return (
    <div className="Patient">
      {props.status === 'you' ?
        (<div className='Patient__PlayerWrapper' >
          <ReactPlayer className='react-player' url='https://youtu.be/ObIdE94YQJU?showinfo=0' playing={true} loop={true} width='100%' height='100%' config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                showinfo: 0,
                loop: 1
              }
            }
          }} />
        </div>)
        : <img className='Patient__Img' src={require(`../${props.pic}`)} alt="patient" />}
      {props.status === 'you' ?
        <div className="Patient__Name Patient__Name__You"> {props.name}</div> : <div className="Patient__Name"> {props.name}</div>}
    </div>

  );
}
//
export default Patient;
