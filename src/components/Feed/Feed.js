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
      ...this.state.list,
      {
        input,
        imageURL,
      },
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
        <Post
          profilePic={this.props.profilePic}
          username={this.props.username}
          timestamp={this.props.timestamp}
          message={this.props.message}
          image={this.props.message}
        />
        <Post
          profilePic="data:image/jpeg;base64,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"
          username="piyush"
          timestamp="2020-08-30 06:30PM"
          message="all good! Lets rock...!"
          image="data:image/jpeg;base64,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"
        />
      </div>
    );
  }
}

export default Feed;
