import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import './App.css';


function App() {
  const [clickable, setClickable] = useState(1);
  // async function handleClick(e) {
  //   console.log('working')
  //   var holder = e.target.value;  
  //   try {
  //     await fetch(myUrl + holder, {
  //       method: "GET",
  //       mode: "no-cors"
  //     });
  //     console.log("request sent");
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const myUrl = 'http://10.60.25.195:3001/';
  async function handleClick(e) {
    console.log('working')
    var holder = parseInt(e.currentTarget.value);
    if (clickable) {
      if (holder === 2) {
        console.log(2222)
        setClickable(0);
      };
      if (holder === 3) {
        return;
      }
      try {
        await fetch(myUrl + holder, {
          method: "GET",
          mode: "no-cors"
        });
        console.log("request sent");
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log(1111111111111)
      if (holder === 0 || holder === 1 || holder === 2) {
        return;
      } else if (holder === 4) {
        holder = 6
      } else if (holder === 5) {
        holder = 7
      } else if (holder === 3) {
        setClickable(1);
      }
      try {
        await fetch(myUrl + holder, {
          method: "GET",
          mode: "no-cors"
        });
        console.log("request sent");
      } catch (error) {
        console.error("Error:", error);
      }
    }

  };
  return (
    <div className="App">
      <div>
        <button className='button-30' value="0" onClick={handleClick}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button className='button-30' value="1" onClick={handleClick}><FontAwesomeIcon icon={faChevronRight} /></button>
        <button className='button-30' value="4" onClick={handleClick}><FontAwesomeIcon icon={faChevronUp} /></button>
        <button className='button-30' value="5" onClick={handleClick}><FontAwesomeIcon icon={faChevronDown} /></button>
        <button className='button-30 confirm' value="2" onClick={handleClick}><span>确认</span></button>

      </div>
      <div>

        <button className='button-30' value="3" onClick={handleClick}><span>返回</span></button>
      </div>
      <div>
        <button className='button-30' value="8" onClick={handleClick}><span>上一页</span></button>
        <button className='button-30' value="9" onClick={handleClick}><span>下一页</span></button>
      </div>
    </div>
  );
}

export default App;
