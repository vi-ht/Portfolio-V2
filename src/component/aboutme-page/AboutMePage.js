//import css
import "./../../css/font.css";
import "./../../css/Color.css";
import "./../../css/aboutme-page.css";
import "./../../css/animate.css";
//import Hook
import { useEffect } from "react";
import { useTitle } from "./../../customHook/useTitle";
//import layout
import BgColorLayout from "../../layout/BgColorLayout";
//import image
import wavehand from "../../asset/icon/twemojiwavinghand.png";
import Avatar from "../../asset/image/my-image.png";
//import chakra UI component
import {
    Grid,
    GridItem,
    Box,
    Text,
    Center,
    Flex,
    HStack,
    IconButton,
    useToast,
    CloseButton,
    Popover,
    PopoverTrigger,
    PopoverBody,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Link,
} from "@chakra-ui/react";
// import Iconify icon
import { Icon } from "@iconify/react";
// import chakra icon
import { CopyIcon } from "@chakra-ui/icons";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { LinkIcon } from "@chakra-ui/icons";
//import React-router-dom
import { NavLink } from "react-router-dom";
import { PATH } from "./../../router/Path";
//----------------------------------------------------------
const TextTemplate = ({ children, container }) => (
    <Text
        fontSize={{
            base: "20px", //0px
            lg: "20px", // 992px
        }}
        className={container ? "container" : "qs-m"}
        lineHeight={{
            base: "30px", //0px
            lg: "30px", // 992px
        }}
        mt={{
            base: "0.8rem", //0px
            lg: "0", // 992px
        }}
    >
        {children}
    </Text>
);
const CustomIcon = ({ link, iconName, tooltip }) => {
    return (
        <Link href={link} isExternal>
            <IconButton
                aria-label="Search database"
                icon={<Icon icon={iconName} width="35" height="35" />}
                bg="white"
                color="lightgray"
                _hover={{
                    color: "black",
                    backgroundColor: "white",
                }}
            />
        </Link>
    );
};
const CustomTooltipIcon = ({ pos, iconName, label, w }) => {
    const toast = useToast();
    return (
        <Popover placement={pos}>
            <PopoverTrigger>
                <IconButton
                    aria-label="Search database"
                    icon={<Icon icon={iconName} width="40" height="40" />}
                    bg="white"
                    color="lightgray"
                    _hover={{
                        color: "black",
                        backgroundColor: "white",
                    }}
                />
            </PopoverTrigger>
            <PopoverContent w={w}>
                <PopoverArrow />
                <PopoverCloseButton mt={2} />
                <PopoverBody>
                    <HStack>
                        <IconButton
                            colorScheme="blue"
                            aria-label="Search database"
                            size="sm"
                            bg="#FB797F"
                            icon={<CopyIcon />}
                            _hover={{
                                color: "white",
                                backgroundColor: "black",
                            }}
                            onClick={() => {
                                navigator.clipboard.writeText(`${label}`);
                                toast({
                                    description: "Copied to clipboard",
                                    duration: 3000,
                                    isClosable: true,
                                    position: "top",
                                    render: () => (
                                        <Box
                                            color="white"
                                            p={3}
                                            bg="black"
                                            borderRadius={8}
                                        >
                                            <HStack position="relative">
                                                <CheckCircleIcon ml={2} />
                                                <Text>
                                                    Copied to clipboard!
                                                </Text>
                                                <CloseButton
                                                    size="md"
                                                    position="absolute"
                                                    right="0"
                                                />
                                            </HStack>
                                        </Box>
                                    ),
                                });
                            }}
                        />
                        <Text>{label}</Text>
                    </HStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default function AboutMePage() {
    useTitle(`About Me | Thanh Vi's portfolio`);
    return (
        <BgColorLayout bgColor="white" page>
            <Grid
                w="100%"
                templateColumns="repeat(12, 1fr)"
                gap={{ base: 4, lg: 10 }}
                mt={{ base: 8, sm: 6, lg: 0 }}
            >
                <GridItem
                    transform="translate(-30px,0)"
                    id="abme-left"
                    colSpan={{ base: 12, lg: 6 }}
                    colStart={1}
                    w="full"
                    mb={{ base: 2, sm: 4, md: 5, lg: 0 }}
                >
                    <Center w="full" h="full">
                        <Box
                            w="full"
                            h={{ base: "100%", xl: "96%", "2xl": "85%" }}
                        >
                            <img
                                src={Avatar}
                                alt="Thanh Vi's image"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "85% 100%",
                                }}
                            ></img>
                        </Box>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={{ base: 12, lg: 6 }}
                    colStart={{ base: 1, lg: 7 }}
                    transform="translate(30px,0)"
                    id="abme-right"
                >
                    <Center w="full" h="full">
                        <Box>
                            <Text
                                fontSize={{
                                    base: "50px", //0px
                                    sm: "65px", // 480px
                                    md: "70px", // 768px
                                    lg: "70px", // 992px
                                }}
                                lineHeight={{
                                    base: "60px", //0px
                                    sm: "80px", // 480px
                                    md: "80px", // 768px
                                    lg: "90px", // 992px
                                }}
                                className="qs-b main-color"
                            >
                                HUỲNH THỊ THANH VI
                            </Text>
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
                                "I’m{" "}
                                <span
                                    className="highlight qs-b"
                                    style={{ color: "black" }}
                                >
                                    Thanh Vi
                                </span>
                                , a little girl with a big passion for{" "}
                                <span className="highlight qs-b">
                                    Front-end web development
                                </span>{" "}
                                and
                                <span className="highlight qs-b">
                                    {" "}
                                    UX/UI Design
                                </span>
                                ."
                            </TextTemplate>
                            <Text fontSize="16px" className="qs-r" mt="17px">
                                I studied software engineering at FPT university
                                (HCMC campus).
                            </Text>
                            <Text fontSize="16px" className="qs-r" mt="17px">
                                Besides programming, I'm also interested in
                                UX/UI design because it is related to web
                                front-end programming - which I'm really
                                passionate about. That’s the reason why I
                                decided to learn about UX/UI design.
                            </Text>
                            <Text fontSize="16px" className="qs-r" mt="17px">
                                The world grows every second so{" "}
                                <span
                                    className="highlight qs-b"
                                    style={{ color: "black" }}
                                >
                                    I'm always ready to learn new things
                                </span>
                                .
                            </Text>
                            <Text fontSize="16px" className="qs-r" mt="17px">
                                Thank you for spending the time to check out my
                                portfolio!
                            </Text>
                            <Flex
                                // height="30px"
                                direction={{ base: "column", md: "row" }}
                                justifyContent={{
                                    base: "center",
                                    md: "flex-start",
                                }}
                                alignItems={{
                                    base: "flex-start",
                                    md: "center",
                                }}
                                gap={3.5}
                                mt="20px"
                            >
                                <NavLink to={PATH.resume}>
                                    <Button
                                        leftIcon={<LinkIcon />}
                                        variant="solid"
                                        fontSize="16px"
                                        _hover={{
                                            background: "black",
                                        }}
                                        className="bg-main-color white-color"
                                        bg="#FB797F"
                                    >
                                        <a
                                            href="https://vi-ht.github.io/Custom-Bootstrap/"
                                            target="_blank"
                                        >
                                            View my CV
                                        </a>
                                    </Button>
                                </NavLink>
                                <Text
                                    fontSize="27px"
                                    className="qs-l"
                                    color="lightgray"
                                    fontWeight="light"
                                    ml="5px"
                                    display={{ base: "none", md: "inline" }}
                                >
                                    |
                                </Text>
                                <Text
                                    fontSize="16"
                                    className="qs-smb"
                                    fontWeight="light"
                                    ml="5px"
                                    display={{ base: "inline", md: "none" }}
                                    mt={2}
                                >
                                    Or contact me through{" "}
                                    <ArrowDownIcon w="20px" h="20px" />
                                </Text>
                                <HStack gap={3}>
                                    <CustomIcon
                                        link="https://www.facebook.com/thanhviihuynh/"
                                        iconName="basil:facebook-solid"
                                    />
                                    <CustomIcon
                                        link="https://www.instagram.com/huynhthanhvii/"
                                        iconName="basil:instagram-outline"
                                    />
                                    <CustomTooltipIcon
                                        link=""
                                        iconName="iconoir:send-mail"
                                        label="thanhviii888@gmail.com"
                                        w="270px"
                                        pos="bottom"
                                    />
                                    <CustomIcon
                                        link="https://www.linkedin.com/in/huynh-thi-thanh-vi-bbb51a18b/"
                                        iconName="basil:linkedin-solid"
                                    />
                                    <CustomTooltipIcon
                                        iconName="basil:phone-solid"
                                        label="0377793371"
                                        w="176px"
                                        pos="bottom-end"
                                    />
                                </HStack>
                            </Flex>
                        </Box>
                    </Center>
                </GridItem>
            </Grid>
        </BgColorLayout>
    );
}
