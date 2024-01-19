// import React from 'react'

// export  default function Womens() {
//   return (
//     <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
//       <div className="pt-8">
//         <div className="flex items-center">
//           <ol className="flex w-full items-center overflow-hidden">
//             <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
//               <a href="#">Home</a>
//             </li>
//             <li className="text-body mt-0.5 text-base">/</li>
//             <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
//               <a className="capitalize" href="#">
//                 products
//               </a>
//             </li>
//             <li className="text-body mt-0.5 text-base">/</li>
//             <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
//               <a className="capitalize" href="#">
//                 Air max Shoes
//               </a>
//             </li>
//           </ol>
//         </div>
//       </div>
//       <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
//         <div className="col-span-5 grid grid-cols-2 gap-2.5">
//           {Array.from({ length:2}, (_, i) => (
//             <div key={i} className="col-span-1 transition duration-150 ease-in hover:opacity-90">
//               <img
//                 src="https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGdpcmxzJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"
//                 alt="Nike Air Max 95 By You--0"
//                 className="w-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//         <div className="col-span-4 pt-8 lg:pt-0">
//           <div className="mb-7 border-b border-gray-300 pb-7">
//             <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
//                Air Max 95 By You
//             </h2>
//             <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
//               The  Air Max 95 By You lets you take inspiration from the human body itself. The
//               midsole represents the spine, graduated panels are the muscles, the lace loops are the
//               shoe&apos;s ribs and the mesh in the upper is the skin.
//             </p>
//             <div className="mt-5 flex items-center ">
//               <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
//                 $40.00
//               </div>
//               <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
//                 $50.00
//               </span>
//             </div>
//           </div>
//           <div className="border-b border-gray-300 pb-3  ">
//             <div className="mb-4">
//               <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
//                 size
//               </h3>
//               <ul className="colors -mr-3 flex flex-wrap">
//                 {['8', '9', '10', '7'].map((size) => (
//                   <li
//                     key={size}
//                     className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm "
//                   >
//                     {size}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="mb-4 ">
//               <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
//                 color
//               </h3>
//               <ul className="colors -mr-3 flex flex-wrap">
//                 {['bg-orange-400', 'bg-pink-400', 'bg-violet-600', 'bg-red-500'].map((color) => (
//                   <li
//                     key={color}
//                     className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm"
//                   >
//                     <span className={`block h-full w-full rounded ${color}`} />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
//             <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
//               <button
//                 className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
//                 disabled
//               >
//                 +
//               </button>
//               <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
//                 1
//               </span>
//               <button className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
//                 -
//               </button>
//             </div>
//             <button
//               type="button"
//               className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//             >
//               Add to cart
//             </button>
//           </div>
//           <div className="py-6 ">
//             <ul className="space-y-5 pb-1 text-sm">
//               <li>
//                 <span className="text-heading inline-block pr-2 font-semibold">SKU:</span>
//                 N/A
//               </li>
//               <li>
//                 <span className="text-heading inline-block pr-2 font-semibold">Category:</span>
//                 <a className="hover:text-heading transition hover:underline" href="#">
//                   Women's
//                 </a>
//               </li>
//               <li className="productTags">
//                 <span className="text-heading inline-block pr-2 font-semibold">Tags:</span>
//                 <a
//                   className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
//                   href="#"
//                 >
//                   Sneakers
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="shadow-sm ">
//             <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
//               <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
//                 Product Details
//               </h2>
//               <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
//                 <div className="bg-heading h-0.5 w-full rounded-sm" />
//                 <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
//               </div>
//             </header>
//             <div>
//               <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
//                 Our Customer Experience Team is available 7 days a week and we offer 2 ways to get
//                 in contact.Email and Chat . We try to reply quickly, so you need not to wait too
//                 long for a response!.
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
//               <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
//                 Additional Information
//               </h2>
//             </header>
//           </div>
//           <div className="">
//             <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
//               <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
//                 Customer Reviews
//               </h2>
//             </header>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }





import React from 'react'

export default function Womens() {
  const Items=
  [
{
  id:1,
  url:"https://images.unsplash.com/photo-1568688574210-419316c9db5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxnaXJscyUyMHNob2VzfGVufDB8fDB8fHww",
  price:435,
  name:' Air Max 65',

},
{
  id:2,
  url:'https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHdvbWVucyUyMHNob2VzfGVufDB8fDB8fHww',
  price:435,
  name:"Max 21",
 
},
{
  id:3,
  url:'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVucyUyMHNob2VzfGVufDB8fDB8fHww',
  price:435,
  name:'Demon ',
  
},
{
  id:4,
  url:'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVucyUyMHNob2VzfGVufDB8fDB8fHww',
  price:435,
  name:' things ',
 
},

{
  id:5,
  url:'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVucyUyMHNob2VzfGVufDB8fDB8fHww',
  price:435,
  name:'fx4',
  
},

{
  id:6,
  url:'https://plus.unsplash.com/premium_photo-1664874602822-91dd10ae6a31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVucyUyMHNob2VzfGVufDB8fDB8fHww',
  price:435,
  name:'fx5',
  
},

{
  id:7,
  url:'https://images.unsplash.com/photo-1609631349329-4955dc752df7?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTIxMzgwOTF8fGVufDB8fHx8fA%3D%3D',
  price:435,
  name:'fx6',

  
},
{
  id:8,
  url:'https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHdvbWVucyUyMHNob2VzfGVufDB8fDB8fHww',
  price:435,
  name:'fx7',

  
},
{
  id:9,
  url:'https://images.unsplash.com/photo-1620114314956-f6845d34e235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdvbWVucyUyMHNob2VzfGVufDB8fDB8fHww',
  price:435,
  name:'fx8',


},
{
  id:10,
  url:'https://images.unsplash.com/photo-1597949992171-689c5673b936?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxuaWtlJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
  price:435,
  name:'fx9',


},
{
  id:11,
  url:'https://images.unsplash.com/photo-1608319294852-d87737e8e46c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHdvbWVucyUyMHNob2VzfGVufDB8fDB8fHww',
  price:435,
  name:'fx10',


},

{
  id:12,
  url:'https://plus.unsplash.com/premium_photo-1673977133185-a460c4744cec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW5zJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
  price:435,
  name:'fx11',

},
  ]
  return (<>
 
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
    {Items.map((data,index)=>
    {
      return (
        
           <div
           key={index}
            className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
          >
            <img
              src={data.url}
              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 rounded-md bg- from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">{data.name}</h1>
              <p className="mt-2 text-sm text-gray-300">
              
              </p>
              <br />
              {

  <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
  }

            </div>  
          </div>
        
      )
    })}
    
     
  



{/* 
      {Array.from({ length: 1 }).map((_, i) => (
        <div
         
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="https://www.writersdigest.com/.image/t_share/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Stephen King</h1>
            <p className="mt-2 text-sm text-gray-300">
             By: Mr Mercedes and Finders Keeper
            </p>
            <br />
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>Add to Cart</span>
</button>
          </div>
        </div>
      ))}
    
    
    
    


    {Array.from({ length: 1 }).map((_, i) => (
        <div
         
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974704552/demon-slayer-kimetsu-no-yaiba-vol-10-9781974704552_hr.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Demon Slayer</h1>
            <p className="mt-2 text-sm text-gray-300">
              By: Koyoharu Gotouge
            </p>
            <br />
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>Add to Cart</span>
</button>
          </div>
        </div>
      ))}
    
    
    
    {Array.from({ length: 1 }).map((_, i) => (
        <div
         
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="https://img.faballey.com/alleygal/images/postslide/2edf9f96-769c-47f3-8aec-c55d9fb693cc.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">The God of Small things </h1>
            <p className="mt-2 text-sm text-gray-300">
              By: Arundhati Roy
            </p>
            <br />
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>Add to Cart</span>
</button>
          </div>
          
        </div>
      ))}
  



  {Array.from({ length: 1 }).map((_, i) => (
        <div
        
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="https://shereads.com/wp-content/uploads/2020/10/81of0IuGJaL-718x1024.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">The Book of Lost Names</h1>
            <p className="mt-2 text-sm text-gray-300">
             By: Kristin Harmel
            </p>
            <br />
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>Add to Cart</span>
</button>
          </div>
          
        </div>
      ))}
  


  {Array.from({ length: 1 }).map((_, i) => (
        <div
         
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="http://buzz.iloveindia.com/wp-content/uploads/2015/08/indian-books-14.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Tamas</h1>
            <p className="mt-2 text-sm text-gray-300">
             By: Bhisham Sahni
            </p>
            <br />
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>Add to Cart</span>
</button>
          </div>
          
        </div>
      ))}
  



  {Array.from({ length: 1 }).map((_, i) => (
        <div
          
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="https://buzz.iloveindia.com/wp-content/uploads/2015/08/indian-books-4.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">My Story</h1>
            <p className="mt-2 text-sm text-gray-300">
           By: Kamala Das
            </p>
            <br />
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>Add to Cart</span>
</button>
          </div>
          
        </div>
      ))}
  




  {Array.from({ length: 1 }).map((_, i) => (
        <div
        
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="https://www.baystatebanner.com/wp-content/uploads/2020/03/Books-by-Black-Authors-3-e1585164909219.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">The Black Book</h1>
            <p className="mt-2 text-sm text-gray-300">
             By: Mittleton A. Harris
            </p>
            <br />
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>Add to Cart</span>
</button>
          </div>
          
        </div>
      ))}
  


  {Array.from({ length: 1 }).map((_, i) => (
        <div
          
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="https://i0.wp.com/www.maureenjohnsonbooks.com/wp-content/uploads/2018/02/mj_cover_3d_boyinthesmoke.png?fit=588%2C800&ssl=1"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">The Boy in the Smoke</h1>
            <p className="mt-2 text-sm text-gray-300">
              By: Maureen Johnson
            </p>
            <br />
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>Add to Cart</span>
</button>
          </div>
          
        </div>
      ))}
  



  {Array.from({ length: 1 }).map((_, i) => (
        <div
       
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="http://charles-martin.s3.amazonaws.com/250/martin_unwritten_hc__large.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Unwritten</h1>
            <p className="mt-2 text-sm text-gray-300">
             By :Charles Martin
            </p>
            <br />
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>Add to Cart</span>
</button>
          </div>
          
        </div>
      ))}
  


  {Array.from({ length: 1 }).map((_, i) => (
        <div
          
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="https://n2.sdlcdn.com/imgs/g/5/0/Ram-Scion-of-Ikshvaku-An-SDL238428328-1-17561.jpeg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Ram Scion of Ikshvaku</h1>
            <p className="mt-2 text-sm text-gray-300">
              By: Amish
            </p>
            <br />
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>Add to Cart</span>
</button>
          </div>
          
        </div>
      ))}
  


  {Array.from({ length: 1 }).map((_, i) => (
        
      
        <div
          

        
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          
          <img
            src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421561431/one-piece-vol-69-9781421561431_hr.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">One Piece</h1>
            <p className="mt-2 text-sm text-gray-300">
              By: Eiichiro Oda
            </p>
            <br />
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>Add to Cart</span>
</button>
          </div>
          
        </div>
      ))}
  
 */}

    
    </div>
    
    </>
  )
}




