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
    useTitle(`Thanh Vi's portfolio - New version | Thanh Vi's portfolio`);
    return (
        <Box>
            <Box width="full" mt={20}>
                <BreadcrumbComp
                    projectName="Portfolio - New version"
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
                                        MY PORTFOLIO - NEW VERSION
                                    </Text>
                                    <Text
                                        fontSize="16px"
                                        className="qs-b"
                                        mb="8px"
                                        mt="0.5rem"
                                    >
                                        (Web design)
                                    </Text>
                                    <Text
                                        fontSize="16px"
                                        className="qs-r"
                                        mb="1.5rem"
                                        mt="0.5rem"
                                    >
                                        This is the new version of my current
                                        portfolio that I recently redesigned
                                        based on the old version to refresh and
                                        make for a more modern website.
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                        <iframe
                            id="portv2"
                            title="MY PORTFOLIO - New version"
                            style={{
                                border: "1px solid rgba(0, 0, 0, 0.1)",
                                width: "100%",
                                height: "100vh",
                            }}
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4i2smvXZHPUp1hSyO1bU3G%2FMY-PORTFOLIO%3Ftype%3Ddesign%26node-id%3D277-3%26t%3D3zXVITh9UXnYWJ4M-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign"
                            allowfullscreen
                        ></iframe>
                    </Flex>
                </Center>
            </Center>
            <ViewMore id={6} />
            <Footer mt={10} position="relative" top="2rem" />
        </Box>
    );
}
