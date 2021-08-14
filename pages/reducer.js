import Head from 'next/head';
import Card from 'react-bootstrap/Card';

import { Heading, Text } from '@chakra-ui/react';
import styles from 'styles/Home.module.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Welcome from 'components/class-components/6.ClassComponents/Welcome';
import DataFetching from 'components/api-calls/DataFetching';
import MyContextHook from 'components/context-hook/MyContextHook';
import CounterOne from 'components/reducer-hook/CounterOne';
import CounterTwo from 'components/reducer-hook/CounterTwo';
import CounterThree from 'components/reducer-hook/CounterThree';
import CounterFour from 'components/reducer-hook/CounterFour';
import MultipleUseReducers from 'components/reducer-hook/Multiple-useReducers';

// import '@fontsource/poppins';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
      <Card className="text-center p-5 m-5 d-flex justify-content-center align-items-center">
        <Heading color="brand.700">Reducer Hook Page</Heading>
        <Text>Hello Bro</Text>
        <Button href="/">Visit Home Page</Button>

        <Card className="text-center p-3 m-5 d-flex justify-content-center align-items-center">
          <Card className="m-3 p-3 border-success">
            <CounterOne />
          </Card>
          <Card className="m-3 p-3 border-success">
            <CounterTwo />
          </Card>
          <Card className="m-3 p-3 border-success">
            <CounterThree />
          </Card>
          <Card className="m-3 p-3 border-success">
            <CounterFour />
          </Card>
          <Card className="m-3 p-3 border-primary">
            <MultipleUseReducers  />
          </Card>
        </Card>
      </Card>
    </div>
  );
}
