import { useState,useEffect } from "react";
import "./App.css";
import { Icon } from "./components/Icon";
import changeColor from './utils/changeColor'
function App() {
  useEffect(()=>{
    handleClick();
  },[])
  const [quote, setQuote] = useState("");
  const [color,setColor]  = useState("#fff")
  const [author, setAuthor] = useState("");
  const colors  = ["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"]
  const handleClick = () => {
   
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
      let color=colors[Math.floor(Math.random()*colors.length)];
      setColor(color);
      changeColor({
        color:color,
      });
      setQuote(data.content)
      setAuthor(data.author)
     
    }).catch(err=>{
      console.log(err)
      setQuote('Error fetching quote')
      setAuthor('Error fetching author')
    });
  };
  return (
    <div className="App" >
      <article id="quote-box" >
        <p id="text">
          <Icon
            iconName="Quote"
            color={color}
            size={55}
          />

          {quote}
        </p>
        <p id="author">- {author}</p>
        <div className="share">
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"> 
            <Icon iconName="Twitter" color={color} size={30} />
          </a>
          <button id="new-quote" onClick={handleClick}>
            New Quote
          </button>
        </div>
      </article>
    </div>
  );
}

export default App;
