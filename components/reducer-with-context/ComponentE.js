const { Heading, Text } = require('@chakra-ui/react')
const { default: ComponentF } = require('./ComponentF')

const ComponentE = () => {
  return (
    <div className="sub-borders">
    <Heading>Component E</Heading>
    <Text>Here in Component E we have Component F!</Text>
    <ComponentF />
    </div>
  )
}

export default ComponentE
