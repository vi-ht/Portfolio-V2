//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import custom hook
import { useAnim } from "./../../customHook/useAnim";
//import image
import Climate from "../../asset/image/Climate-mockups.png";
//import chakra UI component
import { Grid, GridItem, Box, Text, Center } from "@chakra-ui/react";
import {
    ListItem,
    UnorderedList,
} from "@chakra-ui/react";
import { Button} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
//----------------------------------------------------------
export default function NatureProject() {
    useAnim(
        "nature-container",
        "nature-left",
        "nature-right",
        "project-left",
        "project-right",
        130
    );
    const color = "#198754";
    return (
        <BgColorLayout bgColor="rgba(108,154,104,0.18)" id="nature-container">
            <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem
                    colSpan={{ base: 12, lg: 5 }}
                    colStart={1}
                    transform="translate(-30px,0)"
                    opacity={0}
                    id="nature-left"
                >
                    <Center w="full" h="full">
                        <Box>
                            <Text fontSize="25px" className="qs-b">
                                NATURE - LANDING PAGE
                            </Text>
                            <Text fontSize="16px" className="qs-b" mb="8px">
                                (Responsive web - MPA)
                            </Text>
                            <Text fontSize="16px" className="qs-r">
                                Nature is a website about nature conservation
                                and sustainable lifestyle
                            </Text>
                            <Text
                                fontSize="16px"
                                className="qs-smb"
                                color={color}
                                mt="5px"
                                mb="5px"
                            >
                                My responsibility:
                            </Text>
                            <UnorderedList>
                            <ListItem>Convert design template to responsive web UI.</ListItem>
                                <ListItem>Create effects and animations to increase the liveliness of the website.</ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb"
                                mt="5px"
                                mb="5px"
                                color={color}
                            >
                                Technology:
                            </Text>
                            <UnorderedList>
                                <ListItem>HTML, CSS, JS</ListItem>
                                <ListItem>Bootstrap</ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb"
                                mt="5px"
                                mb="5px"
                                color={color}
                            >
                                Monito design template:
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    I got this design template from Figma
                                    community.
                                    <Link
                                        href="https://www.figma.com/community/file/1159949335448845032/Free-Nature-landing-page-template"
                                        isExternal
                                        color="black"
                                        fontWeight="bold"
                                        fontSize="16px"
                                    >
                                        {" "}
                                        Nature landing-page design template
                                        {"   "}
                                        <ExternalLinkIcon mx="2px" />
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                            <Button
                                leftIcon={<LinkIcon />}
                                variant="solid"
                                mt="15px"
                                fontSize="16px"
                                _hover={{
                                    background: "black",
                                }}
                                className="bg-main-color white-color"
                                bg={color}
                            >
                                <a
                                    href="https://vi-ht.github.io/Custom-Bootstrap/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Go to Nature Landing-page
                                </a>
                            </Button>
                        </Box>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={{ base: 12, lg: 7 }}
                    colStart={{ base: 1, lg: 6 }}
                    transform="translate(30px,0)"
                    opacity={0}
                    id="nature-right"
                >
                    <img
                        src={Climate}
                        alt="Nature Mockups"
                        style={{ width: "100%" }}
                    ></img>
                </GridItem>
            </Grid>
        </BgColorLayout>
    );
}
