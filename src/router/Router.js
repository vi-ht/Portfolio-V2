import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout";
import { Box, Center, CircularProgress } from "@chakra-ui/react";

const Loadable = (Component) => () => {
    return (
        <Suspense
            fallback={
                <Box w="full" mt="13vh">
                    <Center w="full" h="87vh">
                        <CircularProgress isIndeterminate color="#FB797F" />
                    </Center>
                </Box>
            }
        >
            <Component />
        </Suspense>
    );
};

// const Loadable = (Component) => {
//     return (props) => {
//         return (
//             <Suspense fallback={<>{console.log("ggggg...")}</>}>
//                 <Component {...props} />
//             </Suspense>
//         );
//     };
// };

export default function Router() {
    const route = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Portfolio />,
                },
            ],
        },
    ]);
    return route;
}

const Portfolio = Loadable(
    lazy(() => import("../component/portfolio/Index.js"))
);
