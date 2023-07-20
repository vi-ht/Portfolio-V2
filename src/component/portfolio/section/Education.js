//import css
import "./../../../css/layout.css";
import "./../../../css/font.css";
import "./../../../css/scroll.css";
import "./../../../css/background.css";
import "./../../../css/portfolio-anim.css";
// import chakra components
import { Text, Box, Center, Grid, GridItem } from "@chakra-ui/react";
//import image
import Avatar from "../../../asset/icon/edu.png";
//import component
import { TitleTemplate } from "../component/TextTemplate";
import Layout from "./Layout";
import EducationStage from "./EducationStage";
//---------------------------------------------------------
export default function Education() {
    return (
        <Layout id="edu">
            <Grid
                w="100%"
                templateColumns="repeat(14, 1fr)"
                gap={{ base: 4, lg: 0 }}
                mt={{ base: 8, sm: 6, lg: 0 }}
            >
                <GridItem colSpan={{ base: 14, lg: 8 }} colStart={1}>
                    <Center w="full" h="full">
                        <Box>
                            <TitleTemplate isSpace>Education</TitleTemplate>
                            <EducationStage
                                name="FPT UNIVERSITY - HCM CAMPUS "
                                h={120}
                                date="Oct 18 - Nov 22"
                            >
                                <Text
                                    className="qs-r stage-text"
                                    fontSize="16px"
                                >
                                    <span className="qs-smb">Major:</span>{" "}
                                    Software engineering{" "}
                                </Text>
                                <Text
                                    className="qs-r stage-text"
                                    fontSize="16px"
                                >
                                    <span className="qs-smb">GPA:</span>{" "}
                                    8.1/10.0 | Bachelor's degree
                                </Text>
                                <Text
                                    className="qs-r stage-text"
                                    fontSize="16px"
                                >
                                    <span className="qs-smb">
                                        Certificate of merit:{" "}
                                    </span>{" "}
                                    4 times is awarded “Honorable Student Of
                                    Semester”.
                                </Text>
                            </EducationStage>
                            <EducationStage
                                des="(Online course on Coursera)"
                                name="GOOGLE UX DESIGN"
                                h={110}
                                date="Oct 22 - May 23"
                            >
                                <Text
                                    className="qs-r stage-text"
                                    fontSize="16px"
                                >
                                    Completed 7 courses and passed 3 UX/UI
                                    design project.
                                </Text>
                                <Text
                                    className="qs-smb stage-text"
                                    fontSize="16px"
                                >
                                    View my UI/UX projects
                                </Text>
                            </EducationStage>
                            <EducationStage
                                des="(Online course on Edx)"
                                name="Introduction to Web Accessibility (WCAG)"
                                h={110}
                                date="Apr 23 - May 23"
                            >
                                <Text
                                    className="qs-r stage-text"
                                    fontSize="16px"
                                >
                                    Complete this course with a score of
                                    90/100%.
                                </Text>
                            </EducationStage>
                        </Box>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={{ base: 14, lg: 6 }}
                    colStart={{ base: 1, lg: 9 }}
                    w="full"
                    mb={{ base: 2, sm: 4, md: 5, lg: 0 }}
                >
                    <Center w="full" h="full">
                        <Box
                            w="full"
                            h={{
                                base: "100%",
                                xl: "80%",
                                "2xl": "80%",
                            }}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <img
                                src={Avatar}
                                alt="Thanh Vi's avatar"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    // objectPosition: "100% 100%",
                                }}
                            ></img>
                        </Box>
                    </Center>
                </GridItem>
            </Grid>
        </Layout>
    );
}
