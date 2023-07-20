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
            lg: "18px", // 992px
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
const BigTextTemplate = ({ children, container }) => (
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
            lg: "0.8rem", // 992px
        }}
    >
        {children}
    </Text>
);
const TitleTemplate = ({ children, isPink, isBold, isSpace, isSmallSpace }) => (
    <Text
        fontSize={{
            base: "45px", //0px
            sm: "50px", // 480px
            md: "55px", // 768px
            lg: "60px", // 992px
        }}
        lineHeight={{
            base: "50px", //0px
            sm: "60px", // 480px
            md: "70px", // 768px
            lg: "80px", // 992px
        }}
        w={{
            base: "100%",
            lg: "60%",
        }}
        className={
            isPink
                ? isBold
                    ? "qs-b main-color"
                    : "qs-smb main-color"
                : isBold
                ? "qs-b"
                : "qs-smb"
        }
        mb={isSpace ? "40px" : isSmallSpace ? "30px" : "0"}
    >
        {children}
    </Text>
);
export { TextTemplate, TitleTemplate, BigTextTemplate };
