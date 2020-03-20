const React = require("react");
const { Component } = React;
 
class HomePage extends Component {
  render() {
    return (
        <div>
          <h1>Home Page</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/user">Users</a></li>
          </ul>
        </div>
    );
  }
}
 
module.exports = HomePage;