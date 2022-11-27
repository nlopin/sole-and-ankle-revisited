import styled from 'styled-components/macro';
import { MEDIA_QUERIES } from '../../constants';

export const HiddenOnPhone = styled.div`
  display: block;

  @media (${MEDIA_QUERIES.phoneOnly}) {
    display: none;
  }
`
