import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     
        {/* <h1> Jisher Mahadev ki jay ho </h1> */}
        <Navbar/>
        <AllRoutes/>
    
    </div>
  );
}

export default App;
