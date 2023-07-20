//import css
import "./../../css/font.css";
import "./../../css/Color.css";
//import custom hook
import { useAnim } from "./../../customHook/useAnim";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import image
import Felix from "../../asset/image/Felix-mockups.png";
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
//import chakra icon
import { LinkIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
//----------------------------------------------------------
export default function FelixzoneProject() {
    useAnim(
        "felix-container",
        "felix-left",
        "felix-right",
        "project-left",
        "project-right",
        200
    );
    return (
        <BgColorLayout bgColor="rgba(255,215,218,0.5)" id="felix-container">
            <Grid w="full" templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem
                    colSpan={{ base: 12, lg: 5 }}
                    colStart={1}
                    transform="translate(-30px,0)"
                    opacity={0}
                    id="felix-left"
                >
                    <Center w="full" h="full">
                        <Box>
                            <Text
                                fontSize="25px"
                                className="qs-b"
                                mt={{ base: 0, lg: "-30px" }}
                            >
                                FELIXZONE - Graduation Thesis
                            </Text>
                            <Text fontSize="16px" className="qs-b" mb="8px">
                                (Responsive web - SPA)
                            </Text>
                            <Text fontSize="16px" className="qs-r">
                                Felix Zone is a model booking platform with the
                                mission to connect talented models and reliable
                                brands
                            </Text>
                            <Text
                                fontSize="16px"
                                className="qs-smb main-color"
                                mt="5px"
                                mb="5px"
                            >
                                FelixZone Project includes:
                            </Text>
                            <UnorderedList>
                                <ListItem>FelixZone Lading-page</ListItem>
                                <ListItem>FelixZone Web admin</ListItem>
                                <ListItem>FelixZone Mobile app</ListItem>
                            </UnorderedList>
                            <Text
                                fontSize="16px"
                                className="qs-smb main-color"
                                mt="5px"
                                mb="5px"
                            >
                                My responsibility in team:
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    Coding UI for front-end side.
                                </ListItem>
                                <ListItem>Fetch API</ListItem>
                                <ListItem>
                                    Writing SRS (software requirements
                                    specification).
                                    <Link
                                        href="https://drive.google.com/file/d/1pWrmkSRRytzqMdwu12CVV23p8uOyLAwc/view?usp=sharing"
                                        isExternal
                                        color="black"
                                        fontWeight="bold"
                                        fontSize="16px"
                                    >
                                        {" "}
                                        FelixZone's SRS{"   "}
                                        <ExternalLinkIcon mx="2px" />
                                    </Link>
                                    <Link
                                        href="https://drive.google.com/file/d/1QcBs6Yg7s4FX1NCql4924oGrbsqR4cyF/view?usp=sharing"
                                        isExternal
                                        color="black"
                                        fontWeight="bold"
                                        fontSize="16px"
                                    >
                                        {" "}
                                        FelixZone's final slide{" "}
                                        <ExternalLinkIcon mx="2px" />
                                    </Link>
                                    {/* <a target="_blank" href="">
                    View SRS
                </a> */}
                                </ListItem>
                                <ListItem>
                                    Collect and analyze client requirements
                                </ListItem>
                                <ListItem>
                                    Using Figma to design UI in the final stages
                                    of the project.
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
                                <ListItem>ReactJS, Material UI, Redux</ListItem>
                                <ListItem>HTML, CSS, JS</ListItem>
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
                                    href="https://felixzone.asia/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Go to Felixzone web site
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
                    id="felix-right"
                >
                    <img
                        src={Felix}
                        alt="FelixZone Mockups"
                        style={{ width: "100%" }}
                    ></img>
                </GridItem>
            </Grid>
        </BgColorLayout>
    );
}
