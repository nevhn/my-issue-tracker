import tw from 'tailwind-styled-components';

export const Container = tw.div`
max-w-full
w-7/12
bg-white
m-auto
p-16

shadow-2xl
rounded-lg
`;

export const Form = tw.form`
flex
flex-col
w-full
`;
export const UsernameLabel = tw.label`
block 
text-gray-700 
text-sm 
font-bold 
mb-2
`;

export const UsernameInput = tw.input`
shadow 
appearance-none 
border 
rounded 
w-full 
py-2 
px-3 
text-gray-700 
leading-tight 
focus:outline-none 
focus:ring
`;

export const PasswordLabel = tw(UsernameLabel)`
mt-2
`;

export const PasswordInput = tw(UsernameInput)`
mb-4
`;

export const ButtonDiv = tw.div`
flex items-center justify-between

`;

export const SubmitButton = tw.button`
bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
`;
export const RegisterLink = tw.a`
inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800
`;
