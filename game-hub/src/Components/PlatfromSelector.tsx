import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfroms from "../Hooks/UsePlatform";
import { Platform } from "../Hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatfromSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatfroms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((paltform) => (
          <MenuItem
            onClick={() => onSelectPlatform(paltform)}
            key={paltform.id}
          >
            {paltform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatfromSelector;
