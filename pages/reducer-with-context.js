import Card from 'react-bootstrap/Card';
import { Heading, Text } from '@chakra-ui/react';
import styles from 'styles/Home.module.css';
import { Button } from 'react-bootstrap';
import AppComponent from 'components/reducer-with-context/AppComponent';

// import '@fontsource/poppins';

export default function Home() {
  return (
    <div className={styles.container}>
      <Heading color="brand.700">Reducer with Context Page</Heading>
      <Text>Hello Bro</Text>
      <Button href="/">Visit Home Page</Button>

      <Card className="text-center p-5 m-5 d-flex justify-content-center align-items-center">
        <Card className="m-3 p-3 border-primary">
          <AppComponent />
        </Card>
      </Card>
    </div>
  );
}
