import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfroms from "../Hooks/UsePlatform";

const PlatfromSelector = () => {
  const { data, error } = usePlatfroms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platfrom
      </MenuButton>
      <MenuList>
        {data.map((paltform) => (
          <MenuItem key={paltform.id}>{paltform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatfromSelector;
