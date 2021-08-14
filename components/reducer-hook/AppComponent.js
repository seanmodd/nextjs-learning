const { Heading, HStack } = require('@chakra-ui/react');
const { Button } = require('react-bootstrap');

const AppComponent = () => (
  <div>
    <Heading>Reducer Hook</Heading>
    <HStack>
      <Button className="m-1 bg-success">Increment</Button>
      <Button className="m-1 bg-danger">Decrement</Button>
      <Button className="m-1 bg-dark">Decrement</Button>
    </HStack>
  </div>
);

export default AppComponent;
