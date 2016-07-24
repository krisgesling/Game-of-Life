"use strict";

/* jshint ignore:start */
var GameOfLife = React.createClass({
  displayName: "GameOfLife",

  render: function render() {
    return React.createElement(
      "div",
      { className: "game-container" },
      React.createElement(ControlPanel, null),
      React.createElement(Board, null)
    );
  }
});

var ControlPanel = React.createClass({
  displayName: "ControlPanel",

  render: function render() {
    return React.createElement(
      "div",
      { className: "control-panel" },
      React.createElement(
        "button",
        null,
        "Run"
      ),
      React.createElement(
        "button",
        null,
        "Pause"
      ),
      React.createElement(
        "button",
        null,
        "Clear"
      ),
      React.createElement(
        "span",
        null,
        "Generation: 0"
      )
    );
  }
});

var Board = React.createClass({
  displayName: "Board",

  getInitialState: function getInitialState() {
    this.setState({ tiles: [] });
    return this.state;
  },
  componentDidMount: function componentDidMount() {
    this.setState({ tiles: [10, 5] });
  },
  render: function render() {
    return React.createElement("div", { className: "board" });
  }
});

var Tile = React.createClass({
  displayName: "Tile",

  render: function render() {
    return React.createElement("div", { className: "tile" });
  }
});

ReactDOM.render(React.createElement(GameOfLife, null), document.getElementById('container'));
/* jshint ignore:end */
