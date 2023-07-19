//import css
import "./../../css/font.css";
import "./../../css/layout.css";
//import hook
import { useEffect, useLayoutEffect } from "react";
import { useTitle } from "./../../customHook/useTitle";
//import component
import Footer from "../../layout/Footer";
import ViewMore from "./Viewmore";
import BreadcrumbComp from "./Breadcrumb";
// import chakra components
import { Box, Center, CircularProgress } from "@chakra-ui/react";
//import image
import bg1 from "./../../asset/image/Cinema-part1.webp";
import bg2 from "./../../asset/image/Cinema-part2.webp";
import bg3 from "./../../asset/image/Cinema-part3.webp";
import bg4 from "./../../asset/image/Cinema-part4.webp";
import bg5 from "./../../asset/image/Cinema-part5.webp";
import bg6 from "./../../asset/image/Cinema-part6.webp";
import bg7 from "./../../asset/image/Cinema-part7.webp";
import bg8 from "./../../asset/image/Cinema-part8.webp";
//import React-router-dom
import { PATH } from "../../router/Path";
//-----------------------------------------------------------
export default function CinnemaFoodStall({}) {
    useTitle(`Cinema Food Stalls Project | Thanh Vi's portfolio`);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("cinemaContent").style.display = "none";
    });
    useEffect(() => {
        window.scrollTo(0, 0);
        const timeout = setTimeout(() => {
            document.getElementById("loading1").style.display = "none";
            document.getElementById("cinemaContent").style.display = "block";
        }, 1000);
        //
        return () => {
            clearTimeout(timeout);
        };
    });
    return (
        <Box w="full" mt="13vh">
            <Center w="full" h="87vh" id="loading1">
                <CircularProgress isIndeterminate color="#FB797F" />
            </Center>
            <Box id="cinemaContent">
                <BreadcrumbComp
                    projectName="Cinema Food Stalls Project"
                    path={PATH.uxui.cinema}
                />
                <img src={bg1} style={{ width: "100%" }}></img>
                <img src={bg2} style={{ width: "100%" }}></img>
                <img src={bg3} style={{ width: "100%" }}></img>
                <img src={bg4} style={{ width: "100%" }}></img>
                <img src={bg5} style={{ width: "100%" }}></img>
                <iframe
                    style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        width: "100%",
                        height: "100vh",
                    }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLHSKC75DIIbThNBi0D153P%2FCinema-food-stalls%3Ftype%3Ddesign%26node-id%3D1-4563%26scaling%3Dscale-down%26page-id%3D1%253A2103%26starting-point-node-id%3D1%253A4563"
                    allowfullscreen
                ></iframe>
                <img src={bg6} style={{ width: "100%" }}></img>
                <img src={bg7} style={{ width: "100%" }}></img>
                <iframe
                    style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        width: "100%",
                        height: "100vh",
                    }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLHSKC75DIIbThNBi0D153P%2FCinema-food-stalls%3Ftype%3Ddesign%26node-id%3D25-6126%26scaling%3Dscale-down%26page-id%3D1%253A2104%26starting-point-node-id%3D25%253A6126"
                    allowfullscreen
                ></iframe>
                <img
                    src={bg8}
                    style={{ width: "100%", marginBottom: "1rem" }}
                ></img>
                <ViewMore id={1} />
                <Footer mt={8} />
            </Box>
        </Box>
    );
}
