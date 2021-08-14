const { Heading, Text } = require('@chakra-ui/react')
const { default: ComponentE } = require('./ComponentE')

const ComponentC = () => {
  return (
    <div className="borders">
    <Heading>Component C</Heading>
    <Text>Within Component C we have Component E!</Text>
    <ComponentE />
    </div>
  )
}

export default ComponentC
