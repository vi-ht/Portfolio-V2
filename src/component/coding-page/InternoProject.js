//import css
import "./../../css/font.css";
import "./../../css/Color.css";
import "./../../css/animate.css";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import custom hook
import { useAnim } from "./../../customHook/useAnim";
//import image
import Interno from "../../asset/image/interno-mockup.png";
//import chakra UI component
import {
    Grid,
    GridItem,
    Box,
    Text,
    Center,
    ListItem,
    UnorderedList,
    Button,
    Link,
} from "@chakra-ui/react";
//import chakra UI icon
import { LinkIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
//----------------------------------------------------------
export default function InternoProject() {
    useAnim(
        "interno-container",
        "interno-left",
        "interno-right",
        "project-left",
        "project-right",
        130
    );
    return (
        <BgColorLayout bgColor="#ffeddc" id="interno-container">
            <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem
                    colSpan={{ base: 12, lg: 7 }}
                    colStart={{ base: 1, lg: 1 }}  
                    transform="translate(-30px,0)"
                    opacity={0}
                    id="interno-left"
                >
                    <img
                        src={Interno}
                        alt="Monito Mockups"
                        style={{ width: "100%" }}
                    ></img>
                </GridItem>
                <GridItem
                    colSpan={{ base: 12, lg: 5 }}
                    colStart={{ base: 1, lg: 8 }}
                    transform="translate(30px,0)"
                    opacity={0}
                    id="interno-right"
                >
                    <Center w="full" h="full">
                        <Box>
                            <Text
                                fontSize="25px"
                                className="qs-b"
                                mt={{ base: 0, lg: "20px" }}
                            >
                                INTERNO
                            </Text>
                            <Text fontSize="16px" className="qs-b" mb="8px">
                                (Responsive web - MPA)
                            </Text>
                            <Text fontSize="16px" className="qs-r">
                                Interno is a website for presenting interior
                                design with a delightful and captivating
                                experience.
                            </Text>
                            <Text
                                fontSize="16px"
                                className="qs-smb"
                                color="#292F36"
                                mt="5px"
                                mb="5px"
                            >
                                My responsibility:
                            </Text>
                            <UnorderedList>
                                <ListItem>Analyze design templates.</ListItem>
                                <ListItem>Convert design template to responsive web UI.</ListItem>
                                <ListItem>Create effects and animations to increase the liveliness of the website.</ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb"
                                mt="5px"
                                mb="5px"
                                color="#292F36"
                            >
                                Technology:
                            </Text>
                            <UnorderedList>
                                <ListItem>HTML, CSS, JS</ListItem>
                                <ListItem>SCSS</ListItem>
                                <ListItem>JQuery</ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb"
                                mt="5px"
                                mb="5px"
                                color="#292F36"
                            >
                                Interno design template:
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    I got this design template from Figma
                                    community.
                                    <Link
                                        href="https://www.figma.com/community/file/1192821197758069323"
                                        isExternal
                                        color="black"
                                        fontWeight="bold"
                                        fontSize="16px"
                                    >
                                        {" "}
                                        Interno design template{"   "}
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
                                bg="#292F36"
                            >
                                <a
                                    href="https://vi-ht.github.io/Interno/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Go to Interno website
                                </a>
                            </Button>
                        </Box>
                    </Center>
                </GridItem>
            </Grid>
        </BgColorLayout>
    );
}
