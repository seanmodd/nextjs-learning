import React from 'react';
import { Heading } from '@chakra-ui/react';
import ComponentC from './myComponents/ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
const AppComponent = () => (
  <>
    <UserContext.Provider value={{ name: 'John Doe' }}>
      <ChannelContext.Provider value="codeevolution baby">
        <Heading fontSize="sm" fontWeight="normal">
          1. This is the AppComponent, rendering Component C!!!!!!
        </Heading>
        <ComponentC />
      </ChannelContext.Provider>
    </UserContext.Provider>
  </>
);

export default AppComponent;
