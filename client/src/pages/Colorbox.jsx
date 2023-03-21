import React from 'react'

const Colorbox = ({ height, width, colors }) => {
    return (
        <div>
            <p>box height:{height}</p>
            <p>box width: {width}</p>
            <p>Colors : {colors}</p>
            <div class={`grid grid-cols-3 grid-rows-3 gap-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-fuchsia rounded-lg text-center`}>
                <div class="p-4 bg-fuchsia-500 shadow-lg rounded-lg">01</div>
                <div class="p-4 bg-fuchsia-500 shadow-lg rounded-lg">02</div>
                <div class="p-4 bg-fuchsia-500 shadow-lg rounded-lg">03</div>
                <div class="p-4 bg-fuchsia-500 shadow-lg rounded-lg">04</div>
                <div class="p-4 bg-fuchsia-500 shadow-lg rounded-lg">05</div>
                <div class="p-4 bg-fuchsia-500 shadow-lg rounded-lg">06</div>
                <div class="p-4 bg-fuchsia-500 shadow-lg rounded-lg">07</div>
                <div class="p-4 bg-fuchsia-500 shadow-lg rounded-lg">08</div>
                <div class="p-4 bg-fuchsia-500 shadow-lg rounded-lg">09</div>
            </div>
        </div>
    )
}

export default Colorbox