
import './App.css';
import axios, * as others from 'axios';
import { useState } from 'react';

function App() {
const [newsData, setNewsData]=useState([]);


   const handleClick=()=>
  {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=9904b4a740bf476383cc75a848f17e0d')
    .then((response)=>
    {
      setNewsData(response.data.articles)
      console.log(response.data.articles);
      
    });
    
  }
  return (
    <div className="App">
      <button onClick={handleClick}> Fetch Latest News</button>
    {
      newsData.map((data)=>{
        return (
         <div className='container'>
          <div className='row'>
          <div className='col'>
            <div className="card" style={{width: "15rem"}}>
  <img className="card-img-top" src={data.urlToImage} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
            </div>
          </div>
        );
      })
    }
    </div>
  );
}

export default App;
