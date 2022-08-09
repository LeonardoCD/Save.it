import { forwardRef, ForwardRefRenderFunction } from "react";
import { tagsList } from "../../shared/utils";
import { Label, Option, SelectContainer, SelectWrapper } from "./styles";

interface SelectProps {
  name: string;
  label: string;
  id: string;
  onChange?: (event: any) => void;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { label, name, id, ...rest },
  ref
) => {
  return (
    <SelectWrapper>
      <Label htmlFor={id}>{label}</Label>
      <SelectContainer name={name} id={id} {...rest} ref={ref}>
        <Option value="">Escolha uma opção</Option>
        {tagsList.map((tag) => (
          <Option key={tag} value={tag}>{tag}</Option>
        ))}
      </SelectContainer>
    </SelectWrapper>
  );
};

export const Select = forwardRef(SelectBase);
