//import css
import "./../../css/font.css";
import "./../../css/scroll.css";
//import hook
import { useTitle } from "./../../customHook/useTitle";
import { useEffect } from "react";
//import component
import Welcome from "./section/Welcome";
import Test from "./section/Test";
import Header from "../../layout/Header";
import Footer from "./section/Footer";
import MobileHeader from "../../layout/MobileHeader";
//import chakra compoment
import { Box } from "@chakra-ui/react";
//import logic
import { handleWindowScroll } from "./side-effect/handleWindowScroll";
//------------------------------------------
export default function Index() {
    useTitle(`Thanh Vi's portfolio`);
    useEffect(() => {
        handleWindowScroll();
    }, []);
    return (
        <Box
            w="100%"
            bg="transparent"
            className="scrollerout"
            overflow="hidden"
        >
            <Header />
            <MobileHeader />
            <Footer />
            <Welcome bg="transparent" z={0} p="relative" />
            <Test bg="white" z={20} p="relative" />
        </Box>
    );
}
