import React from 'react'
import { ReactComponent as GithubLogo } from '../img/github-white.svg'
import { ReactComponent as RSSLogo } from '../img/rs_school_js.svg'

const Footer = () => {
  return(
    <footer className="footer">
      <div>
        <span> 2021 ©</span>
        <a href="https://github.com/GrnTea">
          <GithubLogo className="github-logo" alt="github"/>
        </a>
      </div>
      <RSSLogo className="rss-logo rss"/>
    </footer>
  )
};

export default Footer