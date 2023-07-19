//import css
import "./../../css/font.css";
import "./../../css/Color.css";
import "./../../css/animate.css";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import custom hook
import { useAnim } from "./../../customHook/useAnim";
//import image
import Porfolio from "../../asset/image/Porfolio-mockups.png";
//import chakra UI component
import {
    Grid,
    GridItem,
    Box,
    ListItem,
    UnorderedList,
    Center,
    Text,
    Button,
} from "@chakra-ui/react";
// import chakra icon
import { LinkIcon } from "@chakra-ui/icons";
//----------------------------------------------------------
export default function PorfolioProject() {
    useAnim(
        "portfolio-container",
        "portfolio-left",
        "portfolio-right",
        "project-left",
        "project-right",
        200
    );
    return (
        <BgColorLayout bgColor="rgba(255,215,218,0.5)" id="portfolio-container">
            <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem
                    colSpan={{ base: 12, lg: 7 }}
                    colStart={{ base: 1, lg: 1 }}
                    transform="translate(-30px,0)"
                    opacity={0}
                    id="portfolio-left"
                >
                    <Center height={{ base: "auto", lg: "100%" }}>
                        <img
                            src={Porfolio}
                            alt="Porfolio Mockups"
                            style={{ width: "100%" }}
                        ></img>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={{ base: 12, lg: 5 }}
                    colStart={{ base: 1, lg: 8 }}
                    transform="translate(30px,0)"
                    opacity={0}
                    id="portfolio-right"
                >
                    <Center w="full" h="full">
                        <Box>
                            <Text fontSize="25px" className="qs-b">
                                MY PORTFOLIO
                            </Text>
                            <Text fontSize="16px" className="qs-b" mb="8px">
                                (Responsive web - SPA)
                            </Text>
                            <Text fontSize="16px" className="qs-r">
                                This is a portfolio website designed and coded
                                by me for the purpose of showcasing all my UI/UX
                                and coding projects.
                            </Text>
                            <Text
                                fontSize="16px"
                                className="qs-smb main-color"
                                mt="5px"
                                mb="5px"
                            >
                                My responsibility:
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    Design and create website's mockups.
                                </ListItem>
                                <ListItem>
                                    Convert design template to responsive web
                                    UI.
                                </ListItem>
                                <ListItem>
                                    Create effects and animations to increase
                                    the liveliness of the website.
                                </ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb main-color"
                                mt="5px"
                                mb="5px"
                            >
                                Technology:
                            </Text>
                            <UnorderedList>
                                <ListItem>ReactJS</ListItem>
                                <ListItem>ChakraUI</ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb main-color"
                                mt="5px"
                                mb="5px"
                            >
                                Design tool:
                            </Text>
                            <UnorderedList>
                                <ListItem>Figma</ListItem>
                            </UnorderedList>
                            <Button
                                leftIcon={<LinkIcon />}
                                variant="solid"
                                mt="10px"
                                fontSize="16px"
                                _hover={{
                                    background: "black",
                                }}
                                className="bg-main-color white-color"
                                bg="#FB797F"
                            >
                                <a
                                    href="https://www.figma.com/proto/4i2smvXZHPUp1hSyO1bU3G/MY-PORTFOLIO?type=design&node-id=4-63&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A24"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View mockups on Figma
                                </a>
                            </Button>
                        </Box>
                    </Center>
                </GridItem>
            </Grid>
        </BgColorLayout>
    );
}
