import { useState } from 'react'

export default function Myheader(props) {
  return (
    <div>
      <nav className='relative w-full flex flex-wrap items-center justify-between py-1 bg-white-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg'>
        <div className='container-fluid w-full flex flex-wrap items-center justify-between px-3'>
          <div className='container-fluid flex flex-col'>
            <a
              className='text-sm text-black'
              href='#'
              onClick={() => props.onPageChange('JoinUs')}
            >
              Join Us
            </a>
            <a
              className='text-sm text-black'
              href='#'
              onClick={() => props.onPageChange('AddArticle')}
            >
              Submit article
            </a>
            <a
              className='text-sm text-black'
              href='#'
              onClick={() => props.onPageChange('')}
            >
              Knowlegebase
            </a>
            <a
              className='text-sm text-black'
              href='#'
              onClick={() => props.onPageChange('AddOrganisation')}
            >
              Add your organisation
            </a>
          </div>
          <div className='bg-gray-400 '>
            <a
              className='px-6 py-5 text-lg'
              onClick={() => props.onPageChange('')}
              href='#'
            >
              <span>PREPKIT</span>
              <span className='text-sm'>.help</span>
            </a>
          </div>
          <div className='flex'>
            <div className='flex-row'>
              <span className='fi fi-pl fib px-2'>
                <img src='./images/ua.svg' alt='ua'></img>
              </span>
              <span className='fi fi-ua fib px-2'>
                <img src='./images/gb.svg' alt='gb'></img>
              </span>
              <span className='fi fi-gr fib px-2'>
                <img src='./images/ru.svg' alt='ru'></img>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
