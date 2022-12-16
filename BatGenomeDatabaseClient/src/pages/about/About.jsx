import React, { Component } from "react";
// import { withRouter } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";

export class About extends Component {
  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} Match={this.props.match} />
        About page
      </div>
    );
  }
}


// ako nagcomment out nung withRouter to remove errors kasi deprecated na to sa react-router-v6
// recreate it using useNavigate - lara

// export default withRouter(About);
export default About;
