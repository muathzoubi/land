import { useState } from 'react';
import './App.css';
import LandingPage from './landing-page';
import MultiStepForm from './reg-form';

function App() {
const [regPage,setRegPage]=useState(true)
const handlePage=()=>{
  setRegPage(true)
}
  return (
    <>
  {regPage?    <div>
        <video autoPlay={true} loop={true} muted={true} id="myVideo" style={{}}>
          <source
            src="https://videos.pexels.com/video-files/4115283/4115283-uhd_1440_2732_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <LandingPage handlePage={handlePage}/>
      </div>
     : <MultiStepForm />
    }
    </>
  );
}

export default App;
