//import css
import "./../../../css/layout.css";
import "./../../../css/font.css";
import "./../../../css/scroll.css";
import "./../../../css/background.css";
import "./../../../css/portfolio-anim.css";
//import chakra UI component
import { Center, Grid, GridItem, Box } from "@chakra-ui/react";
//import image
import wavehand from "../../../asset/icon/twemojiwavinghand.png";
import Avatar from "../../../asset/icon/ava.png";
//import component
import { TextTemplate, TitleTemplate } from "../component/TextTemplate";
import Layout from "./Layout";
//------------------------------------------------------------------
export default function AboutVi() {
    return (
        <Layout id="about-vi">
            <Grid
                w="100%"
                templateColumns="repeat(14, 1fr)"
                gap={{ base: 4, lg: 5 }}
                mt={{ base: 8, sm: 6, lg: 0 }}
            >
                <GridItem
                    colSpan={{ base: 14, lg: 6 }}
                    colStart={1}
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
                                    // objectPosition: "0% 0%",
                                }}
                            ></img>
                        </Box>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={{ base: 14, lg: 8 }}
                    colStart={{ base: 1, lg: 7 }}
                    transform="translate(30px,0)"
                    id="abme-right"
                >
                    <Center w="full" h="full">
                        <Box>
                            <TitleTemplate isPink isBold>HUỲNH THỊ THANH VI</TitleTemplate>
                            <img
                                src={wavehand}
                                alt="wave-hand"
                                style={{
                                    margin: "1.3rem 0",
                                    width: "40px",
                                    height: "40px",
                                }}
                            />
                            <TextTemplate>
                                I studied{" "}
                                <span
                                    className="highlight qs-smb"
                                    style={{
                                        color: "black",
                                    }}
                                >
                                    software engineering
                                </span>{" "}
                                at{" "}
                                <span
                                    className="highlight qs-smb"
                                    style={{
                                        color: "black",
                                    }}
                                >
                                    FPT university (HCMC campus).
                                </span>
                            </TextTemplate>
                            <TextTemplate>
                                Besides programming, I'm also interested in{" "}
                                <span
                                    className="highlight qs-smb"
                                    style={{
                                        color: "black",
                                    }}
                                >
                                    UX/UI design
                                </span>{" "}
                                because it is related to{" "}
                                <span
                                    className="highlight qs-smb"
                                    style={{
                                        color: "black",
                                    }}
                                >
                                    web front-end programming
                                </span>{" "}
                                - which I'm really passionate about. That’s the
                                reason why I decided to learn about{" "}
                                <span
                                    className="highlight qs-smb"
                                    style={{
                                        color: "black",
                                    }}
                                >
                                    UX/UI design
                                </span>
                                .
                            </TextTemplate>
                            <TextTemplate>
                                The world grows every second so{" "}
                                <span
                                    className="highlight qs-smb"
                                    style={{
                                        color: "black",
                                    }}
                                >
                                    I'm always ready to learn new things.
                                </span>
                            </TextTemplate>
                            <TextTemplate>
                                Thank you for spending the time to check out my
                                portfolio!
                            </TextTemplate>
                        </Box>
                    </Center>
                </GridItem>
            </Grid>
        </Layout>
    );
}
