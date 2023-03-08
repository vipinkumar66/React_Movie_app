import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';

const App = () => {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   alert("To changed the counter to " + count)
  // },[count])

  return(
    <div className='container-fluid mt-5'>
      <div className='row justify-content-center'>
        <button className='btn btn-danger btn-sm' onClick={() => setCount((prevCount) => prevCount-1)}>-</button>
        <h3>Count: {count}</h3>
        <button className='btn btn-primary btn-sm' onClick={() => setCount((prevCount) => prevCount+1)}>+</button>
      </div>
    </div>
    
  );
}
export default App;
