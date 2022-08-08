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
import { useSelector } from "react-redux";
import { getContactList } from "../../redux/slices/contactList";
import { useEffect, useState } from "react";
import { IContact } from "../../shared/interfaces";
import { completeName } from "../../shared/utils";

export function InputSearch() {
  const contactList = useSelector(getContactList);
  const [inputSearch, setInputSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState<IContact[]>([]);

  useEffect(() => {
    if (inputSearch === "") {
      setFilterSearch([]);
    }
  }, [inputSearch]);

  function handleFilter(value: string) {
    setInputSearch(value);

    const newFilter = contactList.filter((contact) => {
      return contact.name
        .toLocaleLowerCase()
        .includes(inputSearch.toLocaleLowerCase());
    });

    setFilterSearch(newFilter);
  }

  function handleAutoComplete(value: string) {
    setInputSearch(value);
    setFilterSearch([]);
  }

  function clearInputSearch() {
    if (inputSearch.length > 0) setInputSearch("");
  }

  return (
    <SearchWrapper>
      <InputWrapper>
        <img src={SearchIcon} alt="search icon" />
        <Input
          value={inputSearch}
          type="text"
          onChange={(event) => {
            const { value } = event.target;
            handleFilter(value);
          }}
        />
        <ButtonIcon img={Clear} onClick={clearInputSearch} />
      </InputWrapper>

      {filterSearch.length !== 0 && (
        <DataResult>
          {filterSearch.map((contact) => (
            <DataItem
              onClick={() => {
                const name = completeName(contact.name, contact.lastName);
                handleAutoComplete(name);
              }}
            >
              {completeName(contact.name, contact.lastName)}
            </DataItem>
          ))}
        </DataResult>
      )}
    </SearchWrapper>
  );
}
