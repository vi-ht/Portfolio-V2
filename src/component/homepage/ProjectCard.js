//import css
import "./../../css/font.css";
import "./../../css/layout.css";
import "./../../css/animate.css";
// import chakra components
import { Text, GridItem } from "@chakra-ui/react";
//import React-router-dom
import { Link } from "react-router-dom";
//-----------------------------------------------------------
export default function ProjectCard({
    span,
    start,
    name,
    type,
    des,
    img,
    path,
}) {
    return (
        <GridItem colSpan={span} mb={5} className="card-container" w="100%">
            <Link to={path}>
                <img
                    src={img}
                    style={{ width: "100%", marginBottom: "1.7rem" }}
                    alt={name+"project"}
                ></img>
                <Text
                    textAlign="left"
                    className="main-color qs-b"
                    fontSize="16px"
                >
                    {type}
                </Text>
                <Text
                    fontSize={{ base: "20px", md: "30px" }}
                    mt="5px"
                    mb="10px"
                    className="qs-b"
                >
                    {name}
                </Text>
                <Text fontSize="16px" className="qs-r" mb="3px">
                    {des}
                </Text>
                <div className="card-line"></div>
            </Link>
        </GridItem>
    );
}
