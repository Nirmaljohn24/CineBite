import React from 'react'
import { useSearchParams } from 'react-router-dom'


const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();

  console.log(searchParams);

  const queryTerm = searchParams.get("q");

  console.log(queryTerm);

  
  return (
    <main>Search</main>
  )
}

export default Search