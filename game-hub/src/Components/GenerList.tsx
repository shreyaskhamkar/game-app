import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGeners from "../Hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";

const GenerList = () => {
  const { data } = useGeners();
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
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenerList;
