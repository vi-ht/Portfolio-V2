//import css
import "./../../../css/layout.css";
import "./../../../css/font.css";
import "./../../../css/scroll.css";
import "./../../../css/background.css";
import "./../../../css/portfolio-anim.css";
//import hook
//import chakra UI component
import { Center, Flex } from "@chakra-ui/react";
//import image
// import chakra components
import {
    Grid,
    GridItem,
    ListItem,
    UnorderedList,
    Text,
    Box,
} from "@chakra-ui/react";
//import image
import wavehand from "../../../asset/icon/twemojiwavinghand.png";
import Avatar from "../../../asset/icon/exp.png";
import { TextTemplate, TitleTemplate } from "../component/TextTemplate";
import Layout from "./Layout";
import EducationStage from "./EducationStage";
export default function Experience() {
    return (
        <Layout id="exp">
            <Grid
                w="100%"
                templateColumns="repeat(14, 1fr)"
                gap={{ base: 4, lg: 0 }}
                mt={{ base: 8, sm: 6, lg: 0 }}
            >
                <GridItem colSpan={{ base: 14, lg: 6 }} colStart={1}>
                    <Center w="full" h="full">
                        <Box
                            w="full"
                            h={{
                                base: "100%",
                                xl: "80%",
                                "2xl": "80%",
                            }}
                        >
                            <img
                                src={Avatar}
                                alt="Thanh Vi's avatar"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    // objectPosition: "0% 0%",
                                }}
                            ></img>
                        </Box>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={{ base: 14, lg: 8 }}
                    colStart={{ base: 1, lg: 7 }}
                    w="full"
                    mb={{ base: 2, sm: 4, md: 5, lg: 0 }}
                >
                    <Center w="full" h="full">
                        <Box>
                            <TitleTemplate isSpace>Experience</TitleTemplate>
                            {/* <Box
                                p="20px 0px"
                                overflowY="scroll"
                                overflowX="hidden"
                                h="570px"
                            > */}
                            <EducationStage
                                name="FPT SOFTWARE"
                                h={140}
                                date="May 21 - Sep 21"
                                isExp
                            >
                                <Text
                                    className="qs-r stage-text"
                                    fontSize="16px"
                                >
                                    <span className="qs-smb">Position:</span>{" "}
                                    Intern
                                </Text>
                                <Text
                                    className="qs-r stage-text"
                                    fontSize="16px"
                                >
                                    <span className="qs-smb">
                                        Description:{" "}
                                    </span>{" "}
                                </Text>
                                <Text
                                    className="qs-r stage-text"
                                    fontSize="16px"
                                >
                                    <UnorderedList>
                                        <ListItem>
                                            Prepare data for AI training.
                                        </ListItem>
                                        <ListItem>
                                            Learn and use Python to check
                                            validate for training data.
                                        </ListItem>
                                    </UnorderedList>
                                </Text>
                            </EducationStage>
                            <EducationStage
                                name="FELIXZONE COMPANY"
                                h={205}
                                date="Dec 21 - Sep 22"
                                isExp
                            >
                                <Text
                                    className="qs-r stage-text"
                                    fontSize="16px"
                                >
                                    <span className="qs-smb">Position:</span>{" "}
                                    Front-end web developer
                                </Text>
                                <Text
                                    className="qs-r stage-text"
                                    fontSize="16px"
                                >
                                    <span className="qs-smb">
                                        Description:{" "}
                                    </span>{" "}
                                </Text>
                                <Text
                                    className="qs-r stage-text"
                                    fontSize="16px"
                                >
                                    <UnorderedList>
                                        <ListItem>
                                            Coding UI for front-end side.
                                            (HTML/CSS/JS, ReactJS, Material-UI).
                                        </ListItem>
                                        <ListItem>
                                            Fetch API using Axios.
                                        </ListItem>
                                        <ListItem>
                                            Collect and analyze client
                                            requirements.
                                        </ListItem>
                                        <ListItem>
                                            Writing SRS (software requirements
                                            specification).
                                        </ListItem>
                                        <ListItem>
                                            Using Figma to design UI in the
                                            final stages of the project.
                                        </ListItem>
                                    </UnorderedList>
                                </Text>
                            </EducationStage>
                        </Box>
                        {/* </Box> */}
                    </Center>
                </GridItem>
            </Grid>
        </Layout>
    );
}
