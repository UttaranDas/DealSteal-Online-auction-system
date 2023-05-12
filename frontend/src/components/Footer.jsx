import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-gray-400 shadow-lg">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-4 w-full md:mb-0 md:w-auto">
              <p> DealSteal - An Online Auction Website</p>
            </div>
            <div className="w-full md:w-auto">
              <ul className="flex items-center">
                <li className="mr-6">
                  <Link to="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li className="mr-6">
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer