import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow me: {"https://twitter.com/chuck_martin"}
      <a href="">@chuck_martin</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Theme crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
