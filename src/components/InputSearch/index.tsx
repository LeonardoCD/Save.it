import {
  DataItem,
  DataResult,
  Input,
  InputWrapper,
  SearchWrapper,
} from "./styles";
import SearchIcon from "../../assets/search.svg";
import Clear from "../../assets/close.svg";
import { ButtonIcon } from "../ButtonIcon";
import { IContact } from "../../shared/interfaces";
import { fullName } from "../../shared/utils";

interface InputSearchProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  filterSearch: IContact[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectItem: (value: string) => void;
}

export function InputSearch({
  inputValue,
  setInputValue,
  filterSearch,
  onChange,
  onSelectItem,
}: InputSearchProps) {
 
  function clearInputSearch() {
    if (inputValue.length > 0) setInputValue("");
  }

  return (
    <SearchWrapper>
      <InputWrapper>
        <img src={SearchIcon} alt="search icon" />
        <Input
          value={inputValue}
          type="text"
          onChange={onChange}
        />
        <ButtonIcon img={Clear} onClick={clearInputSearch} />
      </InputWrapper>

      {filterSearch.length !== 0 && (
        <DataResult>
          {filterSearch.map((contact) => (
            <DataItem
              onClick={() => {
                const name = fullName(contact.name, contact.lastName);
                onSelectItem(name);
              }}
            >
              {fullName(contact.name, contact.lastName)}
            </DataItem>
          ))}
        </DataResult>
      )}
    </SearchWrapper>
  );
}
