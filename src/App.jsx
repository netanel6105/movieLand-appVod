
import './App.css';
import Footer from './components/Footer';
import VodInput from './components/VodInput';
import VodList from './components/VodList';
import VodStrip from './components/VodStrip';

function App() {
  return (
   
    <div>
     <VodInput/>
     <VodStrip/>
     <VodList/>
     <Footer/>
    </div>
  );
}

export default App;
