import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {

    // console.log(movie);
  const { id, original_title, overview, poster_path } = movie;

  const image = `http://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Link to={`/movie/${id}`}>
      <div className="max-w-sm mx-auto bg-white border  rounded-lg shadow-lg ">
        {/* Display the movie poster */}
        <img  className='rounded-lg' src={image} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-gray-900">{original_title}</h5>
          <p className="mb-3 font-serif text-gray-700 line-clamp-3">{overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
