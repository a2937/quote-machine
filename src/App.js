
import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'
class App extends Component {


  constructor() {
    super();
    this.state = {
      quoteId: -1
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.fetchQuotes();
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  /**
   * Uses a quote object to set object properties
   * @param {String} json
   */
  updateQuote(json) {
    var cleanName = json.author.replace(/ +/g, "%20");
    var cleanContent = json.content.replace(/ +/g, '%20');

    document.getElementById('author').textContent = json.author;
    document.getElementById('text').textContent = json.content;
    document.getElementById('tweet-quote').href = "https://www.twitter.com/intent/tweet?text=" + cleanName + ":%0A" + cleanContent;
    document.getElementById('tumblr-quote').href = "http://tumblr.com/widgets/share/tool?posttype=quote" +
      "&tags=quotes&caption=" + cleanName
      + "&content=" + cleanContent + "&canonicalUrl="
      + "quote-machine.com";
  }

  fetchQuotes() {
    fetch('https://api.quotable.io/random')
      // Handle success
      .then(response => {
        return response.json();
      })
      .then(json => {
        return this.updateQuote(json);
      })
      .catch(err => {
        console.log(err);
      })
  }



  render() {
    return (

      <div className="center topOfPage" id="quote-box">

        <p id="text" className="twentyPoint italic">
        </p>
        <p id="author" className="twentyPoint">
        </p>
        <button id="new-quote" className="twentyPoint" onClick={this.onClick}>
          Get a new quote
        </button>
        <br />
        <br />
        <a id="tweet-quote" title="Tweet this quote to your friends" href="./">
          <FontAwesomeIcon icon={faTwitter} className="thirtyTwoPoint peachText" />
        </a>
        <a id="tumblr-quote" title="Post this quote on Tumblr" href="./">

          <FontAwesomeIcon icon={faTumblr} className="thirtyTwoPoint redText" />
        </a>


      </div >
    );
  }
}

export default App;
