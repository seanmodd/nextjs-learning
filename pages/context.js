import Head from 'next/head';
import Card from 'react-bootstrap/Card';

import { Heading, Text } from '@chakra-ui/react';
import styles from 'styles/Home.module.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Welcome from 'components/class-components/6.ClassComponents/Welcome';
import DataFetching from 'components/api-calls/DataFetching';
import AppComponent from 'components/context-hook/AppComponent';

// import '@fontsource/poppins';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
      <Card className="text-center p-3 d-flex justify-content-center align-items-center">
        <Heading color="brand.700">Context Hook Page</Heading>
        <Text>Hello Bro</Text>
        <Button href="/">Visit Home Page</Button>

        <Card className="text-center p-3 m-2 d-flex justify-content-center align-items-center">
          <MyContextHook />
          <AppComponent />
        </Card>
      </Card>
    </div>
  );
}
