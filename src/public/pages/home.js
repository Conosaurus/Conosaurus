import React, { Component } from "react";
 
class HomePage extends Component {
  render() {
    return (
        <div>
          <h1>Home Page</h1>
          <nav>
            <li><a href="/">Home</a></li>
            <li><a href="/user">Users</a></li>
          </nav>
        </div>
    );
  }
}
 
export default HomePage;