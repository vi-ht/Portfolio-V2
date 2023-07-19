//import css
import "./../../css/font.css";
import "./../../css/layout.css";
//import img
import cinema from "../../asset/image/CinnemaFoodStall.png";
import auraMobile from "../../asset/image/Aura-mobile-thumbnail.png";
import cogibanay from "../../asset/image/Cogibannay.png";
import auraDesk from "./../../asset/image/Aura.png";
import portfoliov2 from "./../../asset/image/Portfolio-V2.webp";
import portfoliov1 from "./../../asset/image/Portfolio-V1.webp";
//import react-router
import { PATH } from "../../router/Path";
const data = [
    {
        id: 1,
        type: "MOBILE APP DESIGN (Androi)",
        name: "CINEMA FOOD STALLS",
        des: `This is case study of "Cinema food stalls" - a snack-ordering app for a movie theater chains. It's also a practical exercises of "Google UX design" course.`,
        img: `${cinema}`,
        span: "6",
        start: "1",
        path: `${PATH.uxui.cinema}`
    },
    {
        id: 2,
        type: "MOBILE APP DESIGN (IOS)",
        name: "AURA - THE AURA OF BEAUTY",
        des: `This is case study of "Aura (IOS version)" - a makeup tutorial-sharing platform and makeup artist booking. It's also a practical exercise of "Google UX design" course.`,
        img: `${auraMobile}`,
        span: "6",
        start: "7",
        path: `${PATH.uxui.auraIOS}`
    },
    {
        id: 3,
        type: "WEB RESPONSIVE DESIGN",
        name: "AURA - THE AURA OF BEAUTY",
        des: `This is case study of "Aura (Web responsive)" - A responsive web for makeup lovers to learn make-up free, a useful platform for makeup artists who want to share work experience and get a job.`,
        img: `${auraDesk}`,
        span: "6",
        start: "1",
        path: `${PATH.uxui.auraWeb}`
    },
    {
        id: 4,
        type: "UX RESEARCH",
        name: "MOMO TALENT PROJECT",
        des: `"Có gì bán nấy" is my first UX research project to participate in the MOMO Talent contest and it helped me to get to the final round (interview) of the contest.`,
        img: `${cogibanay}`,
        span: "6",
        start: "7",
        path: `${PATH.uxui.cogibannay}`
    },
    {
        id: 5,
        type: "WEB RESPONSIVE DESIGN",
        name: "MY PORTFOLIO - CURRENT VERSION",
        des: `This is a portfolio website designed and coded by me for the purpose of showcasing all my UI/UX and coding projects.`,
        img: `${portfoliov1}`,
        span: "6",
        start: "7",
        path: `${PATH.uxui.portfolioV1}`
    },
    {
        id: 6,
        type: "WEB DESIGN",
        name: "MY PORTFOLIO - NEW VERSION",
        des: `This is the new version of my current portfolio that I recently redesigned based on the old version to refresh and make for a more modern website.`,
        img: `${portfoliov2}`,
        span: "6",
        start: "7",
        path: `${PATH.uxui.portfolioV2}`
    },
];
export {data}