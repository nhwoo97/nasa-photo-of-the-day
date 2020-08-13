import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Body from './components/Body'
import Image from './components/Image'
import Author from './components/Author'
import Date from './components/Date'

function App() {
  const [data, setData] = useState({})
  let [date, setDate] = useState(1)
  useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=OvzxGy5qGUwzZjK0ajjKGeRs9cb3hSTdsj2lOIlZ&date=2020-08-${date}`)
  .then(res => {
    setData(res.data)
  })
  .catch(err => {
    console.log(err)
  })
}, [date]);

const increase = () => {
  setDate(date+1)
}

const decrease = () => {
  setDate(date-1)
}

  return (
    <div className="App">
      <Date data={data} increase={increase} decrease={decrease}/>
      <Author data={data}/>
      <Image data={data}/>
      <Body data={data}/>
    </div>
  );
}

export default App;
