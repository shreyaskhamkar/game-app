import useGeners from "../Hooks/useGenres";

const GenerList = () => {
  const { data } = useGeners();
  return (
    <ul>
      {data.map((genre: any) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenerList;
