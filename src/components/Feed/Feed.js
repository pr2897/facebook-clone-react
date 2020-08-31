import React, { Component } from 'react';
import './Feed.css';

import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      input: '',
      iamgeURL: '',
    };

    this.inputChanged = this.inputChanged.bind(this);
    this.imageURLChanged = this.imageURLChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputChanged = e => {
    this.setState({ input: e.target.value });
  };

  imageURLChanged = e => {
    this.setState({ imageURL: e.target.value });
  };

  handleSubmit = e => {
    const input = this.state.input;
    const imageURL = this.state.imageURL;
    const newState = [
      {
        input,
        imageURL,
      },
      ...this.state.list,
    ];
    this.setState({
      list: newState,
    });

    this.setState({
      input: '',
      imageURL: '',
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="feed">
        <StoryReel />
        <MessageSender
          inputChanged={this.inputChanged}
          imageURLChanged={this.imageURLChanged}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />

        {/* props to be passed to post component */
        /* profilePic, image, username, timestamp, message */}

        {this.state.list.map((item, index) => (
          <Post
            message={item.input}
            username="Piyush"
            timestamp={new Date().toISOString()}
            key={index}
            image={item.imageURL}
          />
        ))}
      </div>
    );
  }
}

export default Feed;
