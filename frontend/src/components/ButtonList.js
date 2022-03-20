export default function ButtonList() {
  return (
    <div className='flex  justify-center py-5 '>
      <div className='flex flex-col w-100'>
        <button
          type='button'
          className='py-2 px-4  my-3 bg-white-600 hover:bg-gray-300  text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
        >
          Transport
        </button>
        <button
          type='button'
          className='py-2 px-4 my-3 bg-white-600 hover:bg-gray-300  text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
        >
          Accomodation
        </button>
        <button
          type='button'
          className='py-2 px-4 my-3 bg-white-600 hover:bg-gray-300  text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
        >
          Documents
        </button>
        <button
          type='button'
          className='py-2 px-4 my-3 bg-white-600 hover:bg-gray-300  text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
        >
          Medical help
        </button>
        <button
          type='button'
          className='py-2 px-4 my-3  bg-white-600 hover:bg-gray-300  text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
        >
          Work
        </button>
      </div>
    </div>
  )
}
