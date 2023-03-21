import React, { useState } from 'react';
import Colorbox from './Colorbox';

const Home = () => {
    const [height, setHeight] = useState(1);
    const [width, setWidth] = useState(1);
    const [colors, setColors] = useState(4);
    const submit = () => {
        console.log(height, width, colors);
    }
    return (
        <div className='flex '>
            <form className="w-1/3 ">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Number of cells on width
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="10"
                            value={width}
                            onChange={e => setWidth(e.target.value)}
                            required
                        />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Number of cells on Height
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="10"
                            value={height}
                            onChange={e => setHeight(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Number of Colors
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="4"
                            onChange={e => setColors(e.target.value)}
                            value={colors}
                        />
                        {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                    </div>
                </div>
                <button className="shadow w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"
                    onClick={e => submit()}
                >
                    Create
                </button>
            </form>
            <div className='w-2/3 border h-full ml-10  items-center justify-center grid'>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2" >
                    Work Place
                </label>
                <div className=''>
                    <Colorbox height={height} width={width} colors={colors}/>
                </div>

            </div>
        </div>
    )
}

export default Home