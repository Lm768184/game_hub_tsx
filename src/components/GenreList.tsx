import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const {genres} = useGenres();

  return (
    <ul>
        {genres && genres.results.map((genre) => (<li key={genre.id}>{genre.name}</li>))}
    </ul>
  )
}

export default GenreList