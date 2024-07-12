import React, {useState, useEffect} from "react";
import styles from './QuoteGenerator.css'
function QuoteGenerator() {
    const [color, setColor] = useState('blue');
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('')
    function colorClick() {
       let rand1 = Math.floor(Math.random() * 256)
       let rand2 = Math.floor(Math.random() * 256)
       let rand3 = Math.floor(Math.random() * 256)
       let rgb = `rgb(${rand1}, ${rand2}, ${rand3})`
       setColor(rgb)

       const apiKey = 'aiGCAYCYN0Tjv6bdhhTROg==w4m4KWJjAB2y5xfe'

       fetch('https://api.api-ninjas.com/v1/quotes?category=intelligence', {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey
          }
       })
       .then(response => {
        if(!response.ok) {
            throw new Error(`Error ${response.status} ${response.statusText}`)
        }
            return response.json()
    
        })
       .then(data => {
            console.log(data);
            let quoteObj = data[0].quote;
            let authorObj = data[0].author;
            setQuote(quoteObj);
            setAuthor(authorObj)
       })
       .catch(error => console.error('Error has occured', error))

    }
    return (
        <div className="container" style = {{backgroundColor: color}}>
            <div className="quotecontainer">
                <span className="quote">{quote}</span>
                <span className="author">by {author}</span>
                <button className="button" onClick={colorClick}>Generate New Quote</button>
            </div>
        </div>
    )
          }

export default QuoteGenerator