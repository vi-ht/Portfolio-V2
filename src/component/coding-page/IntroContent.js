//import css
import "./../../css/font.css";
import "./../../css/layout.css";
import "./../../css/animate.css";
//import layout
import BgImageLayout from "../../layout/BgImageLayout";
//import image
import star from "../../asset/icon/twemoji_dizzy.png";
import bg from "../../asset/image/codingbg_optimized.png";
// import chakra components
import { Text, Center } from "@chakra-ui/react";
//---------------------------------------------------
export default function IntroContent() {
    return (
        <BgImageLayout bg={bg} pos="100% 80%">
            <Center display="flex" flexDirection="column" className="intro" transform="translate(0px,50px)">
                <img
                    src={star}
                    alt="wave-hand"
                    style={{ width: "60px", height: "60px" }}
                />
                <Text
                    fontSize={{
                        base: "25px", //0px
                        sm: "25px", // 480px
                        md: "30px", // 768px
                        lg: "30px", // 992px
                        xl: "35px", // 1280px
                        "2xl": "35px", //1536px
                    }}
                    className="qs-smb"
                >
                    Team Work Project
                </Text>
                <div className="line" style={{ margin: "1rem 0" }}></div>
                <Text
                    fontSize={{
                        base: "16px", //0px
                        lg: "20px", // 992px
                    }}
                    mt={{
                        base: "0.3rem", //0px
                        lg: "0", // 992px
                    }}
                    w={{
                        base: "100%", //0px
                        lg: "50%", // 992px
                    }}
                    textAlign="center"
                >
                    This is my graduation thesis at FPT University, I and a
                    group of friends worked together to build a website for the
                    Felixzone company.
                </Text>
            </Center>
        </BgImageLayout>
    );
}
