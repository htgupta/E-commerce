


import React from 'react'
import Filter from "./Filter";

export default function Mans() {
  const Items=
  
  [
{
  id:1,
  url:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  price:435,
  name:' Air Max 65',

},
{
  id:2,
  url:'https://images.unsplash.com/photo-1577983156459-59be31b0d11c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMxfHxuaWtlJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
  price:435,
  name:"Max 21",
 
},
{
  id:3,
  url:'https://images.unsplash.com/photo-1605348532760-6753d2c43329?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8dVUzdHN1Mmk0aGN8fGVufDB8fHx8fA%3D%3D',
  price:435,
  name:'Demon ',
  
},
{
  id:4,
  url:'https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNob2VzfGVufDB8fDB8fHww',
  price:435,
  name:' things ',
 
},

{
  id:5,
  url:'https://images.unsplash.com/photo-1615290642882-6b9501729a27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
  price:435,
  name:'fx4',
  
},

{
  id:6,
  url:'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
  price:435,
  name:'fx5',
  
},

{
  id:7,
  url:'https://images.unsplash.com/photo-1577983010022-10ef0c16b451?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxuaWtlJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
  price:435,
  name:'fx6',

  
},
{
  id:8,
  url:'https://images.unsplash.com/photo-1585063395665-b8ad4acbb9af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
  price:435,
  name:'fx7',

  
},
{
  id:9,
  url:'https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
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
  url:'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
  price:435,
  name:'fx10',


},

{
  id:12,
  url:'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
  price:435,
  name:'fx11',

},
  ]
  return (<>
  <Filter/>
 
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
            <div className="absolute inset-0 rounded-md  from-gray-900 to-transparent"></div>
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
