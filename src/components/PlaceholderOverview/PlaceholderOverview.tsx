import {
  StyledContainer,
  StyledContentPlaceholder,
  StyledMetaPlaceholder,
  StyledPlayIcon,
} from './styles';

export default function PlaceholderOverview() {
  return (
    <StyledContainer>
      <StyledContentPlaceholder>
        <StyledPlayIcon>play_circle</StyledPlayIcon>
      </StyledContentPlaceholder>
      <StyledMetaPlaceholder />
    </StyledContainer>
  );
}
