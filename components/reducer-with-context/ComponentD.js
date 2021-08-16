import React, { useContext } from 'react';
import { CountContext } from './AppComponent';

const { Button } = require('react-bootstrap');
const { Heading, Text, HStack } = require('@chakra-ui/react');

const ComponentD = () => {
  const countContext = useContext(CountContext);
  return (
    <div className="sub-borders">
      <Heading>Component D</Heading>
      <HStack mt={10}>
        <Button
          onClick={() => countContext.countDispatch({ type: 'INCREMENT' })}
          className="mr-1 bg-success"
        >
          Increment
        </Button>
        <Button
          onClick={() => countContext.countDispatch({ type: 'DECREMENT' })}
          className="ml-1 bg-danger"
        >
          Decrement
        </Button>
      </HStack>
      <Button
        onClick={() => countContext.countDispatch({ type: 'RESET' })}
        className="bg-dark"
      >
        Reset
      </Button>
    </div>
  );
};

export default ComponentD;
