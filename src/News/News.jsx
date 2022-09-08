import axios, * as others from 'axios';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function News()
{
    const [newsData, setNewsData]=useState([]);
const[value,setValue]=useState(false);


   const handleClick=()=>
  {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=9904b4a740bf476383cc75a848f17e0d')
    .then((response)=>
    {
      setNewsData((pre)=>
      {
        return [...pre , response.data.articles[0], response.data.articles[1], response.data.articles[2]]
      })
      console.log(response.data.articles);
      setValue(true);
      
    });
    
  }
  console.log(newsData);
  return (
    <div className="App">
      <button onClick={handleClick}> Fetch Latest News</button>
    {value?<div>
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={newsData[0].urlToImage}/>
                    <p className="legend">{newsData[0].title}</p>
                </div>
                <div>
                    <img src={newsData[1].urlToImage}/>
                    <p className="legend">{newsData[1].title}</p>
                </div>
                <div>
                    <img src={newsData[2].urlToImage}/>
                    <p className="legend">{newsData[2].title}</p>
                </div>
                
            </Carousel>
    </div>:null
    }
    </div>
  );
}