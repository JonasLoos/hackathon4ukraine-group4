export default function Myheader() {
  return (
    <div>
      <nav
        className="relative w-full flex flex-wrap items-center justify-between py-1 bg-white-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg"
      >
        <div
          className="container-fluid w-full flex flex-wrap items-center justify-between px-3"
        >
          <div className="container-fluid flex flex-col">
            <p className="text-sm text-black" href="#">contact</p>
            <p className="text-sm text-black" href="#">help us</p>
            <p className="text-sm text-black" href="#">Knolegebase</p>
          </div>
          <div className="bg-gray-400 ">
            <div className="px-6 py-5 text-lg"><e>PREPKIT</e><e className="text-sm">.help</e></div>
          </div>
          <div className="flex">
            <div className="flex-row">
              <span className="fi fi-pl fib px-2"><img src="./images/ua.svg" alt="ua"></img></span>
              <span className="fi fi-ua fib px-2"><img src="./images/gb.svg" alt="gb" ></img></span>
              <span className="fi fi-gr fib px-2"><img src="./images/ru.svg" alt="ru"></img></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}