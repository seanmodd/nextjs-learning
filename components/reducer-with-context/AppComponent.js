import React, { useReducer, useContext } from 'react';
import { Heading, Text, VStack, HStack } from '@chakra-ui/react';

const { Button } = require('react-bootstrap');
const { default: ComponentA } = require('./ComponentA');
const { default: ComponentB } = require('./ComponentB');
const { default: ComponentC } = require('./ComponentC');

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const AppComponent = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <Heading fontSize="lg" fontWeight="semibold">
          {' '}
          Our goal is to maintain a count state within AppComponent.js and
          modify that state from components A, D and F.{' '}
        </Heading>{' '}
        <br />
        <Text>
          To accomplish this we have two main steps. Step 1 is to create the
          counter within AppComponent.js using the reducer hook. Step 2 is to
          provide and consume the context within the required components.
        </Text>
        <br />
        <VStack my={10} spacing={19}>
          <Heading fontSize="lg">Count: {count}</Heading>

          {/* <HStack mt={10}>
          <Button
            onClick={() => dispatch({ type: 'INCREMENT' })}
            className="mr-1 bg-success"
          >
            Increment
          </Button>
          <Button
            onClick={() => dispatch({ type: 'DECREMENT' })}
            className="ml-1 bg-danger"
          >
            Decrement
          </Button>
        </HStack>
        <Button onClick={() => dispatch({ type: 'RESET' })} className="bg-dark">
          Reset
        </Button>
      </VStack> */}
          <br />
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </VStack>
      </CountContext.Provider>
    </div>
  );
};

export default AppComponent;
