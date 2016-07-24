/* jshint ignore:start */
var GameOfLife = React.createClass({
  render: function() {
    return (
      <div className="game-container">
        <ControlPanel />
        <Board />
      </div>
    );
  }
});

var ControlPanel = React.createClass({
  render: function() {
    return (
      <div className="control-panel">
        <button>Run</button>
        <button>Pause</button>
        <button>Clear</button>
        <span>Generation: 0</span>
      </div>
    );
  }
});

var Board = React.createClass({
  getInitialState: function() {
    this.setState({ tiles: [] });
    return this.state;
  },
  componentDidMount: function() {
    this.setState({ tiles: [10, 5] });
  },
  render: function() {
    return (
      <div className="board">
      </div>
    );
  }
});

var Tile = React.createClass({
  render: function() {
    return (
      <div className="tile">
      </div>
    );
  }
});

ReactDOM.render(
  <GameOfLife />,
  document.getElementById('container')
);
/* jshint ignore:end */
