import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Card from '../components/Card'




const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();

  // console.log(searchParams);

  const queryTerm = searchParams.get("q");

  // console.log(queryTerm);

  const {data : movies} = useFetch(apiPath,queryTerm);

  console.log(movies);

  
  return (
    <main className='min-h-screen'>
      <section className='max-w-7xl mx-auto px-5 py-5'>
        <p className='text-3xl'>
          {movies.length === 0 ? `No results Found for "${queryTerm}"`: `Results for "${queryTerm}"`}
        </p>


      </section>

      <section className='max-w-7xl m-auto px-5 py-5'>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {
            movies.map((movie) =>(
              <Card key={movie.id} movie={movie}/>
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default Search