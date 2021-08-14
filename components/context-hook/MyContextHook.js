import { useContext, useState } from 'react';
import { Heading } from '@chakra-ui/react';

const MyContextHook = () => {
  const [sample, setSample] = useState('');
  return (
    <>
      <Heading m={5} fontSize="md">
        MyContextHook
      </Heading>
    </>
  );
};

export default MyContextHook;
