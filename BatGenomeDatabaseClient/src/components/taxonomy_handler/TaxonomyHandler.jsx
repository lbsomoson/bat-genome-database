import React, { Component } from "react";
import "./TaxonomyHandler.css";
// import history from "../..//history";

export default class TaxonomyHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered_object: "default",
    };
  }

  render() {
    return (
      <div className="thandler">
        <div className="sectionTitle">Select Taxonomy Category</div>

        <div className="tax_picker">
          <div className="tax_picker_row">
            <button
              className="category_button"
              // ako nagcomment out nung mga onClick para matanggal error kasi di pa nacoconvert eto to functional component
              // use useNavigate from react router v6 to replace history pag naconvert na yung file - lara

              // onClick={() => history.push("/taxonomy/domain")}
            >
              DOMAIN
            </button>
            <button
              className="category_button"
              // onClick={() => history.push("/taxonomy/phylum")}
            >
              PHYLUM
            </button>
            <button
              className="category_button"
              // onClick={() => history.push("/taxonomy/class")}
            >
              CLASS
            </button>
          </div>
          <div className="tax_picker_row">
            <button
              className="category_button"
              // onClick={() => history.push("/taxonomy/order")}
            >
              ORDER
            </button>
            <button
              className="category_button"
              // onClick={() => history.push("/taxonomy/family")}
            >
              FAMILY
            </button>
            <button
              className="category_button"
              // onClick={() => history.push("/taxonomy/genus")}
            >
              GENUS
            </button>
            <button
              className="category_button"
              // onClick={() => history.push("/taxonomy/species")}
            >
              SPECIES
            </button>
          </div>
        </div>
      </div>
    );
  }
}
