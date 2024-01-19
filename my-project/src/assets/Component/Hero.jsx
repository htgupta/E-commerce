import React, { useState} from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Caro from "./Caro";
import CaroW from "./CaroW";
import CaroK from "./CaroK";
import Banner from "./Banner";
import Promo from "./promo";
import Bestsel from "./Bestsel";
import Logo from "./Logo";
// import Overview from "./Overview";


export default function Hero() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
     

      <div className="glide-01 relative w-full"></div>
 

      {/*<!-- Component: Navbar with Avatar --> */}
      {/*<!-- Header --> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-black text-white shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        {/* ... (rest of your header code) */}
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-white"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}

            <Link // Changed to Link component
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              to="/"
            >
              {/* ... (rest of your logo SVG code) */}
              #Trendy Treads
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
              {/* ... (rest of your mobile trigger button code) */}
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link // Changed to Link component
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-white focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/"
                >
                  <span>Home</span>

                  {/* MAN'S */}
                </Link>
                <Link // Changed to Link component
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-white focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/Mans"
                >
                  <span>Man's</span>
                </Link>

                {/* women */}

                <Link // Changed to Link component
                  to="/Womens"
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  <span> Womens</span>
                </Link>

                {/* kids's */}
                <Link // Changed to Link component
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-white focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/Kids"
                >
                  <span>Kids's</span>
                </Link>

                
                {/* SingUp */}
                <Link // Changed to Link component
                  to="/SignUp"
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  <span> SignUp</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link // Changed to Link component
                  to="/Wishlist"
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  {/* <img
                  src="https://cdn-icons-png.flaticon.com/512/3440/3440293.png" // Replace this with the actual path to your avatar image
                  className=" w-8 "
                /> */}
                  <span>Wishlist</span>
                </Link>
              </li>
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              {/*        <!-- Avatar --> */}
              <Link // Changed to Link component
                  to="/Loging"
                  role="menuitem"
                  aria-haspopup="false"
                  title="LogIn"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-white focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  <img
                  src="https://cdn4.iconfinder.com/data/icons/mayssam/512/user-512.png" // Replace this with the actual path to your avatar image
                  className=" w-8 "
                />
                  {/* <span>Log in</span> */}
                </Link>
              <Link // Changed to Link component
                to="/Cart"
                role="menuitem"
                aria-haspopup="false"
                title="Cart"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQ6zjUCsug-MBlhhfZAuWSgyIW4Ue2LnedZiVvhjFBA&s" // Replace this with the actual path to your avatar image
                  className=" w-8  "
                />
                
              </Link>
              

              {/* ... (rest of your avatar code) */}

              {/*        <!-- End Avatar --> */}
            </div>
          </nav>
        </div>
      </header>
      {/* highlight */}
      {/* <br></br>
      <Promo/> */}
      

      {/*<!-- Component: Carousel with controls inside --> */}

      <div className="glide-01 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li></li>
          </ul>
        </div>
      </div>
      <br></br>
      {/* Hero head component  */}
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <svg
              width="30"
              height="36"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="black"
              />
            </svg>
            
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                {/* <p className="text-sm font-medium">We&apos; hiring</p> */}
              </div>
              {/* <p className="text-sm font-medium">Join our team &rarr;</p> */}
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              {/* People who care about your growth */}
              RUNNING IS BELIEVING
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur modi blanditiis dolores quasi eaque explicabo!
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                ></input>
                <p className="mt-2 text-sm text-gray-500">
                  We care about your privacy
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/4] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[600px] xl:aspect-[16/9]"
              src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F03%2Fmschf-lil-nas-x-nike-air-max-97-satan-shoes-human-blood-ink-666-jesus-shoe-am97-release-info-0.jpg?cbr=1&q=90"
              alt=""
            />
          </div>
        </div>
      </div>

      <Banner/>

     

      

      {/* main pic */}
      {/* <div>
        <img
          className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[900px] xl:aspect-[14/8]"
          src="https://www.rollingstone.com/wp-content/uploads/2021/03/lil-nas-x-mschf-nike-sues.jpg?w=1581&h=1054&crop=1"
          alt=""
        />
      </div> */}
      {/*  */}

      <div>
        <h1 className="text-center mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          New Launches
        </h1>
      </div>
     
      <Caro />
      <div className="text-center mt-8 text-3xl  tracking-tight text-black md:text-4xl lg:text-2xl">

<Link to="/Mans">
<button>Show More-</button>
</Link>
</div>
      {/* <Promo/> */}
      <Logo/>
      {/* <Bestsel/> */}
   

      <br></br>

      <br></br>
      {/*<!-- Component: Card Carousel --> */}
      <div className="glide-06 relative w-full overflow-hidden rounded bg-white shadow-xl shadow-slate-200">
       
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Card Carousel --> */}
      <br></br>
     
      <Promo/> 
      {/* new pic */}
      <div>
        <h1 className="text-center mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Man's lconic
        </h1>
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-md border">
            <img
              src="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?cs=srgb&dl=pexels-mstudio-1240892.jpg&fm=jpgs"
              alt="Laptop"
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                Nike Airmax v2
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Sneakers
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Nike
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Airmax
                </span>
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Colors : </span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
              </div>
              <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Size : </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  8 UK
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  9 UK
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  10 UK
                </span>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
        x
      </div>

      <div className="text-center mt-8 text-3xl  tracking-tight text-black md:text-4xl lg:text-2xl">
      <Link to="/Mans">
      <button>Show More-</button>
    </Link>
      </div>
      

      {/* Womens */}

      <div>
        <h1 className="text-center mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Womens lconic
        </h1>
      </div>

      {/* <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-md border">
            <img
              src="https://plus.unsplash.com/premium_photo-1671379100110-991e7d591fea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHNob2VzfGVufDB8fDB8fHww"
              alt="Laptop"
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                Nike Airmax v
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Sneakers
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Nike
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Airmax
                </span>
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Colors : </span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
              </div>
              <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Size : </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  8 UK
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  9 UK
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  10 UK
                </span>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div> */}
      {/* <div className="text-center mt-8 text-3xl  tracking-tight text-black md:text-4xl lg:text-2xl">

      <Link to="/Womens">
      <button>Show More-</button>
    </Link>
      </div> */}
      <CaroW />
      <div className="text-center mt-8 text-3xl  tracking-tight text-black md:text-4xl lg:text-2xl">

<Link to="/Womens">
<button>Show More-</button>
</Link>
</div>
      
      {/* kids */}
      <div>
        <h1 className="text-center mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Kid's Iconic
        </h1>
      </div>

     

      <CaroK/>
      <div className="text-center mt-8 text-3xl  tracking-tight text-black md:text-4xl lg:text-2xl">

<Link to="/Kids">
<button>Show More-</button>
</Link>
</div>

      {/*  last pic */}

      {/* <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <img
          className="aspect-[3/4] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[800px] xl:aspect-[16/9]"
          src="https://images.unsplash.com/photo-1474494819794-90f9664b530d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div> */}
       <Bestsel/>
       <div>
        <img
          className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[900px] xl:aspect-[14/8]"
          src="https://www.rollingstone.com/wp-content/uploads/2021/03/lil-nas-x-mschf-nike-sues.jpg?w=1581&h=1054&crop=1"
          alt=""
        />
      </div>

      <div></div>
      {/* <Overview/> */}


      {/* <Filter/> */}

      {/* Footer  */}
      <Link // Changed to Link component
        role="menuitem"
        aria-haspopup="false"
        className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
        to="/Footer"
      ></Link>
      <Footer />
    </>
  );
}
