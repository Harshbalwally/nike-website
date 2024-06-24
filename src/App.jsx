import "./App.css";
import HeroSection from "./Hero";

const App = () => {
  return <div className="picture">
   
  
  
     
    <nav className="container">
      <div className="logo">
        <ul>
          <li href="#">menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
          <button>login</button>
        </ul>
       
      </div>
    </nav>
   
    <HeroSection/>
  </div>;
    

};

export default App;