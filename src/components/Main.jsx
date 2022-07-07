import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../Requests'

const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis ex sit amet mauris gravida, vitae mattis tellus tincidunt. Aenean vitae efficitur nulla, ut hendrerit mauris. Duis et nisi eget sem porttitor convallis. Phasellus ante nunc, ullamcorper at felis id, elementum commodo turpis. Vivamus porttitor porttitor tellus, a luctus erat tristique ut. In quis lectus quis lectus condimentum condimentum quis a est. Etiam pellentesque leo orci, ac interdum eros dignissim eget. Nulla elementum justo sed orci rutrum, et pulvinar est bibendum. Etiam auctor sollicitudin quam, non lobortis lorem hendrerit in. Mauris vitae tortor a eros dignissim pharetra porta nec nunc. Phasellus sed ante ut tellus tincidunt lacinia eu eget dui.'

    useEffect(() => {
    axios.get(requests.requestPopular)
        .then((res) => {
            setMovies(res.data.results)
        })
    }, [])

    const truncateString = (str, num) => {
        if(str.length > num ) {
            return str.slice(0, num) + '...'
        } else return str;
    }
    
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute w-fill top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
            <div className='my-4'>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                <button className='border text-white ml-4 border-gray-300 py-2 px-5'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(str, 150)} </p>
        </div>
        </div>
    </div>
  )
}

export default Main