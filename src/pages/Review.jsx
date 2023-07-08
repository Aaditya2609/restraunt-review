import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { RestrauntContext } from '../context/RestrauntContext';
import { AiFillStar } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import AddReviewModal from '../component/AddReviewModal';

function Review() {
    const { restraunts } = useContext(RestrauntContext)
    const { restraunt } = useParams();
    const [selectedRestraunt, setSelectedRestraunt] = useState(restraunts.find(item => item.name === restraunt));
    const [showModal, setShowModal] = useState(false)
    const [CalcAverageRating,setCalcAverageRating]=useState();
    const { name, address, menu, ratings } = selectedRestraunt
    useEffect(() => {
        const temp = restraunts.find(item => item.name === restraunt)
        setSelectedRestraunt(temp)
    }, [restraunts,restraunt])
    useEffect(()=>{
        const avg=ratings.reduce((acc,cv)=>{
            console.log(cv)
            return acc+cv.rating
        },0)
        setCalcAverageRating((avg/ratings.length).toFixed(1))
    },[ratings])
    return (
        <div className='flex flex-col items-center justify-center'>

            <div className='flex items-center justify-center gap-36 mt-12'>

                <div className='text-left'>
                    <h1 className='font-bold text-4xl flex  items-center gap-4'><NavLink to="/"><MdArrowBack className='text-3xl w-8]' /></NavLink>{name}</h1>
                    <p className='font-semibold text-xl text-[rgba(0,0,0,0.6)] pl-12'> {menu.map((item, index) => (
                        <>
                            <span>{item.name}</span>
                            {index !== menu.length - 1 && <span>, </span>}
                        </>
                    ))}</p>
                    <p className='font-semibold text-xl text-[rgba(0,0,0,0.6)] pl-12'>{address}</p>
                    <p className='font-semibold text-xl text-[rgba(0,0,0,0.6)] pl-12'>Average Rating: {CalcAverageRating}</p>
                </div>
                <button className="text-xl bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-700  py-2 px-4 border border-transparent hover:border-blue-500  rounded cursor-pointer" onClick={()=>setShowModal(true)}>Add Review</button>
            </div>
            <div className='text-left'>
                <h1 className='font-bold text-3xl mt-12'>Reviews</h1>
                <div>
                    {ratings?.map(item => (
                        <div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4 py-4'>
                                    <img src={item.pp} alt="pfp" className='h-12 w-12 rounded-full p- border-black border-2' />
                                    <p className='font-bold text-2xl'>{item.revName}</p>
                                </div>
                                <div className='flex items-center gap-2 bg-black px-3 text-[#ffe234] rounded-full'>
                                    <p className='text-lg font-semibol'>{item.rating}</p>
                                    <AiFillStar className='text-xl' />
                                </div>
                            </div>
                            <p className='text-xl pr-16 font-semibold'>{item.comment}</p>
                            <hr className='h-[2px]  mt-1 mb-4 bg-transparent border-black border-1' />
                        </div>
                    ))}
                </div>
            </div>
            {showModal && <AddReviewModal setShowModal={setShowModal} restrauntName={selectedRestraunt.name}/>}
        </div>
    )
}

export default Review