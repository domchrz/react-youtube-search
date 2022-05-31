import { createPortal } from 'react-dom';
import { StyledContainer } from './styles';

export default function ErrorMessage({ error }: { error: string }) {
  return createPortal(<StyledContainer>{error}</StyledContainer>, document.body);
}
