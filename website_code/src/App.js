import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Pages';
import './App.css';
import Details from './Components/DetailsSection';
import VideoComponent from './Components/Animated Vid';
import ImageComponent from './Components/Image_component';
import Hardware from './Components/HardwareDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/details' element = {<Details/>}/>
          <Route path='/animated-video' element = {<VideoComponent/>}/>
          <Route path='/integrated-circuit' element = {<ImageComponent/>}/>
          <Route path='/hardware-details' element = {<Hardware/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
