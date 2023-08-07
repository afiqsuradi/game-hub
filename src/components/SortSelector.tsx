import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
export interface Sort {
  value: string;
  label: string;
}

interface Props {
  onSelectSort: (type: Sort) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSort, sortOrder }: Props) => {
  const orderBy = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {sortOrder || "Relevance"}
      </MenuButton>
      <MenuList>
        {orderBy.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSort(order)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
