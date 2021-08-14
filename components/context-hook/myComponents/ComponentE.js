import { Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import ComponentF from './ComponentF';

import { UserContext, ChannelContext } from '../AppComponent';

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <>
      <Heading fontSize="sm" fontWeight="normal">
        3. This is ComponentE rendering ComponentF!!!`
      </Heading>
      <Heading>P.S. User: {user.name}</Heading>
      <Heading>Also, the channel is {channel}</Heading>

      <ComponentF />
    </>
  );
};

export default ComponentE;
