//import css
import "./../../../css/layout.css";
import "./../../../css/font.css";
import "./../../../css/scroll.css";
// import chakra components
import { Text } from "@chakra-ui/react";

const TextTemplate = ({ children, container }) => (
    <Text
        fontSize={{
            base: "18px", //0px
            lg: "20px", // 992px
        }}
        className={container ? "container" : "qs-m"}
        lineHeight={{
            base: "30px", //0px
            lg: "30px", // 992px
        }}
        mt={{
            base: "0.8rem", //0px
            lg: "1rem", // 992px
        }}
    >
        {children}
    </Text>
);
export { TextTemplate };
