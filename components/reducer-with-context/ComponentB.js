const { Heading, Text, Box } = require('@chakra-ui/react')
const { default: ComponentD } = require('./ComponentD')

const ComponentB = () => {
  return (
    <div className="borders">

    <Heading>Component B</Heading>
    <Text>Within Component B is nested Component D</Text>
    <ComponentD />

    </div>
  )
}

export default ComponentB
