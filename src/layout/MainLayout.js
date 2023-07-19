import { Container } from "@chakra-ui/react";
//import hook
import { useEffect } from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <Container
            maxW="100vw"
            h="100vh"
            centerContent
            p="0"
            position="relative"
        >
            {/* <Header />
            <MobileHeader /> */}
            <Center w="full">
                <Outlet />
            </Center>
        </Container>
    );
}
