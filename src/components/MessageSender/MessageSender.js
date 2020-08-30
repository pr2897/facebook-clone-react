import React, { Component } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

class MessageSender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageURL: '',
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.imageURLChanged = this.imageURLChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputChanged = e => {
    this.setState({
      input: e.target.value,
    });
  };

  imageURLChanged = e => {
    this.setState({
      imageURL: e.target.value,
    });
  };

  handleSubmit = e => {
    // handle db operations

    // over here

    // reset state
    this.setState({
      input: '',
      imageURL: '',
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="messageSender">
        <div className="messageSender__top">
          <Avatar />
          <form>
            <input
              onChange={this.inputChanged}
              value={this.state.input}
              className="messageSender__input"
              placeholder={`What's on your mind`}
            />
            <input
              value={this.state.imageURL}
              onChange={this.imageURLChanged}
              placeholder={`Image URL (Optional)`}
            />
            <button onClick={this.handleSubmit}>Hidden Button</button>
          </form>
        </div>
        <div className="messageSender__bottom">
          <div className="messageSender__option">
            <VideocamIcon style={{ color: 'red' }} />
            <h3>Live Video</h3>
          </div>
          <div className="messageSender__option">
            <PhotoLibraryIcon style={{ color: 'green' }} />
            <h3>Photos/Video</h3>
          </div>
          <div className="messageSender__option">
            <InsertEmoticonIcon style={{ color: 'orange' }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageSender;
