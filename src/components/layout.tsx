import React from 'react'
import Scrollbars from 'react-custom-scrollbars'

import Header from './header'
import '../styles/tailwind.css'

interface Props {
  children: JSX.Element | Array<JSX.Element>
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen antialiased bg-gray-900 font-inter">
      <Header />
      <div className="flex-1">
        <Scrollbars style={{ height: '100%' }} autoHide universal>
          <main>{children}</main>
        </Scrollbars>
      </div>
      <a
        href="https://www.producthunt.com/posts/sansa?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-sansa"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 right-0 z-50 mb-8 mr-8"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=190567&theme=light"
          alt="SANSA - Deep learning based news summarization app | Product Hunt Embed"
          style={{ width: 250, height: 54 }}
        />
      </a>
    </div>
  )
}

export default Layout
