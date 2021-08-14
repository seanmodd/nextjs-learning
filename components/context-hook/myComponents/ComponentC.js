import { Heading } from '@chakra-ui/react';
import ComponentE from './ComponentE';

const ComponentC = () => (
  <>
    <Heading fontSize="sm" fontWeight="normal">
      2. This is ComponentC rendering ComponentE!!!!
    </Heading>
    <ComponentE />
  </>
);

export default ComponentC;
