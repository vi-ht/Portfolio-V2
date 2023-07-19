//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import hook
import { useTitle } from "./../../customHook/useTitle";
//import component
import IntroContent from "./IntroContent";
import Footer from "../../layout/Footer";
import Quote from "./Quote";
import MonitoProject from "./MonitoProject";
import MainContent from "./MainContent";
import FelixzoneProject from "./FelixzoneProject";
import PorfolioProject from "./PorfolioProject";
import MYBProject from "./MYBProject";
import NatureProject from "./NatureProject";
import InternoProject from "./InternoProject";
//import chakra UI component
import { Box } from "@chakra-ui/react";
//------------------------------------------

export default function CodingPage() {
    useTitle(`Coding projects | Thanh Vi's portfolio`);
    return (
        <Box width="full">
            <IntroContent />
            <Quote />
            <FelixzoneProject />
            <MainContent />
            <PorfolioProject />
            <MonitoProject />
            <MYBProject />
            <NatureProject />
            <InternoProject />
            <Footer mt={10} />
        </Box>
    );
}
