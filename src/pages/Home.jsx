import React, { useContext, useEffect, useState } from 'react'
import { RestrauntContext} from '../context/RestrauntContext'
import { NavLink } from 'react-router-dom';

function Home() {
    const {cuisine,restraunts}=useContext(RestrauntContext)
    const [selectedCuisine,setSelectedCusisine]=useState();
    const [selectedCuisineRestraunts,setSelectedCuisineRestraunts]=useState([]);

    useEffect(()=>{
        const temp=restraunts?.filter(item=>item.cuisine_id===selectedCuisine)
        setSelectedCuisineRestraunts(temp);

    },[selectedCuisine])
  return (
    <div>
        <h1 className='font-bold text-3xl mt-8'>Restraunt Review App</h1>
        <h2 className='font-bold text-2xl mt-4'>Select Your Cuisine:</h2>
        <div className='flex items-center gap-4 mt-4 justify-center'>
            {cuisine.map(item=>{
                return(
                    <div onClick={()=>(setSelectedCusisine(item.id))} className="bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-700  py-2 px-4 border border-transparent hover:border-blue-500  rounded cursor-pointer" key={item.id} >
                        {item.name}
                    </div>
                )
            })}
        </div>
            <div>
                {selectedCuisineRestraunts.map(item=>{
                    const {menu}=item;
                    return(
                        <div>
                            <h3 className='font-bold text-xl m-4'>Dishes by {item.name}</h3>
                            <div className='flex gap-4 items-center justify-center'>
                            {
                                menu.map(items=>{
                                    return(
                                        <div className='flex flex-col border-2 border-black rounded-md cursor-pointer'>
                                            <NavLink to={`/${item.name}`}>
                                            <img className='w-56 h-44 rounded-tl-md rounded-tr-md' src={items.imgSrc} alt="dish"/>
                                            <div className='text-left p-2'>
                                                <h4 className='font-bold text-lg'>{items.name}</h4>
                                                <p className=' font-semibold text-md text-[rgba(0,0,0,0.7)]'>Rs. {items.price} for {items.qty}</p>
                                                <p className=' font-semibold text-sm text-[rgba(0,0,0,0.7)]'>{item.name}</p>
                                            </div>
                                            </NavLink>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    )
                })}
            </div>


    </div>
  )
}

export default Home