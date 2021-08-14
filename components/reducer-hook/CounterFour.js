import { useReducer } from 'react';

const { Heading, HStack, VStack, Box } = require('@chakra-ui/react');
const { Button } = require('react-bootstrap');

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'DECREMENT':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'INCREMENT2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'DECREMENT2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'RESET':
      return initialState;
    default:
      return { firstCounter: state.firstCounter };
  }
};

const CounterFour = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <VStack>
      <Heading fontSize="3xl" my={5}>
        Counter Four
      </Heading>
      <Heading fontSize="lg" my={5}>
        Counter: {counter.firstCounter}
      </Heading>
      <Heading fontSize="lg" my={5}>
        Counter 2: {counter.secondCounter}
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
        <HStack>
          <Button
            onClick={() => dispatch({ type: 'INCREMENT2', value: 1 })}
            className="m-1 bg-success"
          >
            Increment Counter 2
          </Button>
          <Button
            onClick={() => dispatch({ type: 'DECREMENT2', value: 1 })}
            className="m-1 bg-danger"
          >
            Decrement Counter 2
          </Button>
        </HStack>
      </VStack>
      <Button onClick={() => dispatch({ type: 'RESET' })} className="bg-dark">
        Reset
      </Button>
    </VStack>
  );
};

export default CounterFour;
