import React from "react";

const Bestsel = () => {
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">Top Selling</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
                    <div className="bg-gray-50 p-8">
                        <div className="">
                            <h2 className="text-xl text-gray-600">Converse</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$1200</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 md:mt-24">
                            <img className="" src="https://images.unsplash.com/photo-1602046819770-00c5902e3f9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxuaWtlJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D" alt="A chair with designed back" />
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                        <button
        type="button"
        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                            <button aria-label="show in red color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#DC2626" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in white color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8">
                        <div className="">
                            <h2 className="text-xl text-gray-600">New Balance</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$1200</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 md:mt-24">
                            <img className="" src="https://images.unsplash.com/photo-1588117260148-b47818741c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D" alt="A chair with wooden legs" />
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-8 md:mt-24">
                        <button
        type="button"
        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                            <button aria-label="show in white color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8">
                        <div className="">
                            <h2 className="text-xl text-gray-600">Skechers</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$1200</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 md:mt-24">
                            <img className="" src="https://images.unsplash.com/photo-1621561248577-5695129fb3b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D" alt="A sofa chair with wooden legs" />
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                        <button
        type="button"
        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                            <button aria-label="show in green color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in brown color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#92400E" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
                    <div className="bg-gray-50 p-8">
                        <div>
                            <h2 className="text-xl leading-tight text-gray-600">Under Armour</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$78900</p>
                        </div>
                        <div className="flex justify-center items-center mt-28 md:mt-3">
                            <img src="https://images.unsplash.com/photo-1599069692563-3662cf3f0e4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxuaWtlJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D" alt="A large sectional sofa" />
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                        <button
        type="button"
        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                            <button aria-label="show in yellow color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#F59E0B" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in light gray color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8">
                        <div>
                            <h2 className="text-xl leading-tight text-gray-600">Vans</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$2900</p>
                        </div>
                        <div className="flex justify-center items-center mt-28 md:mt-1">
                            <img src="https://images.unsplash.com/photo-1572969565351-7bf9e26cd9ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8" alt="A beautiful two seater sofa" />
                            
                        </div>
                        
                        <div className="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                        <button
        type="button"
        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <samp>Add to Cart</samp>
      </button>
                            
                            <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            
                            <button aria-label="show in green color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export  default   Bestsel;
