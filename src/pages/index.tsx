import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="relative h-auto">
      <div className="flex max-w-5xl mx-auto">
        <div className="relative w-1/2 py-32 pr-8">
          <h1 className="mb-8 text-6xl font-semibold leading-tight text-gray-600">
            State of the Art NLP Solutions at{' '}
            <span className="text-teal-500">Scale</span>
          </h1>
          <div className="text-base leading-8 text-gray-600">
            Unleash the power of NLP!
          </div>
          <svg
            className="absolute top-0 right-0 z-10 w-20 h-full text-gray-900 transform translate-x-full"
            preserveAspectRatio="none"
            viewBox="0 0 20 20"
          >
            <path d="M0,0 L20,0 L0,20, L0,0 Z" className="fill-current" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img
            className="object-cover w-full h-full"
            src="https://assets-ouch.icons8.com/preview/309/4436abbb-1be1-4089-bd04-8e6e05056f0e.png"
          />
        </div>
      </div>
    </div>
    <div className="py-16 bg-gray-800">
      <div className="max-w-3xl mx-auto mb-32">
        <div className="text-4xl font-medium text-center text-gray-500">
          Our <span className="text-teal-500">Products</span>
        </div>
        <div className="text-base text-center text-gray-600">
          We want to make it easier for our customer to use the recent progress in NLP research and take it to production to improve efficiencies across the board. We are releasing a few products as a demo, and would love to chat about developing more custom solutions for you.
        </div>
      </div>
      <div className="flex items-center max-w-5xl mx-auto mb-32">
        <div className="relative w-1/2 pr-8">
          <div className="absolute top-0 left-0 z-10 w-32 h-64 transform -translate-x-12 -translate-y-12 opacity-50 bg-hero-polka-dots" />
          <div className="relative z-20 overflow-hidden rounded-md shadow-2xl">
            <div className="flex items-center h-6 px-4 bg-gray-700">
              <div className="w-3 h-3 mr-2 bg-red-500 rounded-full" />
              <div className="w-3 h-3 mr-2 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <img src={require('../images/sansa-screenshot.png')} />
          </div>
        </div>
        <div className="w-1/2 pl-8">
          <div className="flex items-center mb-8">
            <svg
              viewBox="0 0 477.867 477.867"
              className="w-10 mr-3 text-teal-500"
            >
              <path
                d="M460.8,119.467h-85.333v-102.4C375.467,7.641,367.826,0,358.4,0H17.067C7.641,0,0,7.641,0,17.067V409.6 c0,37.703,30.564,68.267,68.267,68.267H409.6c37.703,0,68.267-30.564,68.267-68.267V136.533    C477.867,127.108,470.226,119.467,460.8,119.467z M136.533,85.333h102.4c9.426,0,17.067,7.641,17.067,17.067    s-7.641,17.067-17.067,17.067h-102.4c-9.426,0-17.067-7.641-17.067-17.067S127.108,85.333,136.533,85.333z M290.133,409.6h-204.8    c-9.426,0-17.067-7.641-17.067-17.067s7.641-17.067,17.067-17.067h204.8c9.426,0,17.067,7.641,17.067,17.067    S299.559,409.6,290.133,409.6z M290.133,341.333h-204.8c-9.426,0-17.067-7.641-17.067-17.067c0-9.426,7.641-17.067,17.067-17.067    h204.8c9.426,0,17.067,7.641,17.067,17.067C307.2,333.692,299.559,341.333,290.133,341.333z M290.133,273.067h-204.8    c-9.426,0-17.067-7.641-17.067-17.067c0-9.426,7.641-17.067,17.067-17.067h204.8c9.426,0,17.067,7.641,17.067,17.067    C307.2,265.426,299.559,273.067,290.133,273.067z M290.133,204.8h-204.8c-9.426,0-17.067-7.641-17.067-17.067    c0-9.426,7.641-17.067,17.067-17.067h204.8c9.426,0,17.067,7.641,17.067,17.067C307.2,197.159,299.559,204.8,290.133,204.8z     M443.733,409.6c0,18.851-15.282,34.133-34.133,34.133s-34.133-15.282-34.133-34.133v-256h68.267V409.6z"
                className="fill-current"
              />
            </svg>
            <div className="text-3xl font-bold text-teal-500">sansa</div>
          </div>
          <div className="mb-8 text-sm leading-7 text-gray-600">
            Sansa is our news summarizing app where we use state of the art deep learning models, 
            and we expose it as a chrome extension which automatically adds the summary below
            the headline. We also added caching so any summary is sent back almost real time 
            to customers if the article has been processed before, in which case it just a few seconds.
          </div>
          <a
            href="https://chrome.google.com/webstore/detail/sansa/jkmloofbfodpjejpmoebpbcagidckagj?ref=website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block overflow-hidden rounded-md focus:outline-none focus:shadow-outline"
          >
            <img src="https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_206x58.png" />
          </a>
        </div>
      </div>
      <div className="flex items-center max-w-5xl mx-auto">
        <div className="w-1/2 pr-8">
          <div className="flex items-center mb-8">
            <svg
              viewBox="0 0 512 512"
              fill="none"
              className="w-10 mr-3 text-teal-500"
            >
              <path
                d="M508.65 115.988L363.186 261.451L505.061 403.43C509.356 396.045 512 387.58 512 378.438V133.563C512 127.357 510.722 121.476 508.65 115.988Z"
                fill="currentColor"
              />
              <path
                d="M461.913 83.476H50.087C41.76 83.476 34.021 85.712 27.105 89.323L245.76 307.976C252.104 314.32 263.123 314.32 269.356 307.976L486.982 90.456C479.58 86.133 471.088 83.476 461.913 83.476Z"
                fill="currentColor"
              />
              <path
                d="M4.201 113.611C1.527 119.733 0 126.465 0 133.563V378.438C0 387.435 2.573 395.765 6.743 403.07L150.15 259.56L4.201 113.611Z"
                fill="currentColor"
              />
              <path
                d="M339.478 285.159L293.064 331.684C273.568 350.959 241.98 351.275 222.163 331.684L173.857 283.267L32.006 425.017C37.631 427.209 43.696 428.524 50.087 428.524H461.913C468.148 428.524 474.059 427.24 479.57 425.148L339.478 285.159Z"
                fill="currentColor"
              />
            </svg>
            <div className="text-3xl font-bold text-teal-500">
              Autocomplete API
            </div>
          </div>
          <div className="text-sm leading-7 text-gray-600">
            We build tools to help you leverage the power of language models in augmenting you and your employees 
            in mundane tasks. We are initially focusing on creating custom autocomplete models for a companies
            customer service representatives. Have fun with our demo where we help you compose a tweet like an Apple customer
            service rep. We are actively working to integrate it with our customers support platform to increase
            the efficiency of their reps.
          </div>
        </div>
        <div className="relative w-1/2 pl-8">
          <div className="absolute top-0 right-0 z-10 w-32 h-64 transform translate-x-12 -translate-y-12 opacity-50 bg-hero-polka-dots" />
          <div className="relative z-20 overflow-hidden rounded-md shadow-2xl">
            <img
              src="https://assets-ouch.icons8.com/preview/679/9d846518-ab35-478c-84df-4a74c7c3b8f1.png"
              className="object-cover w-full h-100"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
