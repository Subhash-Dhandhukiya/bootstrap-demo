import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";
import "../styles/home.css";
import { images } from "../utils/images";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container pt-4 mt-5">
        <div className="row">
          <div className="col-md-6 p-5">
            <div className="mt-5">
              <h1
                className="display-4 text-black"
                style={{ fontWeight: "bolder" }}
              >
                Beautiful food & takeaway,{" "}
                <span className="active-color">delivered</span> to your door.
              </h1>
              <p className="mt-4 light-gray description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500.
              </p>
            </div>

            <div className="mt-5">
              <CustomButton
                title={"Place an Order"}
                onClick={() => navigate("/order")}
              />
            </div>

            <div className="mt-4">
              <img
                src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3a3f976b5c3_trustpilot-logo.svg"
                alt="Logo"
                class="logo-image"
              />
              <p className="mt-2 text-black">
                <span className="active-color">4.8 out of 5</span> based on
                2000+ reviews
              </p>
            </div>
          </div>
          <div className="col-md-6 p-5">
            <img
              src={images.img1}
              alt="side_image"
              class="img-fluid image-container"
            />
          </div>
        </div>

        <div className="row mt-5 pt-5 background-color">
          <div className="col-md-6 p-5">
            <div className="mt-5">
              <h1
                className="display-4 active-color"
                style={{ fontWeight: "bolder" }}
              >
                The home of fresh products
              </h1>
              <p className="mt-4 light-gray description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500.
              </p>
            </div>

            <div className="mt-5">
              <CustomButton
                title={"Learn about  us"}
                onClick={() => navigate("/company")}
              />
            </div>
          </div>
          <div className="col-md-6 p-5">
            <img
              src={images.img2}
              alt="side_image"
              class="img-fluid image-container"
            />
          </div>
        </div>

        <div className="my-10">
          <h1
            className="display-4 active-color text-center"
            style={{ fontWeight: "bolder" }}
          >
            How it works.
          </h1>

          <div className="row mt-5 m-auto">
            <div className="col-lg-4 col-md-6">
              <WorkCard
                image={images.burger2}
                title="Adapt your menu items"
                desc="Easily adapt your menu using the webflow CMS and allow customers to browse your items."
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <WorkCard
                image={images.img1}
                title="Adapt your menu items"
                desc="Easily adapt your menu using the webflow CMS and allow customers to browse your items."
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <WorkCard
                image={images.juice2}
                title="Adapt your menu items"
                desc="Easily adapt your menu using the webflow CMS and allow customers to browse your items."
              />
            </div>
          </div>
        </div>
      </div>
      <h1
        className="display-4 active-color text-center"
        style={{ fontWeight: "bolder" }}
      >
        Browse our menu
      </h1>
      <div className="background-color mx-5 rounded">
        <p className="text-center mt-3 p-3">
          Use our menu to place an order online, or phone our store to place a
          pickup order. Fast and fresh food.
        </p>

        <div className="mt-5 mx-5 row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <FoodCard />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <FoodCard />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <FoodCard />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <FoodCard />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <FoodCard />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <FoodCard />
          </div>
        </div>

        <div className="text-center py-5 ">
          <CustomButton
            title="See Fill Menu"
            onClick={() => alert("Coming soon..")}
          />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 p-5">
            <img
              src={images.img5}
              alt="side_image"
              class="img-fluid image-container"
            />
          </div>
          <div className="col-md-6 p-5">
            <div className="mt-5">
              <h1
                className="display-4 active-color"
                style={{ fontWeight: "bolder" }}
              >
                Order online with our simple checkout.
              </h1>
              <p className="mt-4 light-gray description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500.
              </p>
            </div>

            <div className="mt-5">
              <CustomButton
                title={"See our FAQ"}
                onClick={() => navigate("/faq")}
              />
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-5 background-color">
          <div className="col-md-6 p-5">
            <div className="mt-5">
              <h1
                className="display-4 active-color"
                style={{ fontWeight: "bolder" }}
              >
                Call our store and takeaway when it suits you best.
              </h1>
              <p className="mt-4 light-gray description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500.
              </p>
            </div>

            <div className="mt-5">
              <CustomButton
                title={"Ph. +61 233 2333"}
                onClick={() => navigate("/contact")}
              />
            </div>
          </div>
          <div className="col-md-6 p-5">
            <img
              src={images.img4}
              alt="side_image"
              class="img-fluid image-container"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Home;
