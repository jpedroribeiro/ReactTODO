import React from "react";

class Timer extends React.Component {
  state = {
    running: false,
    lapsed: 0
  };

  handleClearBtn = () => {
    clearInterval(this.timer);
    this.setState({
      running: false,
      lapsed: 0
    });
  };

  handleStartBtn = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer);
      } else {
        const now = Date.now() - state.lapsed;
        this.timer = setInterval(() => {
          this.setState({
            lapsed: Date.now() - now
          });
        });
      }

      return {
        running: !state.running
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Stupid timer</h2>
        <label>{this.state.lapsed}ms</label>
        <button onClick={this.handleStartBtn}>
          {this.state.running ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleClearBtn}>Clear</button>
      </div>
    );
  }
}

export default Timer;
