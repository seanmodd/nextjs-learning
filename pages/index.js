import Head from 'next/head';
import Card from 'react-bootstrap/Card';

import { Heading, Text } from '@chakra-ui/react';
import styles from 'styles/Home.module.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

// import '@fontsource/poppins';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
      <Card className="text-center p-3">
        <Heading color="brand.700">Welcome to nextjs</Heading>
        <Text>Hello Bro</Text>
        <div className="w-100">
          <Button
            className="btn-lg w-50 m-1 btn-secondary mb-2"
            href="/apicall"
          >
            API Calls
          </Button>
          <Button className="btn-lg w-50 m-1 btn-primary" href="/context">
            Context Hook
          </Button>
          <div className="d-table p-2">
            <Button className="w-5 p-3 m-2 bg-secondary">here</Button>
            <Button className="w-5 p-3 m-2 bg-success">here</Button>
            <Button className="w-5 p-3 m-2 bg-danger">here</Button>
            <Button className="w-5 p-3 m-2 bg-warning text-dark">here</Button>
            <Button className="w-5 p-3 m-2 bg-dark">here</Button>
            <Button className="w-5 p-3 m-2 bg-light text-dark">here</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
