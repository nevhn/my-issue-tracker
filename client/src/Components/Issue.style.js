import tw from 'tailwind-styled-components';

export const Container = tw.div`
bg-gray-200
rounded-2xl
border-b-4
shadow-lg
pt-5
pl-5
mb-5
`;

export const CloseButton = tw.button`
inline-block 
relative 
float-right 
mt-40 
mr-5 
text-sm 
py-2 
px-4 
leading-2 
border
border-gray-400
rounded
shadow
font-semibold
 text-black
 bg-red-300 
 hover:bg-red-200
 hover:border-transparent 
 hover:text-gray-500 
 transition-all
 lg:mt-0 cursor-pointer

`;

export const PriorityTag = tw.p`
inline-block font-bold  text-base text-black mb-5
`;
export const PrioritySpan = tw.span`

${(props) =>
  props.$level === 'low'
    ? 'text-yellow-400'
    : props.$level === 'medium'
    ? 'text-yellow-500'
    : 'text-red-500'};
    text-base
    font-medium
    capitalize
`;

export const AssignedToTag = tw.p`
font-bold text-base mb-5 
`;

export const AssignedToSpan = tw.span`
text-base font-medium text-blue-900
`;
export const DescriptionTag = tw.p`
font-bold text base
`;
export const DescriptionSpan = tw.span`
block font-medium text-justify break-words mt-5 mb-8 mr-5 text-gray-500 
`;

export const DateTag = tw.p`
  font-semibold flex justify-end mr-5 mb-4 text-indigo-500
`;

export const DateSpan = tw.span`
ml-1 
`;
