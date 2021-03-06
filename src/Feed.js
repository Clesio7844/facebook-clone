import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import Post from './Post';
import MessageSender from './MessageSender';

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
