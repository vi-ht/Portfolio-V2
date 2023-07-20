import "./../../../css/font.css";
import "./../../../css/Color.css";
import "./../../../css/layout.css";
import "./../../../css/animate.css";
import "./../../../css/background.css";
const handleChangeTitle = (id) => {
    const element = document.querySelector(".mark-title").firstElementChild;
    switch (id) {
        case "about-vi":
            element.innerHTML = "About ";
            const highLight = document.createElement("span");
            highLight.innerText = "Vi";
            highLight.style.color = "#FB797F";
            highLight.style.fontWeight = "700";
            element.appendChild(highLight);
            break;
        case "edu":
            element.innerHTML = "Education";
            break;
        case "exp":
            element.innerHTML = "Experience";
            break;
        case "skill":
            element.innerHTML = "Skill";
            break;
        case "tech":
            element.innerHTML = "Technical";
            break;
        default:
            break;
    }
};

const handleHover = (currentId) => {
    const elementList = document.querySelectorAll(".mark-outside");
    elementList.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.firstChild.classList.length >= 2 &&
                handleChangeTitle(
                    element.firstChild.classList[0] === "mark"
                        ? element.firstChild.classList[1]
                        : element.firstChild.classList[0]
                );
        });
        element.addEventListener("mouseout", () => {
            handleChangeTitle(currentId);
        });
        element.addEventListener("click", () => {
            const targetId =
                element.firstChild.classList[0] === "mark"
                    ? element.firstChild.classList[1]
                    : element.firstChild.classList[0];
            document
                .getElementById(targetId)
                .scrollIntoView({ behavior: "smooth" });
            handleChangeTitle(targetId);
            currentId = targetId;
        });
    });
};

const handleScroll = () => {
    let currentId = "about-vi";
    handleHover(currentId);
    const clear = () => {
        document.querySelectorAll(".mark").forEach((mark) => {
            mark.style.backgroundColor = "#7D7D7D";
            mark.style.height = "40px";
            mark.style.opacity = "0.5";
            mark.parentElement.style.height = "40px";
        });
    };
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    clear();
                    handleChangeTitle(entry.target.id);
                    currentId = entry.target.id;
                    document.getElementsByClassName(
                        entry.target.id
                    )[0].style.backgroundColor = "#FB797F";
                    document.getElementsByClassName(
                        entry.target.id
                    )[0].style.height = "60px";
                    document.getElementsByClassName(
                        entry.target.id
                    )[0].parentElement.style.height = "60px";
                    document.getElementsByClassName(
                        entry.target.id
                    )[0].style.opacity = "1";
                }
            });
        },
        {
            root: document.getElementById("scroller"),
            threshold: [0.9],
        }
    );
    const scrollerChildList = document.querySelectorAll(".scroller-child");
    scrollerChildList.forEach((scrollerChild) =>
        observer.observe(scrollerChild)
    );
};
export { handleScroll };
