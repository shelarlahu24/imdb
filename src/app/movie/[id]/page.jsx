import Image from 'next/image';
import React from 'react'

async function getMovie(movieId) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
  return res.json();
}

export default async function MoviePage({ params }) {

  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div className=' w-full'>
      <div className=" p-4 flex flex-col items-center content-center md:flex-row md:pt-8 md:space-x-6 max-w-6xl mx-auto">
        <Image
          className='rounded-lg'
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path
            }`}
          alt={movie.title}
          width={500}
          height={300}
          placeholder='blur'
          blurDataURL='/spinner.svg'
          style={{
            maxWidth: "100%",
            height: "100%"
          }}
        />
        <div className="p-2">
          <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
          <p className="text-lg mb-3"><span className="font-semibold mr-1">Overview:</span>{movie.overview}</p>
          <p className="mb-3"><span className="font-semibold mr-1">Date Released:</span>{movie.release_date || movie.first_air_date}</p>
          <p className="mb-3"><span className="font-semibold mr-1">Rating:</span>{movie.vote_count}</p>
        </div>
      </div>
    </div>
  )
}
