import tw from 'tailwind-styled-components';
import { Ul, Li, RightDiv, CenterDiv } from '../Navbar.style';

export const DropMenuDiv = tw.div`
${(props) =>
  props.$isMenuOpen
    ? 'grid grid-rows-4 text-center items-center bg-yellow-500 -mt-36'
    : 'hidden'}

`;
