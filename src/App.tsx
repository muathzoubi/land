import './App.css';
import LandingPage from './landing-page';

function App() {

  return (
    <>
      <div>
        <video autoPlay={true} loop={true} muted={true} id="myVideo" style={{}}>
          <source
            src="https://videos.pexels.com/video-files/4115283/4115283-uhd_1440_2732_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <LandingPage />
      </div>
    </>
  );
}

export default App;
