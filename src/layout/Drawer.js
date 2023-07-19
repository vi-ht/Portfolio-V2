// import react
import * as React from "react";
import { useDisclosure } from "@chakra-ui/react";
// import chakra component
import { IconButton, Stack, Center, Text } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
} from "@chakra-ui/react";
// import chakra icon
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import react-router-dom
import { PATH } from "./../router/Path.js";
import { NavLink } from "react-router-dom";
//-------------------------------

export default function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState("right");
    const Link = ({ path, children }) => {
        return (
            <>
                <NavLink
                    onClick={onClose}
                    to={path}
                    className={({ isActive }) =>
                        isActive ? "qs-b mobile-link" : "qs-m mobile-link"
                    }
                    style={({ isActive }) => {
                        return {
                            textAlign: "left",
                            fontSize: "20px",
                            color: isActive ? "#FB797F" : "black",
                        };
                    }}
                >
                    {children}
                </NavLink>
            </>
        );
    };

    return (
        <>
            <IconButton
                bg="white"
                icon={<HamburgerIcon w={30} h={30} color="#FB797F" />}
                onClick={onOpen}
                position="relative"
                left="15px"
            />
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen} w={{base: "100%"}}>
                <DrawerOverlay />
                <DrawerContent
                    borderTopLeftRadius={{base: "none", sm: 20}}
                    borderBottomLeftRadius={{base: "none", sm: 20}}
                >
                    <DrawerHeader display="flex" justifyContent="space-between">
                    <Link to={PATH.home}>
                        <Text
                            fontSize="2xl"
                            fontWeight={700}
                            pt={1}
                            className="qs-b main-color"
                            sx={{
                                transition: "0.5s"
                            }}
                            _hover={{
                                color: "black"
                            }}
                        >
                            Thanh Vi
                        </Text>
                    </Link>
                        <IconButton
                            aria-label="Search database"
                            icon={<CloseIcon />}
                            onClick={onClose}
                            bg="white"
                        />
                    </DrawerHeader>
                    <Center width="full" height="full" mt="-3rem">
                        <DrawerBody borderTopRadius="md">
                            <Stack
                                gap={3}
                                className="qs-smb"
                                float="left"
                                ml="1rem"
                            >
                                <Link path={PATH.home}>UX/UI</Link>
                                <Link path={PATH.coding}>Coding</Link>
                                <Link path={PATH.about}>About Me</Link>
                                <Link path={PATH.resume}>My Resume</Link>
                            </Stack>
                        </DrawerBody>
                    </Center>
                </DrawerContent>
            </Drawer>
        </>
    );
}
