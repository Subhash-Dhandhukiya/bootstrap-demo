import React from "react";
import CustomButton from "../components/CustomButton";
import FoodCard from "../components/FoodCard";
import WorkCard from "../components/WorkCard";
import "../styles/home.css";
import { images } from "../utils/images";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
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
                onClick={() => alert("Coming soon...")}
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
                onClick={() => alert("Coming soon...")}
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
                onClick={() => alert("Coming soon...")}
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
                onClick={() => alert("Coming soon...")}
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

      <div className="container-fluid background-color ">
        <div className="container mt-5 p-4 ">
          <div className="row">
            <div className="mt-5 col-md-5">
              <img src={Logo} alt="logo" className="img-fluid logo" />

              <p className="mt-3 light-gray">Takeaway & Delivery template</p>
              <p className="light-gray">for small - medium businesses. </p>
            </div>

            <div className="mt-5 col-md-7 row">
              <div className="d-flex">
                <div className="mx-5">
                  <p className="text-dark">COMPANY</p>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link light-gray" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link light-gray" to="/order">
                        Order
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link light-gray" to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link light-gray" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mx-5">
                  <p className="text-dark">TEMPLATE</p>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link light-gray" to="/">
                        Style Guide
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link light-gray" to="/">
                        Changelog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link light-gray" to="/">
                        Licence
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link light-gray" to="/">
                        Webflow University
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mx-5">
                  <p className="text-dark">FLOWBASE </p>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link light-gray" to="/">
                        More Cloneables
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="d-flex align-items-center justify-content-between mt-5">
            <p className="light-gray">Built by Flowbase · Powered by Webflow</p>
            <div className="d-flex">
              <a className="nav-link light-gray ps-5" href="">
                Facebook
              </a>
              <a className="nav-link light-gray ps-5" href="">
                Instagram
              </a>
              <a className="nav-link light-gray ps-5" href="">
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
