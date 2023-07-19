const handleWindowScroll = () => {
    const element = document.getElementById("test");
    let pos = 0;
    window.addEventListener("scroll", () => {
        let currentPosition = window.scrollY;
        if (currentPosition === 0) {
            document.getElementById("scroller").style.overflowY = "hidden";
        }
        pos = currentPosition;
    });
    const observerIn = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio === 1) {
                    document.getElementById("scroller").style.overflowY =
                        "scroll";
                }
                if (entry.isIntersecting && entry.intersectionRatio < 0.1) {
                    console.log("<0.1");
                    document.getElementById("footer").style.zIndex = "100";
                }
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    console.log(">0.1");
                    document.getElementById("footer").style.zIndex = "-10";
                    document.getElementById("box").style.zIndex = "-10";
                }
                if (entry.isIntersecting && entry.intersectionRatio > 0.9) {
                    console.log("0.9");
                    document.getElementById("header").style.zIndex = "-10";
                }
                if (
                    entry.isIntersecting &&
                    entry.intersectionRatio < 0.9 &&
                    entry.intersectionRatio > 0.8
                ) {
                    console.log("0.8");
                    document.getElementById("header").style.zIndex = "100";
                }
            });
        },
        {
            threshold: [0, 0.1, 0.9, 1],
        }
    );
    observerIn.observe(element);
};
export {handleWindowScroll}
