import tw from 'tailwind-styled-components';

export const Container = tw.div`
bg-white
m-auto
w-4/6
p-16
shadow-2xl
rounded-lg
`;

export const Form = tw.form`
flex
flex-col
items-center
w-full

`;

// AssignTo field
export const AssignToLabel = tw.label`
block 
w-full 
mb-3 
font-medium 
text-sm
text-gray-700
`;

export const AssignToSelect = tw.select`

appearance-none
w-full
bg-white
border
border-blue-700
hover:border-blue-900
text-gray-700
leading-tight
text-lg
h-12
pt-1
pr-4
pb-1
pl-4
mb-5
rounded
shadow
focus:outline-none
focus:ring

`;
export const AssignToOption = tw.option`
`;

// Priority field
export const PriorityLabel = tw(AssignToLabel)``;
export const PrioritySelect = tw(AssignToSelect)``;
export const PriorityOption = tw.option`
`;
// Description field
export const DescriptionLabel = tw(AssignToLabel)`

`;

export const DescriptionTextarea = tw.textarea`
p-5 border rounded border-blue-700 w-full mb-10 hover:border-blue-900 appearance-none text-gray-700 leading-tight focus:outline-none focus:ring
`;

export const AddButton = tw.button`
w-full
h-14
bg-blue-500 
border-none 
rounded
text-xl
font-medium 
shadow-lg 
text-white
hover:bg-transparent
py-2 
px-4 
border-blue-500 
hover:text-blue-500
transition-all
hover:border-transparent 

`;
