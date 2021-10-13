import tw from 'tailwind-styled-components';
import { ReactComponent as LogoSvg } from './logo.svg';
import { ReactComponent as MenuSvg } from './menu.svg';

export const Nav = tw.nav`
flex
items-center 
justify-between 
flex-wrap 
bg-white
p-6
shadow
mb-36
`;

export const LeftDiv = tw.div`
flex
items-center
flex-shrink-0
mr-6
`;

export const Logo = tw(LogoSvg)`
cursor-pointer
w-8
h-8
mr-2
`;
export const HeaderSpan = tw.span`
text-indigo-600
font-semibold
text-xl
tracking-tight
`;

// export const Menu = tw.div`
// block
// md:hidden bg-red-500
// `;
// export const MenuButton = tw.button`
// flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white
// `;
// export const MenuSvg = tw(MenuIcon)`
// `;

export const MenuDiv = tw.div`
px-4 cursor-pointer lg:hidden
`;
export const Menu = tw(MenuSvg)`
w-6
h-6
`;

export const CenterDiv = tw.div`
w-full block hidden flex-grow lg:flex lg:items-center lg:w-auto 

`;

export const RightDiv = tw.div`
`;

export const Ul = tw.ul`
text-sm lg:flex-grow
`;

export const Li = tw.li`
block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4
`;

export const Anchor = tw.a`
inline-block text-sm px-4 py-2 leading-none border rounded text-white  bg-indigo-500 hover:border-transparent hover:text-teal-500 hover:bg-indigo-400 mt-4 lg:mt-0 cursor-pointer
`;
