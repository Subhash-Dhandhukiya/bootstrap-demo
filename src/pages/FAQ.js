import React from "react";
import Footer from "../components/Footer";

const FAQ = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center container-fluid background-color h-500 text-center">
        <h2
          style={{ fontWeight: "bolder", width: "40%" }}
          className="display-3 text-black "
        >
          Frequently Asked <span className="active-color">Questions</span>
        </h2>
      </div>

      <div id="accordion" className="container mt-5">
        <div className="card mb-3">
          <div className="card-header">
            <a
              className="btn active-color"
              data-bs-toggle="collapse"
              href="#collapseOne"
            >
              Do you offer any vegan options?
            </a>
          </div>
          <div
            id="collapseOne"
            className="collapse show"
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header">
            <a
              className="collapsed btn active-color"
              data-bs-toggle="collapse"
              href="#collapseTwo"
            >
              Do you offer any gluten free options?
            </a>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header">
            <a
              className="collapsed btn active-color"
              data-bs-toggle="collapse"
              href="#collapseThree"
            >
              Can I clone these sections?
            </a>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus tristique posuere..
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header">
            <a
              className="collapsed btn active-color"
              data-bs-toggle="collapse"
              href="#collapseFour"
            >
              Why is Webflow so amazing?
            </a>
          </div>
          <div
            id="collapseFour"
            className="collapse"
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus tristique posuere..
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header">
            <a
              className="collapsed btn active-color"
              data-bs-toggle="collapse"
              href="#collapseFive"
            >
              Do we need to write a business plan?
            </a>
          </div>
          <div
            id="collapseFive"
            className="collapse"
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus tristique posuere..
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header">
            <a
              className="collapsed btn active-color"
              data-bs-toggle="collapse"
              href="#collapseSix"
            >
              How can we get funding for our start up?
            </a>
          </div>
          <div
            id="collapseSix"
            className="collapse"
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus tristique posuere..
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default FAQ;
