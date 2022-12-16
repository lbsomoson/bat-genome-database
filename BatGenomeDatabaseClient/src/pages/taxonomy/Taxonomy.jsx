import React, { Component } from "react";
// import { withRouter } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";
import TaxonomyHandler from "../../components/taxonomy_handler/TaxonomyHandler";

export class Taxonomy extends Component {
  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} Match={this.props.match} />
        <div className="taxonomy">
          <TaxonomyHandler />
        </div>
      </div>
    );
  }
}

// ako nagcomment out nung withRouter to remove errors kasi deprecated na to sa react-router-v6
// recreate it using useNavigate - lara

// export default withRouter(Taxonomy);
export default Taxonomy;