import styled from 'styled-components/macro';
import { MEDIA_QUERIES } from '../../constants';

export const HiddenOnTabletAndDown = styled.div`
  display: block;

  @media (${MEDIA_QUERIES.tabletAndDown}) {
    display: none;
  }
`
