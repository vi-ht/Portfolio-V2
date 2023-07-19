import {
    Box,
    Flex,
    Center,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PATH } from "../../router/Path";
//----------------------------------------------------
export default function BreadcrumbComp({projectName, path}) {
    return (
        <Center>
            <Flex
                w={{
                    base: "90%", //0px
                    sm: "94%", // 480px
                    md: "86%", // 768px
                    lg: "94%", // 992px
                    xl: "80%", // 1280px
                    "2xl": "80rem", //1536px
                }}
                mt={2}
                mb={2}
                alignItems="center"
            >
                <Box>
                    <Breadcrumb mb={2}>
                        <BreadcrumbItem>
                            <Link to={PATH.home}>
                                <BreadcrumbLink href="#">UX/UI</BreadcrumbLink>
                            </Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                                <BreadcrumbLink
                                    color="#FB797F"
                                    className="qs-smb"
                                >
                                    {projectName}
                                </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
            </Flex>
        </Center>
    );
}
