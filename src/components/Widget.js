import React from 'react'

const Widget = () => {
  return (
    <div className="widgets">
      <iframe src="https://facebook.com/plugins/page.php?href=https%3A%"
        width='340'
        height= '1500'
        style={{border: 'none', overflow: 'hidden'}}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      >

      </iframe>
    </div>
  )
}

export default Widget
