import React, { Component } from 'react';
import moment from 'moment';
import Clock from 'react-live-clock';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Howl, Howler } from 'howler';
import sound from './sound.mp3';


var audio = new Audio(sound);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // nowTime: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      time: new Date(),
    };
  }

componentDidMount() {
  this.interval = setInterval(() => this.setState({ nowTime: moment().format("HH:mm") }), 1000);
}

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleTime = (event, date) => {
    this.setState({
      time: date,
    });
  };

  handleSound = () => {
    audio.play();
  };

  render() {
    return (
      <MuiThemeProvider>
      <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
        {this.state.nowTime}
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Calcutta'} />
          <TimePicker
            style={{ marginTop: '24px' }}
            format="ampm"
            hintText={<span>Time<span style={{ color: 'red' }}>*</span></span>}
            value={this.state.time}
            onChange={this.handleTime}
          />
          {/* {moment(this.state.time).format("HH:mm")} */}
          {this.state.nowTime === moment(this.state.time).format("HH:mm") ? "alarm" : "no alarm"}
          {this.state.nowTime === moment(this.state.time).format("HH:mm") ? this.handleSound() : null}
          {/* <RaisedButton
            label="Play"
            onClick={(e) => { e.preventDefault(); audio.play(); }}
          />
          <RaisedButton
            label="stop"
            onClick={(e) => { e.preventDefault(); audio.pause(); }}
          /> */}
      </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
