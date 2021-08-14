import { Heading, Text } from '@chakra-ui/react';

const { default: ComponentA } = require('./ComponentA');
const { default: ComponentB } = require('./ComponentB');
const { default: ComponentC } = require('./ComponentC');

const AppComponent = () => (
  <div>
    <Heading fontSize="lg" fontWeight="semibold">
      {' '}
      Our goal is to maintain a count state within AppComponent.js and modify
      that state from components A, D and F.{' '}
    </Heading>{' '}
    <br />
    <Text>
      To accomplish this we have two main steps. Step 1 is to create the counter
      within AppComponent.js using the reducer hook. Step 2 is to provide and
      consume the context within the required components.
    </Text>
    <br />
    <ComponentA />
    <ComponentB />
    <ComponentC />
  </div>
);

export default AppComponent;
