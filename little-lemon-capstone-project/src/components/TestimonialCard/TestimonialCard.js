import React from "react";
import "./TestimonialCard.css";
import starIcon from "../../assets/star.svg";

const TestimonialCard = ({ author, description, image, rating }) => {
  return (
    <div className="testimonial-card" data-testid="testimonial-card">
      <div className="testimonial-rating">
        {rating &&
          [...Array(rating)].map((_, index) => (
            <img key={index} src={starIcon} alt="star" height={15} width={15} />
          ))}
      </div>

      <div className="testimonial-card-container">
        <img className="testimonial-profile-picture" src={image} alt="author" height={50}></img>
        <p className="testimonial-card-author">{author}</p>
      </div>
      <p className="testimonial-description">{description}</p>
    </div>
  );
};

export default TestimonialCard;

//{rating && ...}: This is a conditional rendering pattern. It checks if the rating variable has a truthy value (not null, undefined, 0, false, or an empty string), and if it does, it proceeds with the following logic.
// [...Array(rating)].map((_, index) => ( ... )): This is a pattern to create an array of a given length. In this case, we are creating an array of length rating, and then we are mapping over it to create an array of JSX elements.
// The _ is a placeholder for the value of each element in the array, and the index is the index of each element in the array. Since we don't need the value of each element, we are using _ as a placeholder. We are using the index to give each star a unique key.