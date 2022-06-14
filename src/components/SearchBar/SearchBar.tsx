import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { StyledForm, StyledIconButton, StyledInput } from './styles';

const SearchBar: FC<{ handleSetQuery: Function }> = ({ handleSetQuery }) => {
  const [value, setValue] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => setValue(e.target.value);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const query = value.trim();
    if (query.length === 0) return;
    handleSetQuery(query);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput type="text" value={value} onChange={handleChange} />
      <StyledIconButton type="submit">search</StyledIconButton>
    </StyledForm>
  );
};

export default SearchBar;
