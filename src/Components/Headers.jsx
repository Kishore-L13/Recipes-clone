import React from 'react'
const Headers =() => {
    return(
           <div className="flex justify-between bg-orange-700 sm:bg-red-600 lg:bg-yellow-200 shadow-lg">
          <div className='logo-container'> <img /></div>
            <ul className="flex p-4 m-4">
                <li className='font-bold'>Products</li>
                <li>Recipes</li>
                <li>Inspiration</li>
                <li>OurIntiative</li>
                <li>Sign up</li>
                <li>Search</li>
            </ul>
        </div>
    )
}
export default Headers