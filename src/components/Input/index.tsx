import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { Label, InputContainer, InputWrapper } from "./styles";

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  id: string;
  width?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, type, placeholder, label, error = null, id, width, ...rest },
  ref
) => {
  return (
    <InputWrapper width={width}>
      <Label htmlFor={id}>{label}</Label>
      <InputContainer
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
        ref={ref}
        error={!!error}
      />
      {error && <span>{error?.message}</span>}
    </InputWrapper>
  );
};
export const Input = forwardRef(InputBase);
