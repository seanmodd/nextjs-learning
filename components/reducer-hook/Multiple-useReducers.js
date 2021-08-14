import { useReducer } from 'react';

const { Heading, HStack, VStack, Box } = require('@chakra-ui/react');
const { Button } = require('react-bootstrap');

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

const MultipleUseReducers = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  const [counterTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <VStack>
      <Heading fontSize="3xl" my={1}>
        Counter Five
      </Heading>
      <Heading fontSize="lg" fontWeight="normal" my={5}>
        Multiple useReducer Hooks.
      </Heading>
      <Heading fontSize="lg" fontWeight="normal" mb={10}>
        Easier than Counter Four!!!
      </Heading>
      <Heading fontSize="lg" mt="150">
        Counter: {counter}
      </Heading>

      <VStack>
        <HStack>
          <Button
            onClick={() => dispatch({ type: 'INCREMENT' })}
            className="m-1 bg-success"
          >
            Increment
          </Button>
          <Button
            onClick={() => dispatch({ type: 'DECREMENT' })}
            className="m-1 bg-danger"
          >
            Decrement
          </Button>
        </HStack>
      </VStack>
      <Button onClick={() => dispatch({ type: 'RESET' })} className="bg-dark">
        Reset
      </Button>
      <Heading fontSize="lg" mt="150">
        Counter Two: {counterTwo}
      </Heading>

      <VStack>
        <HStack>
          <Button
            onClick={() => dispatchTwo({ type: 'INCREMENT' })}
            className="m-1 bg-success"
          >
            Increment
          </Button>
          <Button
            onClick={() => dispatchTwo({ type: 'DECREMENT' })}
            className="m-1 bg-danger"
          >
            Decrement
          </Button>
        </HStack>
      </VStack>
      <Button
        onClick={() => dispatchTwo({ type: 'RESET' })}
        className="bg-dark"
      >
        Reset
      </Button>
    </VStack>
  );
};

export default MultipleUseReducers;
