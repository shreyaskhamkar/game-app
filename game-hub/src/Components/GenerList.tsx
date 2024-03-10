import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGeners, { Genre } from "../Hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenerList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGeners();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre: any) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderEndRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenerList;
