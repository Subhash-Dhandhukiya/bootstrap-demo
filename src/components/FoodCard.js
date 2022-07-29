import React from "react";
import "../styles/components.css";
import { images } from "../utils/images";
import CustomButton from "./CustomButton";

const FoodCard = () => {
  return (
    <div>
      <div className="d-flex border bg-white p-4 m-2 ">
        <img
          src={images.burger1}
          alt="food_img"
          className="img_style rounded"
        />

        <div className="ms-4">
          <div className="center-item">
            <h4 className="text-dark" style={{ fontWeight: "bold" }}>
              Burger Dreams
            </h4>
            <p className="active-color">$ 9.20 USD</p>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="row">
            <input
              style={{ width: "100px" }}
              className="form-control me-3"
              type="number"
              name=""
              id=""
            />
            <CustomButton
              title={"Add to Cart"}
              onClick={() => alert("Coming soon")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
