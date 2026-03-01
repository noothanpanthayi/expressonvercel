import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [apiData, setApiData] = useState(null);
   useEffect(() => {
    fetch('/api/test')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      });
  }, []);

  return (
    <>
    <h1>API Data:{apiData?apiData:'data not found'}</h1>
    </>
  )
}

export default App
