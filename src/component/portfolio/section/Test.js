//import css
import "./../../../css/layout.css";
import "./../../../css/font.css";
import "./../../../css/scroll.css";
import "./../../../css/background.css";
import "./../../../css/portfolio-anim.css";
//import hook
import { useEffect } from "react";
//import chakra UI component
import { Center, Flex, IconButton, Box } from "@chakra-ui/react";
//import iconify
import { Icon } from "@iconify/react";
// import components
import SlideBarLeft from "./SlideBarLeft";
import SlideBarRight from "./SlideBarRight";
import AboutVi from "./AboutVi";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
//import logic
import { handleScroll } from "../side-effect/handleScroller";
//----------------------------------------------------------
export default function Welcome({ bg, z, p }) {
    useEffect(() => {
        handleScroll();
    }, []);
    return (
        <Center
            w="full"
            h="100vh"
            bgSize="100%"
            position={p}
            zIndex={0}
            mt="100vh"
            bg="white"
            id="test"
        >
            <div id="gradient-compo-1"></div>
            <div id="gradient-compo-4"></div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1793 180"
                fill="none"
                id="svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 58.8348L49.3075 70.9514C100.109 83.0679 198.724 135.078 298.833 127C398.943 118.922 497.558 50.7572 597.667 58.8348C697.776 66.9125 796.391 98.7281 896.5 127C996.609 155.272 1095.22 163.35 1195.33 127C1295.44 90.6505 1394.06 34.6018 1494.17 10.3688C1594.28 -13.8643 1692.89 10.3688 1743.69 22.4853L1793 34.6018V180H1743.69C1692.89 180 1594.28 180 1494.17 180C1394.06 180 1295.44 180 1195.33 180C1095.22 180 996.609 180 896.5 180C796.391 180 697.776 180 597.667 180C497.558 180 398.943 180 298.833 180C198.724 180 100.109 180 49.3075 180H0V58.8348Z"
                    fill="url(#paint0_linear_443_32)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_443_32"
                        x1="896.5"
                        y1="0"
                        x2="896.5"
                        y2="180"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#FB797F" stop-opacity="0.35" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1793 180"
                fill="none"
                id="svg1"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 58.8348L49.3075 70.9514C100.109 83.0679 198.724 135.078 298.833 127C398.943 118.922 497.558 50.7572 597.667 58.8348C697.776 66.9125 796.391 98.7281 896.5 127C996.609 155.272 1095.22 163.35 1195.33 127C1295.44 90.6505 1394.06 34.6018 1494.17 10.3688C1594.28 -13.8643 1692.89 10.3688 1743.69 22.4853L1793 34.6018V180H1743.69C1692.89 180 1594.28 180 1494.17 180C1394.06 180 1295.44 180 1195.33 180C1095.22 180 996.609 180 896.5 180C796.391 180 697.776 180 597.667 180C497.558 180 398.943 180 298.833 180C198.724 180 100.109 180 49.3075 180H0V58.8348Z"
                    fill="white"
                />
            </svg>
            <Center overflow="hidden" position="relative">
                <div id="gradient-compo-3"></div>
                <SlideBarLeft />
                <SlideBarRight />
                <IconButton
                    aria-label="Search database"
                    icon={
                        <Icon
                            icon="solar:arrow-down-broken"
                            width="32"
                            height="32"
                            id="scroll-down-icon"
                        />
                    }
                    borderRadius="50%"
                    bg="radial-gradient(50% 50.00% at 50% 50.00%, rgba(251, 121, 127, 0.3) 10%, rgba(217, 217, 217, 0.00) 100%)"
                    color="black"
                    w="75px"
                    height="75px"
                    transform="rotate(180deg)"
                    position="absolute"
                    bottom="50px"
                    right="50px"
                    _hover={{
                        color: "black",
                        background:
                            "radial-gradient(50% 50.00% at 50% 50.00%, rgba(251, 121, 127, 0.5) 10%, rgba(217, 217, 217, 0.00) 100%)",
                    }}
                />
                <Box w="100%" bg="transparent" id="scroller" className="">
                    <AboutVi />
                    <Education />
                    <Experience />
                    <Skill />
                </Box>
            </Center>
        </Center>
    );
}
