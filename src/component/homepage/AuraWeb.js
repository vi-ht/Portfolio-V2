//import css
import "./../../css/font.css";
import "./../../css/layout.css";
//import hook
import { useEffect, useLayoutEffect } from "react";
import { useTitle } from "./../../customHook/useTitle";
//import component
import BreadcrumbComp from "./Breadcrumb";
import Footer from "../../layout/Footer";
import ViewMore from "./Viewmore";
// import chakra components
import { Box, GridItem, Center, CircularProgress } from "@chakra-ui/react";
//import image
import bg1 from "./../../asset/image/AuraWebPart1.webp";
import bg2 from "./../../asset/image/AuraWebPart2.webp";
import bg3 from "./../../asset/image/AuraWebPart3.webp";
import bg4 from "./../../asset/image/AuraWebPart4.webp";
import bg5 from "./../../asset/image/AuraWebPart5.webp";
import bg6 from "./../../asset/image/AuraWebPart6.webp";
import bg7 from "./../../asset/image/AuraWebPart7.webp";
import bg8 from "./../../asset/image/AuraWebPart8.webp";
import bg9 from "./../../asset/image/AuraWebPart9.webp";
import bg10 from "./../../asset/image/AuraWebPart10.webp";
import bg11 from "./../../asset/image/AuraWebPart11.webp";
import bg12 from "./../../asset/image/AuraWebPart12.webp";
import bg13 from "./../../asset/image/AuraWebPart13.webp";
//import React-router-dom
import { PATH } from "../../router/Path";

//-----------------------------------------------------------
export default function AuraWeb() {
    useTitle(`Aura Project (Web responsive version) | Thanh Vi's portfolio`);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("content").style.display = "none";
    });
    useEffect(() => {
        const timeout = setTimeout(() => {
            document.getElementById("loading").style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 1000);
        //
        return () => {
            clearTimeout(timeout);
        };
    });
    return (
        <Box w="full" mt="13vh">
            <Center w="full" h="87vh" id="loading">
                <CircularProgress isIndeterminate color="#FB797F" />
            </Center>
            <Box id="content">
                <BreadcrumbComp
                    projectName="Aura Project (Web responsive version)"
                    path={PATH.uxui.auraWeb}
                />
                <img src={bg1} style={{ width: "100%" }}></img>
                <img
                    src={bg2}
                    style={{
                        width: "100%",
                        // marginTop: "5rem",
                    }}
                ></img>
                <img src={bg3} style={{ width: "100%" }}></img>
                <img
                    src={bg4}
                    style={{
                        width: "100%",
                    }}
                ></img>
                <img
                    src={bg5}
                    style={{
                        width: "100%",
                    }}
                ></img>
                <img
                    src={bg6}
                    style={{
                        width: "100%",
                    }}
                ></img>
                <iframe
                    style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        width: "100%",
                        height: "100vh",
                    }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FUrJ4ZK1KyfZf0PDNdsGqes%2FAura%3Ftype%3Ddesign%26node-id%3D54%253A303%26t%3DNdCvcjbLfiR1ng78-1"
                    allowfullscreen
                ></iframe>
                <img
                    src={bg7}
                    style={{
                        width: "100%",
                    }}
                ></img>
                <iframe
                    style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        width: "100%",
                        height: "100vh",
                    }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUrJ4ZK1KyfZf0PDNdsGqes%2FAura%3Ftype%3Ddesign%26node-id%3D80-4617%26scaling%3Dscale-down-width%26page-id%3D54%253A303%26starting-point-node-id%3D54%253A871"
                    allowfullscreen
                ></iframe>
                <img
                    src={bg8}
                    style={{
                        width: "100%",
                    }}
                ></img>
                <img
                    src={bg9}
                    style={{ width: "100%" }}
                ></img>
                <iframe
                    style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        width: "100%",
                        height: "100vh",
                    }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FUrJ4ZK1KyfZf0PDNdsGqes%2FAura%3Ftype%3Ddesign%26node-id%3D213%253A976%26t%3DMYkZ8ahxKiupkYs9-1"
                    allowfullscreen
                ></iframe>
                <img
                    src={bg10}
                    style={{ width: "100%"}}
                ></img>
                <iframe
                    style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        width: "100%",
                        height: "100vh",
                    }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUrJ4ZK1KyfZf0PDNdsGqes%2FAura%3Ftype%3Ddesign%26node-id%3D54-305%26scaling%3Dscale-down-width%26page-id%3D54%253A304%26starting-point-node-id%3D54%253A305"
                    allowfullscreen
                ></iframe>
                <img
                    src={bg13}
                    style={{ width: "100%"}}
                ></img>
                <iframe
                    style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        width: "100%",
                        height: "100vh",
                    }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUrJ4ZK1KyfZf0PDNdsGqes%2FAura%3Ftype%3Ddesign%26node-id%3D180-2865%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D180%253A2865"
                    allowfullscreen
                ></iframe>
                <img
                    src={bg11}
                    style={{ width: "100%" }}
                ></img>
                <img
                    src={bg12}
                    style={{ width: "100%" }}
                ></img>
                <ViewMore id={3} />
                <Footer mt={10} />
            </Box>
        </Box>
    );
}
