import { useReducer } from 'react';

const { Heading, HStack, VStack, Box } = require('@chakra-ui/react');
const { Button } = require('react-bootstrap');

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { firstCounter: state.firstCounter + action.value };
    case 'DECREMENT':
      return { firstCounter: state.firstCounter - action.value };
    case 'RESET':
      return initialState;
    default:
      return { firstCounter: state.firstCounter };
  }
};

const CounterThree = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <VStack>
      <Heading fontSize="3xl" my={5}>
        Counter Three
      </Heading>
      <Heading fontSize="lg" my={5}>
        Counter: {counter.firstCounter}
      </Heading>
      <VStack>
        <HStack>
          <Button
            onClick={() => dispatch({ type: 'INCREMENT', value: 1 })}
            className="m-1 bg-success"
          >
            Increment
          </Button>
          <Button
            onClick={() => dispatch({ type: 'DECREMENT', value: 1 })}
            className="m-1 bg-danger"
          >
            Decrement
          </Button>
        </HStack>
        <HStack>
          <Button
            onClick={() => dispatch({ type: 'INCREMENT', value: 5 })}
            className="m-1 bg-success"
          >
            Increment 5
          </Button>
          <Button
            onClick={() => dispatch({ type: 'DECREMENT', value: 5 })}
            className="m-1 bg-danger"
          >
            Decrement 5
          </Button>
        </HStack>
      </VStack>
      <Button onClick={() => dispatch({ type: 'RESET' })} className="bg-dark">
        Reset
      </Button>
    </VStack>
  );
};

export default CounterThree;
