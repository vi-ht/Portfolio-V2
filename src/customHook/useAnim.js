import { useEffect } from "react";
const useAnim = (parent, childLeft, childRight, animLeft, animRight,border) => {
    useEffect(() => {
        const pos = document.getElementById(parent).offsetTop;
        const func = () => {
            if (
                window.scrollY > pos - border &&
                !document
                    .getElementById(childLeft)
                    .classList.contains(animLeft) &&
                !document.getElementById(childRight).classList.contains(animRight)
            ) {
                document.getElementById(childLeft).classList.add(animLeft);
                document.getElementById(childRight).classList.add(animRight);
            }
        };
        window.addEventListener("scroll", func);
        return () => {
            window.removeEventListener("scroll", func);
        };
    });
};
export { useAnim };
