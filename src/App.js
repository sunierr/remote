import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './App.css';

//icon({name: 'user'});

function App() {
  async function handleClick(e) {
    console.log('working')
    try {
      await fetch('http://10.60.25.24:3001/' + e.target.value, {
        method: "GET",
        mode: "no-cors"
      });
      console.log("request sent");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="App">
      <button className='button-30' value="0" onClick={handleClick}><FontAwesomeIcon icon={faChevronLeft} /></button>
      <button className='button-30' value="1" onClick={handleClick}><FontAwesomeIcon icon={faChevronRight} /></button>
      <button className='button-30' value="4" onClick={handleClick}><FontAwesomeIcon icon={faChevronUp} /></button>
      <button className='button-30' value="5" onClick={handleClick}><FontAwesomeIcon icon={faChevronDown} /></button>
      <button className='button-30' value="2" onClick={handleClick}>确认</button>
      <button className='button-30' value="3" onClick={handleClick}>关闭</button>
    </div>
  );
}

export default App;
