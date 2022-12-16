import React, { Component } from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
// import { withRouter } from "react-router";

export class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} Match={this.props.match} />
        <div className="homepage">
          <h1>Welcome to the Home Page!</h1>
        </div>
      </div>
    );
  }
}

// ako nagcomment out nung withRouter to remove errors kasi deprecated na to sa react-router-v6
// recreate it using useNavigate - lara

// export default withRouter(Home);
export default Home;