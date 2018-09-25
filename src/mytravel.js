import React from "react";

const Quote = props => (
  <figure>
    <img src={props.image} alt={props.country} />
    <figcaption>
      <blockquote>{props.country}</blockquote>
      <blockquote>{props.destination}</blockquote>
      <blockquote>{props.distance}</blockquote>
    </figcaption>
  </figure>
);

export default Quote;