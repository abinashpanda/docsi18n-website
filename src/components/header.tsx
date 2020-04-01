import React from 'react'

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className="relative z-50 py-3 bg-gray-900 shadow-xl">
      <div className="flex items-center max-w-5xl mx-auto">
        <div className="w-10 h-10 mr-3 bg-gray-800 rounded-md" />
        <div className="text-lg font-bold tracking-wider text-teal-700">
          docsi18n
        </div>
      </div>
    </header>
  )
}

export default Header
