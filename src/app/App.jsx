import React, {Component} from 'react';
import cat from 'images/cat.jpg';
import dog from 'images/dog.png';
import dogs from 'images/dogs.gif';


const hello = () => {
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src={cat} className="image" alt=""/>
      </div>

      <div className="image-wrapper">
        <img src={dog} className="image" alt=""/>
      </div>

      <div className="image-wrapper">
        <img src={dogs} className="image" alt=""/>
      </div>
    </div>
  )
}

export default hello;