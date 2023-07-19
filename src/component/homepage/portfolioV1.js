//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import hook
import { useTitle } from "../../customHook/useTitle";
//import compoment
import Footer from "../../layout/Footer";
import ViewMore from "./Viewmore";
import BreadcrumbComp from "./Breadcrumb";
//import chakra UI component
import {
    Box,
    Center,
    GridItem,
    Grid,
    Text,
    UnorderedList,
    ListItem,
    Button,
    Flex,
} from "@chakra-ui/react";
//import chakra UI icon
import { LinkIcon } from "@chakra-ui/icons";
//import path
import { PATH } from "../../router/Path";
//-------------------------------------------------
export default function PortfolioV1() {
    useTitle(`Thanh Vi's portfolio - Current version | Thanh Vi's portfolio`);
    return (
        <Box>
            <Box width="full" mt={20}>
                <BreadcrumbComp
                    projectName="Portfolio - Current version"
                    path={PATH.uxui.portfolioV1}
                />
            </Box>
            <Center w="full" bg="white" bgSize="100%" mainpage>
                <Center
                    w={{
                        base: "90%", //0px
                        sm: "94%", // 480px
                        md: "86%", // 768px
                        lg: "94%", // 992px
                        xl: "80%", // 1280px
                        "2xl": "80rem", //1536px
                    }}
                >
                    <Flex
                        w="full"
                        alignItems="flex-start"
                        justify="center"
                        direction="column"
                        // mt={{
                        //     base: "65px", //0px
                        //     lg: "100px", //0px
                        // }}
                        mb={0}
                    >
                        <Grid w="full" templateColumns="repeat(1, 1fr)" gap={0}>
                            <GridItem colStart={1}>
                                <Box>
                                    <Text fontSize="25px" className="qs-b">
                                        MY PORTFOLIO - CURRENT VERSION
                                    </Text>
                                    <Text
                                        fontSize="16px"
                                        className="qs-b"
                                        mb="8px"
                                    >
                                        (Web responsive design)
                                    </Text>
                                    <Text fontSize="16px" className="qs-r" mb="1.5rem" mt="0.5rem">
                                        This is a portfolio website designed and
                                        coded by me for the purpose of
                                        showcasing all my UI/UX and coding
                                        projects.
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                        <iframe
                            id="portv1"
                            title="MY PORTFOLIO (Current Ver)"
                            style={{
                                border: "1px solid rgba(0, 0, 0, 0.1)",
                                width: "100%",
                                height: "100vh",
                            }}
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4i2smvXZHPUp1hSyO1bU3G%2FMY-PORTFOLIO%3Ftype%3Ddesign%26node-id%3D336-4210%26t%3DAoF0ZL9QBtcDpiwc-1%26scaling%3Dscale-down-width%26page-id%3D336%253A4083%26starting-point-node-id%3D336%253A4210%26mode%3Ddesign"
                            allowfullscreen
                        ></iframe>
                    </Flex>
                </Center>
            </Center>
            <ViewMore id={5} />
            <Footer mt={10} position="relative" top="2rem" />
        </Box>
    );
}
