
import './App.css';
import Nav from './navigation/Nav';
import Products from './products/Products';
import Recommended from './recommended/Recommended';
import SideBar from './sideBar/SideBar';

function App() {
  return (
   
    <div >
      <SideBar/>
      <Nav/>
      <Recommended/>
      <Products/>
    </div>
  );
}

export default App;
