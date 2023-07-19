import { useLayoutEffect } from "react";
const useTitle = (content) => {
    useLayoutEffect(() => {
        document.title = content;
    });
};
export { useTitle };
