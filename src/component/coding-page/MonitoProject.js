//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import custom hook
import { useAnim } from "./../../customHook/useAnim";
//import image
import Monito from "../../asset/image/Monito-mockups.png";
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
export default function MonitoProject() {
    useAnim(
        "monito-container",
        "monito-left",
        "monito-right",
        "project-left",
        "project-right",
        200
    );
    return (
        <BgColorLayout bgColor="rgba(255,228,130,0.25)" id="monito-container">
            <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem
                    colSpan={{ base: 12, lg: 5 }}
                    colStart={1}
                    transform="translate(-30px,0)"
                    opacity={0}
                    id="monito-left"
                >
                    <Center w="full" h="full">
                        <Box>
                            <Text
                                fontSize="25px"
                                className="qs-b"
                                mt={{ base: 0, lg: "20px" }}
                            >
                                MONITO
                            </Text>
                            <Text fontSize="16px" className="qs-b" mb="8px">
                                (Responsive web - MPA)
                            </Text>
                            <Text fontSize="16px" className="qs-r">
                                Monito is an e-commerce website that sells pets
                                and pet products. Besides, it provides useful
                                tips for pet care and nurturing.
                            </Text>
                            <Text
                                fontSize="16px"
                                className="qs-smb"
                                color="#FFB223"
                                mt="5px"
                                mb="5px"
                            >
                                My responsibility:
                            </Text>
                            <UnorderedList>
                                <ListItem>Analyze design templates.</ListItem>
                                <ListItem>Convert design template to responsive web UI.</ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb"
                                mt="5px"
                                mb="5px"
                                color="#FFB223"
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
                                color="#FFB223"
                            >
                                Monito design template:
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    I got this design template from Figma
                                    community.
                                    <Link
                                        href="https://www.figma.com/community/file/1164046882633361201"
                                        isExternal
                                        color="black"
                                        fontWeight="bold"
                                        fontSize="16px"
                                    >
                                        {" "}
                                        Monito design template{"   "}
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
                                bg="#FFB223"
                            >
                                <a
                                    href="https://vi-ht.github.io/Monito-website/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Go to Monito website
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
                    id="monito-right"
                >
                    <img
                        src={Monito}
                        alt="Monito Mockups"
                        style={{ width: "100%" }}
                    ></img>
                </GridItem>
            </Grid>
        </BgColorLayout>
    );
}
