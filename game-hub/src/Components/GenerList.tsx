import useGeners from "../Hooks/useGenres";

const GenerList = () => {
  const { genres } = useGeners();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenerList;
