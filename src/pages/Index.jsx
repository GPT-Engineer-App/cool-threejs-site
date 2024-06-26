import { Container } from "@chakra-ui/react";
import ThreeScene from "../components/ThreeScene";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <ThreeScene />
    </Container>
  );
};

export default Index;