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
                { path: "coding-projects", element: <HomePage /> },
                { path: "about-me", element: <AboutMePage /> },
                { path: "my-resume", element: <Resume /> },

                {
                    path: "ux-ui-projects/",
                    //element: <></>,
                    children: [
                        {
                            path: "cinema-food-stall-project",
                            element: <CinnemaFoodStall />,
                        },
                        {
                            path: "aura-project-ios-version",
                            element: <AuraMobile />,
                        },
                        {
                            path: "co-gi-ban-nay-project",
                            element: <Cogibannay />,
                        },
                        {
                            path: "aura-project-web-design-version",
                            element: <AuraWeb />,
                        },
                        {
                            path: "portfolio-v1",
                            element: <PortfolioV1 />,
                        },
                        {
                            path: "portfolio-v2",
                            element: <PortfolioV2 />,
                        },
                    ],
                },
            ],
        },
    ]);
    return route;
}

const CinnemaFoodStall = Loadable(
    lazy(() => import("../component/homepage/CinemaFoodStall"))
);
const Resume = Loadable(lazy(() => import("../component/resume-page/Resume")));
const AuraMobile = Loadable(
    lazy(() => import("../component/homepage/AuraMobile"))
);
const Cogibannay = Loadable(
    lazy(() => import("../component/homepage/Cogibannay"))
);
const AuraWeb = Loadable(lazy(() => import("../component/homepage/AuraWeb")));
const HomePage = Loadable(lazy(() => import("../component/homepage/HomePage")));
const Portfolio = Loadable(lazy(() => import("../component/portfolio/Index.js")));
const CodingPage = Loadable(
    lazy(() => import("../component/coding-page/CodingPage"))
);
const AboutMePage = Loadable(
    lazy(() => import("../component/aboutme-page/AboutMePage"))
);
const PortfolioV1 = Loadable(
    lazy(() => import("../component/homepage/portfolioV1.js"))
);
const PortfolioV2 = Loadable(
    lazy(() => import("../component/homepage/PortfolioV2"))
);