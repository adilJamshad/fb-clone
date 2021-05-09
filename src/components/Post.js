import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons'
import React from 'react'
import "./post.css"

const Post = ({ profilePic, message, timestamp, imgName, username}) => {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar src={profilePic} className="post-avatar" />
        <div className="post-top-info">
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
        </div>
      </div>
      <div className="post-bottom">
        <p>{message}</p>
      </div>
      <div className="post-options">
        <div className="post-option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post-option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="post-option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="post-option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  )
}

export default Post
