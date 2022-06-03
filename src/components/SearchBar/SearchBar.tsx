import { ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction, useState } from 'react';
import thr from '../../helpers/throttle';
import { StyledForm, StyledIconButton, StyledInput } from './styles';

const throttle = thr();

export default function SearchBar({ setQuery }: { setQuery: Dispatch<SetStateAction<string>> }) {
  const [value, setValue] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => setValue(e.target.value);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const query = value.trim();
    if (query.length === 0) return;
    throttle(() => setQuery(query), 500);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput type="text" value={value} onChange={handleChange} />
      <StyledIconButton type="submit">search</StyledIconButton>
    </StyledForm>
  );
}
