//import css
import "./../../css/font.css";
import "./../../css/Color.css";
import "./../../css/animate.css";
//import custom hook
import { useTitle } from "./../../customHook/useTitle";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
import Footer from "../../layout/Footer";
//import chakra UI component
import {
    Grid,
    GridItem,
    Box,
    Text,
    ListItem,
    UnorderedList,
    Link,
} from "@chakra-ui/react";
//import chakra icon
import { ExternalLinkIcon } from "@chakra-ui/icons";
//import React-router-dom
import { NavLink } from "react-router-dom";
import { PATH } from "./../../router/Path";
//----------------------------------------------------------
export default function Resume() {
    // useAnim(
    //     "felix-container",
    //     "felix-left",
    //     "felix-right",
    //     "project-left",
    //     "project-right"
    // );
    useTitle(`Resume | Thanh Vi's portfolio`);
    return (
        <BgColorLayout bgColor="white">
            <Grid
                w="full"
                templateColumns="repeat(16, 1fr)"
                gap={{ base: 0, md: 8, lg: 10 }}
                mt={{ base: 8, md: 0, lg: 5 }}
            >
                <GridItem colSpan={{ base: 16, md: 8, lg: 6 }}>
                    <Box>
                        <Text
                            fontSize="25px"
                            className="qs-b"
                            mt={{ base: 0, lg: "-30px" }}
                        >
                            CONTACT
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Date of birth
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            01-10-2000
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Phone
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            (+84) 377 793 371
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Mail
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            thanhvi888@gmail.com
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Portfolio
                        </Text>
                        <NavLink to={PATH.home}>
                            <Text fontSize="16px" className="qs-r" mb="2px">
                                <Link
                                    color="#FB797F"
                                    fontWeight="bold"
                                    fontSize="16px"
                                >
                                    {" "}
                                    Thanh Vi's portfolio{"   "}
                                    <ExternalLinkIcon mx="2px" />
                                </Link>
                            </Text>
                        </NavLink>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Always welcome you to stop by and see all my
                            personal projects!{" "}
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Address
                        </Text>
                        <Text fontSize="16px" className="qs-r">
                            745 Huynh Tan Phat Street{" "}
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Phu Thuan Ward, District 7, Ho Chi Minh City
                        </Text>
                        <Text fontSize="25px" className="qs-b" mt="30px">
                            LANGUAGE
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            English
                        </Text>
                        <Text fontSize="16px" className="qs-r">
                            TOEIC certificate (795/990)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Pretty good at listening and reading
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Chinese
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Pretty good in communication
                        </Text>
                        <Text fontSize="25px" className="qs-b" mt="30px">
                            CERTIFICATE
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Web Design for Everybody: Basics of Web Development
                            & Coding Specilization
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/03e7cd6648bf79232d612cd6d9d4d11c"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Introduction to HTML5{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/1dc896f47f86d1f142d667be6b053b28"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Introduction to CSS3{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/b6654f10efa626c100d403186e40b359"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Interactivity with Javascript{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/5e18801bc0bbe5b15590a19ef0e8deea"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Advance styling with responsive design{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/4bc7a998768ea241c506e143a61d3db3"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Web design for everybody capstone{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Google UX Design Professional Certificate
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/cc4b4176f15a8d226d9b091390a13a74"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Foundations of User Experience (UX) Design
                                {"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/4ccbc9c0b85e70409de787fe3a441106"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Start the UX Design Process: Empathize, Define,
                                and Ideate{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/2a85e34890834af27b7507187fd3e009"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Build Wireframes and Low-Fidelity Prototypes
                                {"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/bbd89c1d4a7099c42cc6b8338d871aa9"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Conduct UX Research and Test Early Concepts
                                {"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/5966bcba2bf2969a7f2bbc6a83526ebd"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Create High-Fidelity Designs and Prototypes in
                                Figma{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/dc0fae840fd04b8d8e715e5889fb7048"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Responsive Web Design in Adobe XD{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/a8e1705114e2055b0508c6cd5c811a66"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Design a User Experience for Social Good &
                                Prepare for Jobs{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Meta Front-End Developer Professional Certificate
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/88c989ff749498324f42ac8efe5e785b"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Introduction to Front-End Development{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/7c1405cbb41b3bf5c2a4c5c2e477c6c1"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Version Control{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/a8e1705114e2055b0508c6cd5c811a66"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                React Basics{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/cd9662321f1ca614bf396245f4ca9294"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Advanced React{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            Search Engine Optimization (SEO) Specialization
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="https://coursera.org/share/9a1a9c4f44cd4a30832e424e543497f9"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Introduction to Google SEO{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                href="#"
                                isExternal
                                color="black"
                                fontSize="16px"
                            >
                                {" "}
                                Google SEO Fundamentals{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base: 16, md: 8, lg: 5 }}>
                    <Box>
                        <Text
                            fontSize="25px"
                            className="qs-b"
                            mt={{ base: "30px", md: 0, lg: "-30px" }}
                        >
                            EDUCATION
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-smb" mb="8px">
                            FPT UNIVERSITY
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            (October 18 - November 22)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Major:</span> Software
                            engineering
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">GPA:</span> 8.1/10.0
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Certificate of merit:</span>{" "}
                            4 times is awarded "Honorable Student Of Semester".
                        </Text>
                        <Text
                            fontSize="16px"
                            className="qs-smb"
                            mb="8px"
                            mt="30px"
                        >
                            GOOGLE UX DESIGN{" "}
                            <span className="qs-r">
                                | Online course on Coursera
                            </span>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            (October 22 - May 23)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Completed 7 courses and passed 3 UX/UI design
                            project (Mobile, Web responsive).
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <Link
                                isExternal
                                color="black"
                                fontSize="16px"
                                href="https://coursera.org/share/4b51eb39296614846a01b2f892552a14"
                            >
                                {" "}
                                Google UX Design certificate{"   "}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </Text>
                        <NavLink to={PATH.home}>
                            <Text fontSize="16px" className="qs-r" mb="8px">
                                <Link
                                    isExternal
                                    color="#FB797F"
                                    fontWeight="bold"
                                    fontSize="16px"
                                >
                                    {" "}
                                    View my UI/UX projects{"   "}
                                    <ExternalLinkIcon mx="2px" />
                                </Link>
                            </Text>
                        </NavLink>
                        <Text
                            fontSize="16px"
                            className="qs-smb"
                            mb="8px"
                            mt="33px"
                        >
                            {"Introduction to Web Accessibility (WCAG)".toUpperCase()}{" "}
                            <span className="qs-r">| Online course in Edx</span>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            (April 23 - May 23)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Complete this course with a score of 90/100%.
                        </Text>
                        <Text fontSize="30px" className="qs-b" mt="35px">
                            EXPERIENCE
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <NavLink to={PATH.coding}>
                            <Text fontSize="16px" className="qs-r" mb="8px">
                                <Link
                                    color="#FB797F"
                                    fontWeight="bold"
                                    fontSize="16px"
                                    isExternal={false}
                                >
                                    {" "}
                                    View my coding projects{"   "}
                                    <ExternalLinkIcon mx="2px" />
                                </Link>
                            </Text>
                        </NavLink>

                        <Text
                            fontSize="16px"
                            className="qs-smb"
                            mb="8px"
                            mt="15px"
                        >
                            FPT SOFTWARE{" "}
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            (May 21 - September 21)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Grade: </span> 10.0/10.0
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Position: </span> Intern
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Description: </span>
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                Prepare data for AI training.
                            </ListItem>
                            <ListItem mt={1}>
                                Learn and use Python to check validate for
                                training data.
                            </ListItem>
                            <ListItem mt={1}>
                                Practice team-work skills.
                            </ListItem>
                        </UnorderedList>
                        <Text
                            fontSize="16px"
                            className="qs-smb"
                            mb="8px"
                            mt="30px"
                        >
                            FELIXZONE COMPANY{" "}
                            <span className="qs-r">| Graduation Thesis</span>
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            (December 21 - September 22)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Position: </span> Front-end
                            web developer
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Project: </span>{" "}
                            felixzone.asia
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            <span className="qs-m">Description: </span>
                        </Text>
                        <UnorderedList>
                            <ListItem mt={1}>
                                Coding UI for front-end side. (HTML/CSS/JS,
                                ReactJS, Material-UI).{" "}
                            </ListItem>
                            <ListItem mt={1}>Fetch API using Axios.</ListItem>
                            <ListItem mt={1}>
                                Collect and analyze client requirements.
                            </ListItem>
                            <ListItem mt={1}>
                                Writing SRS (software requirements
                                specification).
                            </ListItem>
                            <ListItem mt={1}>
                                Using Figma to design UI in the final stages of
                                the project.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem
                    colSpan={{ base: 16, lg: 5 }}
                    display={{ base: "grid", md: "none", lg: "grid" }}
                >
                    <Box>
                        <Text
                            fontSize="25px"
                            className="qs-b"
                            mt={{ base: "30px", lg: "-30px" }}
                        >
                            TECHNICAL SKILLS
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-smb" mb="10px">
                            {"Technical".toUpperCase()}
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            HTML5
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            CSS3 (grid / flexbox / responsive / animate)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            CSS preprocessor: SASS / SCSS
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Convert PSD/Figma design to pixel-perfect UI
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            JavaScript / ES6 JavaScript / DOM
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Working with REST/RESTful API for fetching data
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Understanding of basic SEO principles.
                        </Text>
                        <Text
                            fontSize="16px"
                            className="qs-smb"
                            mb="10px"
                            mt="15px"
                        >
                            {"UI Framework".toUpperCase()}
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            JQuery
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            ReactJS
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Redux / Redux Thunk
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Bootstrap
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Material UI
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Chakra UI
                        </Text>
                        <Text
                            fontSize="16px"
                            className="qs-smb"
                            mb="10px"
                            mt="15px"
                        >
                            {"VERSION CONTROL SYSTEM".toUpperCase()}
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Git workflow (Centralized / Feature branching /
                            Forking)
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Tools: Git / GitHub
                        </Text>
                        <Text fontSize="25px" className="qs-b" mt="30px">
                            DESIGN SKILLS
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-smb" mb="10px">
                            {"UX/UI".toUpperCase()}
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Responsive Design
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Information Architecture / Sitemap
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Storyboarding
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Wireframing
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Prototyping
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Accessibility UX
                        </Text>
                        <Text
                            fontSize="16px"
                            className="qs-smb"
                            mb="10px"
                            mt="15px"
                        >
                            {"Design tools".toUpperCase()}
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Figma / FigJam
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Adobe XD
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Photoshop (basic for cutting PSD to HTML)
                        </Text>
                        <Text fontSize="25px" className="qs-b" mt="30px">
                            SOFT SKILLS
                        </Text>
                        <div
                            style={{
                                width: "40px",
                                height: "3px",
                                backgroundColor: "#FB797F",
                                borderRadius: "20px",
                                margin: "10px 0 20px 0",
                            }}
                        ></div>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Teamwork
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Responsibility
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Communication
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Optimism
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Patience
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Aesthetics UX
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Active listening
                        </Text>
                        <Text fontSize="16px" className="qs-r" mb="8px">
                            Presentation
                        </Text>
                    </Box>
                </GridItem>
            </Grid>
            <Grid
                w="full"
                templateColumns="repeat(14, 1fr)"
                gap={10}
                mt="35px"
                display={{ base: "none", md: "grid", lg: "none" }}
            >
                <GridItem colSpan={{ base: 5 }}>
                    <Text
                        fontSize="25px"
                        className="qs-b"
                        mt={{ base: 0, lg: "-30px" }}
                    >
                        TECHNICAL SKILLS
                    </Text>
                    <div
                        style={{
                            width: "40px",
                            height: "3px",
                            backgroundColor: "#FB797F",
                            borderRadius: "20px",
                            margin: "10px 0 20px 0",
                        }}
                    ></div>
                    <Text fontSize="16px" className="qs-smb" mb="10px">
                        {"Technical".toUpperCase()}
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        HTML5
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        CSS3 (grid / flexbox / responsive / animate)
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        CSS preprocessor: SASS / SCSS
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Convert PSD/Figma design to pixel-perfect UI
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        JavaScript / ES6 JavaScript / DOM
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Working with REST/RESTful API for fetching data
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Understanding of basic SEO principles.
                    </Text>
                    <Text
                        fontSize="16px"
                        className="qs-smb"
                        mb="10px"
                        mt="15px"
                    >
                        {"UI Framework".toUpperCase()}
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        JQuery
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        ReactJS
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Redux / Redux Thunk
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Bootstrap
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Material UI
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Chakra UI
                    </Text>
                    <Text
                        fontSize="16px"
                        className="qs-smb"
                        mb="10px"
                        mt="15px"
                    >
                        {"VERSION CONTROL SYSTEM".toUpperCase()}
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Git workflow (Centralized / Feature branching / Forking)
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Tools: Git / GitHub
                    </Text>
                </GridItem>
                <GridItem colSpan={{ base: 5 }}>
                    <Text
                        fontSize="25px"
                        className="qs-b"
                        mt={{ base: 0, lg: "30px" }}
                    >
                        DESIGN SKILLS
                    </Text>
                    <div
                        style={{
                            width: "40px",
                            height: "3px",
                            backgroundColor: "#FB797F",
                            borderRadius: "20px",
                            margin: "10px 0 20px 0",
                        }}
                    ></div>
                    <Text fontSize="16px" className="qs-smb" mb="10px">
                        {"UX/UI".toUpperCase()}
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Responsive Design
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Information Architecture / Sitemap
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Storyboarding
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Wireframing
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Prototyping
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Accessibility
                    </Text>
                    <Text
                        fontSize="16px"
                        className="qs-smb"
                        mb="10px"
                        mt="15px"
                    >
                        {"Design tools".toUpperCase()}
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Figma / FigJam
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Adobe XD
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Photoshop (basic for cutting PSD to HTML)
                    </Text>
                </GridItem>
                <GridItem colSpan={{ base: 4 }}>
                    <Text
                        fontSize="25px"
                        className="qs-b"
                        mt={{ base: 0, lg: "30px" }}
                    >
                        SOFT SKILLS
                    </Text>
                    <div
                        style={{
                            width: "40px",
                            height: "3px",
                            backgroundColor: "#FB797F",
                            borderRadius: "20px",
                            margin: "10px 0 20px 0",
                        }}
                    ></div>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Teamwork
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Responsibility
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Communication
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Optimism
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Patience
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Aesthetics UX
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Active listening
                    </Text>
                    <Text fontSize="16px" className="qs-r" mb="8px">
                        Presentation
                    </Text>
                </GridItem>
            </Grid>
            <Footer
                mt={{ base: "-2rem", lg: "-4rem" }}
                position="relative"
                top={{ base: "5rem", md: "6.5rem", lg: "8rem" }}
            />
        </BgColorLayout>
    );
}
