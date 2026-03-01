import { useEffect, useState } from 'react'
import './App.css'

function App() {
  interface ApiData {
    id:string,
    make:string
  }
  const [apiData, setApiData] = useState<ApiData[]>([]);
   useEffect(() => {
    fetch('/api/test')
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setApiData(response.data);
      });
  }, []);

  return (
    <>
    <h1>API Data:{apiData?apiData[0].make:'data not found'}</h1>
    </>
  )
}

export default App
