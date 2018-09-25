//  Компонент для смены цитат.

import React, { Component } from 'react';

 const quotes =
  [
    "Random quote N1",
    "Random quote N2",
    "Random quote N3",
    "Random quote N4",
    "Random quote N5",
    "Random quote N6",
    "Random quote N7",
  ];

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return quotes[rand];
  };



class Comment extends Component {
    
  render() {
  	var c = this.props.update;
    return (
      <div>
       <h2>{randomInteger(0,quotes.length-1)}</h2>
      </div>
    );
  }
}    

export default Comment;

