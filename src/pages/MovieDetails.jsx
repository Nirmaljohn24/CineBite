import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { options } from '../utils/Options';


const MovieDetails = () => {

  const [data,setData] = useState({});

  const [loading , setLoading] = useState(true);

  const params = useParams();
  // console.log(params);

  useEffect(() =>{

    async function fetchMovie(){

      const responce = await fetch(`https://api.themoviedb.org/3/movie/${params.id}` , options);

      const json = await responce.json();

     setData(json);

     setLoading(false);
    }

    fetchMovie();

  },[]);

  const { id , original_title , poster_path , status ,genres , overview }  = data;

  const image = `http://image.tmdb.org/t/p/w500/${poster_path}`;

  if(loading){
   return <h2>Loding....</h2>
  }

  
  return (
    <main>
      <section className=' flex justify-around flex-wrap py-5 items-center'>
        <div className='max-w-sm pr-5'>
          <img src={image} alt="" />
          

        </div>
        <div className='max-w-2xl '>
          <h1 className='text-4xl my-3 text-center lg:text-left font-bold'>{original_title} </h1><span className='text-green-500 px-2 text-center'>[{status}]</span>
          <p className=' lg:text-left text-center py-2'>{overview}</p>
          <p className='flex flex-wrap gap-3 font-thin'>
            {genres ? genres.map((genre) =>(
              <span key={genre.id}>
                {genre.name}
              </span>
            )):''}
          </p>
        </div>
      </section>
    </main>
  )
}

export default MovieDetails