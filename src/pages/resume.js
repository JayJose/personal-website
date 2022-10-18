import { Container, Text } from "@chakra-ui/react";
import MyResponsiveLine from "../components/Resume";

import resumeData from "../data/resume.json";

export default function MyResume() {
  console.log(resumeData);
  return (
    <Container height="100vh" width={"100%"}>
      <MyResponsiveLine data={resumeData} />
    </Container>
  );
}
