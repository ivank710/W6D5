import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
      // hours: new Date().getHours(),
      // minutes: new Date().getMinutes(),
      // seconds: new Date().getSeconds()
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.countdownID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdownID)
  }

  tick() {
    //debugger
    this.setState({ time: new Date().toLocaleTimeString()});
    // this.setState({ minutes: new Date().getMinutes()});
    // this.setState({ seconds: new Date().getSeconds()});
  }

  render() {

    return (
      <div className="cheese">
        <h2>Time: {`${this.state.time}`} </h2>

      </div> 
    );
  }
}

export default Clock;