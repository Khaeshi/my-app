import {useState, useRef} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");
 
  function isValidInput() {
    const value = inputRef.current.value;
    return value === "" || !isNaN(value);
  }

  function handleOperation(operation) {
    if (!isValidInput() || inputRef.current.value === "" || /[a-zA-Z]/.test(inputRef.current.value)) {
      setError("Please enter a valid number.");
      return;
    }
    setError("");
    const num = Number(inputRef.current.value);
    setResult((result) => operation(result, num));
  }

  function plus(e) { 
    e.preventDefault(); 
    handleOperation((result, num) => result + num);
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    handleOperation((result, num) => result - num);
  };
 
  function times(e) { 
    e.preventDefault(); 
    handleOperation((result, num) => result * num);
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    handleOperation((result, num) => result / num);
  };
 
  function resetInput(e) {
    e.preventDefault();  
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  }

  return ( 
    <div className="App"> 
      <div className="calculator-card"> 
        <h1>Simplest Working Calculator</h1> 
        <form> 
          <div className="display" ref={resultRef}>{result}</div>
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          /> 
          {error && <div className="error-message">{error}</div>}
          <div className="button-row">
            <button onClick={plus}>add</button>
            <button onClick={minus}>subtract</button>
            <button onClick={times}>multiply</button> 
            <button onClick={divide}>divide</button>
          </div>
          <div className="button-row">
            <button className="reset" onClick={resetInput}>reset input</button>
            <button className="reset" onClick={resetResult}>reset value</button> 
          </div>
        </form> 
      </div>
    </div> 
  ); 
}
export default App;

