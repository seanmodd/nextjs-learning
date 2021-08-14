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

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <Box>
      <Heading fontSize="3xl">Counter One</Heading>
      <VStack my={10} spacing={19}>
        <Heading fontSize="lg">Count: {count}</Heading>

        <HStack mt={10}>
          <Button onClick={() => dispatch({ type: 'INCREMENT' })}
            className="mr-1 bg-success">Increment
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
      </VStack>
    </Box>
  );
};

export default CounterOne;
