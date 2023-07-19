//import css
import "./../../css/font.css";
import "./../../css/layout.css";
//import components
import ProjectCard from "./ProjectCard";
// import chakra components
import { Text, Grid, GridItem } from "@chakra-ui/react";
//import data
import { data } from "./Data";

export default function ViewMore({ id }) {
    return (
        <Grid
            templateColumns="repeat(12,1fr)"
            w="full"
            mt="3rem"
            gap={6}
            p="2rem"
        >
            <GridItem colSpan={12} mb={2}>
                <Text
                    fontSize={{
                        base: "25px", //0px
                        sm: "25px", // 480px
                        md: "30px", // 768px
                        lg: "30px", // 992px
                        xl: "35px", // 1280px
                        "2xl": "35px", //1536px
                    }}
                    className="qs-b"
                >
                    UX/UI projects 
                </Text>
                <div className="line"></div>
            </GridItem>
            {data.map(
                (item, i) =>
                    item.id !== id && (
                        <ProjectCard
                            key={i+item.name}
                            span={{ base: 12, md: 6, lg: 4 }}
                            start={item.start}
                            name={item.name}
                            des={item.des}
                            type={item.type}
                            img={item.img}
                            path={item.path}
                            viewMore = {true}
                        />
                    )
            )}
        </Grid>
        // </BgColorLayout>
    );
}
