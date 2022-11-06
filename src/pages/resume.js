import { Container, Text } from "@chakra-ui/react";
import MyResponsiveLine from "../components/Resume";

import resumeData from "../data/resume.json";

export default function MyResume() {
  return (
    <Container height="100vh" width={"100%"}>
      <MyResponsiveLine data={resumeData} />
    </Container>
  );
}
