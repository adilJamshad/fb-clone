import { Avatar, Input } from '@material-ui/core'
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"

import React, { useState } from 'react'
import "./messagesender.css"


const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0])
    }
  }
  
  const handleSubmit = () => {
    console.log("Submitting")
  }

  return (
    <div className="message-sender">
      <div className="message-sender-top">
        <Avatar src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png" />
        <form>
          <input type="text" className="message-sender-input" value={input} placeholder="What's on your mind?" onChange={(e)=> setInput(e.target.value)}/>
          <Input type="file" className="message-sender-file-selector" onChange={handleChange}  />
          <button onClick={handleSubmit} type="submit"  >Hidden Submit</button>
        </form>
      </div>
      <div className="message-sender-bottom">
        <div className="message-sender-option">
          <VideocamIcon style={{color: 'red'}} />
          <h3>Live Video</h3>
        </div>
        <div className="message-sender-option">
          <PhotoLibraryIcon style={{color: 'green'}} />
          <h3>Photo / Video</h3>
        </div>
        <div className="message-sender-option">
          <InsertEmoticonIcon style={{color: 'orange'}} />
          <h3>Feeling / Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
