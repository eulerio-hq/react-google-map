import React, { Component } from 'react';
import './star-rating.css';

class StarRating extends Component {

  componentDidMount() {
    this.setRating();
  }

  hoverHandler = ev => {
    const stars = ev.target.parentElement.getElementsByClassName('star');
    const hoverValue = ev.target.dataset.value;
    Array.from(stars).forEach(star => {
      star.style.color = hoverValue >= star.dataset.value ? 'yellow' : 'gray';
    });
  };

  setRating = ev => {
    const stars = document.getElementById("rating").getElementsByClassName('star');
    Array.from(stars).forEach(star => {
        star.style.color =
        this.props.currentRating >= star.dataset.value ? 'yellow' : 'gray';
    });
  };

  starClickHandler = ev => {
    if(this.props.onClick){
      this.props.onClick(ev);
    }
  };

  render() {
    if( this.props.editable  === "true")
    {
    return (
      <div
        className="rating"
        id="rating"
        data-rating={this.props.currentRating}
      >
        <label className="labels">Rating:</label>
        {[...Array(+this.props.numberOfStars).keys()].map(n => {
          return (
            <span
              className="star"
              name="starRating"
              key={n+1}
              data-value={n+1}
              onMouseOver={this.hoverHandler}
              onClick={this.starClickHandler}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    );
  }

 else {
   return (
     <div
       className="rating"
       id="rating"
       data-rating={this.props.currentRating}
     >
       {[...Array(+this.props.numberOfStars).keys()].map(n => {
         return (
           <span
             className="star"
             name="starRating"
             key={n+1}
             data-value={n+1}
           >
             &#9733;
           </span>
         );
       })}
     </div>
   );
 }
}
}

export default StarRating;
