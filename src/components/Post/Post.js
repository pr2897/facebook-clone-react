import React, { Component } from 'react';

import './Post.css';
import { Avatar } from '@material-ui/core';

export class Post extends Component {
  render() {
    const { profilePic, image, username, timestamp, message } = this.props;
    return (
      <div className="post">
        <div className="post__top">
          <Avatar src={profilePic} className="post__avatar" />
          <p>
            <h2>{username}</h2>
            <h3>{timestamp}</h3>
            {image && <img src={image} alt="upload_image" />}
            {message}
          </p>
        </div>
      </div>
    );
  }
}

export default Post;
