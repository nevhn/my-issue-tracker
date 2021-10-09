import tw from 'tailwind-styled-components';

export const Container = tw.div`
max-w-full
m-auto
w-7/12
bg-white
p-8
shadow-2xl
rounded-lg
`;

export const Form = tw.form`
flex
flex-wrap
-mx-3 
mb-6
`;
export const FullNameDiv = tw.div`
w-full
md:w-1/2
px-3
mb-40
md:mb-0
`;

// export const LastnameDiv = tw.div`
// w-full
// md:w-1/2
// px-3
// `;

export const UsernameDiv = tw.div`
w-full px-3 my-5

`;
export const PasswordDiv = tw.div`
w-full px-3 

`;
export const Label = tw.label`
block 
text-gray-700 
text-sm 
font-bold 
mb-2
`;

export const SecondInputFieldDiv = tw.div`
flex
flex-wrap
-mx-3 
mb-6

`;
export const Input = tw.input`
appearance-none 
block 
w-full 
text-gray-700 
border 
border-gray-200 
rounded 
py-3 
px-4 
leading-tight 
focus:outline-none 
focus:bg-white 
focus:border-gray-500
focus:ring
`;

export const ButtonDiv = tw.div`
flex w-full justify-between mt-6
`;

export const RegisterButton = tw.button`
bg-blue-500 
hover:bg-blue-700 
text-white 
font-bold 
py-2 
px-4 
rounded 
focus:outline-none 
focus:shadow-outline
mx-3
`;

export const LoginLink = tw.a`
inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 py-2 mx-5
`;
