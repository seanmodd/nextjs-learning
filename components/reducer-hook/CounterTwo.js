import { useReducer } from 'react';

const { Heading, HStack, VStack, Box } = require('@chakra-ui/react');
const { Button } = require('react-bootstrap');

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { firstCounter: state.firstCounter + 1 };
    case 'DECREMENT':
      return { firstCounter: state.firstCounter - 1 };
    case 'RESET':
      return initialState;
    default:
      return { firstCounter: state.firstCounter };
  }
};

const CounterTwo = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <VStack>
      <Heading fontSize="3xl" my={5}>
        Counter Two
      </Heading>
      <Heading fontSize="lg" my={5}>
        Counter: {counter.firstCounter}
      </Heading>
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
      <Button onClick={() => dispatch({ type: 'RESET' })} className="bg-dark">
        Reset
      </Button>
    </VStack>
  );
};

export default CounterTwo;
