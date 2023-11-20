import './App.css';

function App() {
  async function handleClick(e) {
    await fetch('http://10.60.25.24:3001/'+e.target.value, {
      method: "GET",
      mode: "no-cors"
    })
    console.log("request sent")
  };
  return (
    <div className="App">
     <button className='button-30' value="0" onClick={handleClick}>One</button>
     <button className='button-30' value="1" onClick={handleClick}>Two</button>
    </div>
  );
}

export default App;
