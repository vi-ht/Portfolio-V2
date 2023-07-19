// import CSS
import "./../../../css/font.css";
import "./../../../css/Color.css";
import "./../../../css/layout.css";
import "./../../../css/animate.css";
import "./../../../css/portfolio-anim.css";
import { IconButton } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Link } from "@chakra-ui/react";
import { CopyIcon, CheckCircleIcon } from "@chakra-ui/icons";
// import chakraUI components
import { HStack, Text, Box } from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
// import react-router-dom
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react";

const CustomIcon = ({ link, iconName, tooltip }) => {
    return (
        <Link href={link} isExternal>
            <IconButton
                aria-label="Search database"
                icon={<Icon icon={iconName} width="35" height="35" />}
                bg="transparent"
                color="#7D7D7D"
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
                    bg="transparent"
                    color="#7D7D7D"
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

export {CustomIcon, CustomTooltipIcon} 