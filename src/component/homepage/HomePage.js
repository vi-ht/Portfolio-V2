//import css
import "./../../css/font.css";
//import hook
import { useTitle } from "./../../customHook/useTitle";
//import component
import IntroContent from "./IntroContent";
import Quote from "./Quote";
import ProjectList from "./ProjectList";
import Footer from "../../layout/Footer";
//-----------------------
import { Box } from "@chakra-ui/react";
//------------------------------------------
export default function HomePage() {
  useTitle(`UX/UI projects | Thanh Vi's portfolio`);
  return (
    <Box w='100%' bg="pink">
      <IntroContent />
      <Quote/>
      <ProjectList/>
      <Footer mt={{base: "-2rem", lg: "-4rem"}}/>
    </Box>
  );
}
