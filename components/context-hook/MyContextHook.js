import { useContext, useState } from 'react';
import { Heading } from '@chakra-ui/react';

const MyContextHook = () => {
  const [sample, setSample] = useState('');
  return (
    <>
      <Heading fontSize="md">Here is my Context Hook.</Heading>
    </>
  );
};

export default MyContextHook;
