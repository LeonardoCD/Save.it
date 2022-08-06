import { Input, SearchWrapper } from "./styles";
import SearchIcon from "../../assets/search.svg";
import Clear from "../../assets/close.svg";
import { ButtonIcon } from "../ButtonIcon";

export function InputSearch() {
  return (
    <SearchWrapper>
      <img src={SearchIcon} alt="search icon" />
      <Input type="text" />
      <ButtonIcon  img={Clear} />
    </SearchWrapper>
  );
}