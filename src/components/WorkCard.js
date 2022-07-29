import React from "react";

const WorkCard = ({ image, title, desc }) => {
  return (
    <div className="card border-0 p-3" style={{ width: "400px" }}>
      <img
        src={image}
        className="card-img-top circle_img m-auto"
        alt="food_image"
      />
      <div className="card-body text-center mt-3 img-fluid">
        <h4 className="text-black">{title}</h4>
        <p className="light-gray">{desc}</p>
      </div>
    </div>
  );
};

export default WorkCard;
