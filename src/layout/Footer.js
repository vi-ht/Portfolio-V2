//import css
import "./../css/Color.css";
import "./../css/font.css";
import "./../css/aboutme-page.css";
//import chakra UI component
import {
    Text,
    Center,
} from "@chakra-ui/react";

import { IconButton } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Link } from "@chakra-ui/react";
import {
    CopyIcon,
    CheckCircleIcon,
} from "@chakra-ui/icons";
import { Box, HStack } from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react";
//----------------------------------------------------------
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
export default function Footer({mt, position, top}) {
    return (
        <Center w="full" mb={10} mt={mt} position={position? position: "static"} top={top?top:0}>
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
                <CustomIcon link="https://www.linkedin.com/in/huynh-thi-thanh-vi-bbb51a18b/" iconName="basil:linkedin-solid" />
                <CustomTooltipIcon
                    iconName="basil:phone-solid"
                    label="0377793371"
                    w="176px"
                    pos="bottom-end"
                />
            </HStack>
        </Center>
    );
}
