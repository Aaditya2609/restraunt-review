import React, { useContext, useState } from 'react'
import { RestrauntContext } from '../context/RestrauntContext'

function AddReviewModal({setShowModal,restrauntName}) {
    const{restraunts,setRestraunts}=useContext(RestrauntContext)
    const [newRating,setNewRating]=useState({
        rating:1,
        comment:"",
        revName:"Luffy",
        pp:"https://wallpapers-clan.com/wp-content/uploads/2023/01/chibi-anime-pfp-10.jpg"
    })
    const handleSubmit=()=>{
        const temp=restraunts.map(item=>{
            if (item.name === restrauntName) {
                return {
                  ...item,
                  ratings: [
                    ...item.ratings,newRating
                  ]
                };
              } else {
                return item;
              }
        
        })
    setRestraunts(temp)
    setShowModal(false)
    
    }
    const handleComment=(value)=>
    {
        const tempRating={...newRating,comment:value}
        setNewRating(tempRating);

    }
    const handleRating=(value)=>
    {
        const tempRating={...newRating,rating:value}
        setNewRating(tempRating);

    }
    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70">
                <div className="bg-white p-4 rounded-xl">
                    <div className="flex justify-between items-center gap-8 p-4">
                        <h1 className='font-bold text-4xl'>Add Your Review</h1>
                        <button onClick={()=>setShowModal(false)} className='text-4xl font-bold'>X</button>
                    </div>
                    <div>
                        <div className='flex items-center justify-between px-6 pt-4'>
                            <p className='font-semibold text-xl'>Rating:</p>
                            <select onChange={(e)=>handleRating(e.target.value)}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>
                        <div className='flex items-center justify-between px-6 pt-4'>
                            <p className='font-semibold text-lg'>Comment:</p>
                            <textarea onChange={(e)=>handleComment(e.target.value)}rows="3" className='border-2 border-black rounded-lg px-2 text-lg py-1'></textarea>
                        </div>
                        <div>
                            <button onClick={()=>handleSubmit()}className="mt-4 text-3xl bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-700  py-2 px-4 border border-transparent hover:border-blue-500  rounded cursor-pointer"> Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddReviewModal