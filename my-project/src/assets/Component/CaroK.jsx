// import React, { useState } from "react";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

// /* Install pure-react-carousel using -> npm i pure-react-carousel */

// export default function Caro() {
//     return (
//         <div className="container mx-auto">
//             <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
//                 {/* Carousel for desktop and large size devices */}
//                 <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
//                     <div className="w-full relative flex items-center justify-center">
//                         <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
//                             <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </ButtonBack>
//                         <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
//                             <Slider>
//                                 <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
//                                     <Slide index={0}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={1}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={2}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={3}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={4}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={5}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={6}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={7}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={8}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={9}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={10}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={11}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                 </div>
//                             </Slider>
//                         </div>
//                         <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
//                             <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </ButtonNext>
//                     </div>
//                 </CarouselProvider>

//                 {/* Carousel for tablet and medium size devices */}
//                 <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
//                     <div className="w-full relative flex items-center justify-center">
//                         <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
//                             <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </ButtonBack>
//                         <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
//                             <Slider>
//                                 <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
//                                     <Slide index={0}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={1}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={2}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={3}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={4}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={5}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={6}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={7}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={8}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={9}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={10}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={11}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                 </div>
//                             </Slider>
//                         </div>
//                         <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
//                             <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </ButtonNext>
//                     </div>
//                 </CarouselProvider>

//                 {/* Carousel for mobile and Small size Devices */}
//                 <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
//                     <div className="w-full relative flex items-center justify-center">
//                         <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
//                             <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </ButtonBack>
//                         <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
//                             <Slider>
//                                 <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
//                                     <Slide index={0}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={1}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={2}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={3}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={4}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={5}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={6}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={7}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={8}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={9}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={10}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                     <Slide index={11}>
//                                         <div className="flex flex-shrink-0 relative w-full sm:w-auto">
//                                             <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
//                                             <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
//                                                 <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
//                                                 <div className="flex h-full items-end pb-6">
//                                                     <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Slide>
//                                 </div>
//                             </Slider>
//                         </div>
//                         <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
//                             <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </ButtonNext>
//                     </div>
                    
//                 </CarouselProvider>
//             </div>
            
//         </div>
        
//     );
// }

import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Caro() {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.unsplash.com/photo-1543652711-77eeb35ae548?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1MDM1MDQzfHxlbnwwfHx8fHw%3D" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Aticule No 01</h2>
                                                <div className="flex h-full items-end pb-6">
                                                   
                                                    <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Aticule No 02</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    
                                                    
                                                    <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Aticule No 03-113</h2>
                                                <div className="flex h-full items-end pb-6">
                                                      
                                                <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.unsplash.com/photo-1564864265033-8f50f3e0e3be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Aticule No 04-112</h2>
                                                <div className="flex h-full items-end pb-6">
                                                      
                                                <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.unsplash.com/photo-1560159006-de4e5ffcfd47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Aticule No 05</h2>
                                                <div className="flex h-full items-end pb-6">
                                                      
                                                <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.unsplash.com/photo-1564864265033-8f50f3e0e3be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Aticule No 06</h2>
                                                <div className="flex h-full items-end pb-6">
                                                      
                                                <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.unsplash.com/photo-1534437088728-1e8db7fcef94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                                Aticule No 07-234
                                                </h2>
                                                <div className="flex h-full items-end pb-6">
                                                    
                                                      
                                                    <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.unsplash.com/photo-1570132151768-55adb52c3887?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzIzfHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Aticule No 07-45960</h2>
                                                <div className="flex h-full items-end pb-6">
                                                   
                                                      
                                                    <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.unsplash.com/photo-1595909236612-9fd30b476365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzg0fHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Aticule No 08-33450</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    
                                                      
                                                    <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.unsplash.com/photo-1560857792-215f9e3534ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzk0fHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Aticule No 09-8874</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    
                                                      
                                                    <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.unsplash.com/photo-1552860656-50fb9676c287?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY4fHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Aticule No 10-2468</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    
                                                      
                                                    <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.unsplash.com/photo-1564864265033-8f50f3e0e3be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Ca3-3450</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    
                                                      
                                                    <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                    
                </CarouselProvider>
            </div>
            
        </div>
        
    );
}
