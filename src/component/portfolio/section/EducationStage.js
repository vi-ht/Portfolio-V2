//import css
import "./../../../css/layout.css";
import "./../../../css/font.css";
import "./../../../css/scroll.css";
import "./../../../css/background.css";
import "./../../../css/portfolio-anim.css";
//inport iconify
import { Icon } from "@iconify/react";
import { Text, Box } from "@chakra-ui/react";
export default function EducationStage({
    children,
    des,
    name,
    h,
    date,
    isExp,
}) {
    return (
        <div className="edu-stage">
            <div className="stage-bar">
                <div className="stage-bar-circle"></div>
                <div className="stage-bar-line" style={{ height: h }}></div>
            </div>
            <div className="edu-icon">
                <Icon
                    icon={!isExp ? "fa6-solid:graduation-cap" : "uis:bag"}
                    color="white"
                    width="24"
                    height="25"
                />
            </div>
            <div className="stage-content">
                <div className="stage-title">
                    <Text className="qs-b stage-title-text" fontSize="20px">
                        {name.toUpperCase()}{" "}
                    </Text>
                    <div className="stage-date">
                        <Text className="qs-b  main-color" fontSize="14px">
                            {date}
                        </Text>
                    </div>
                </div>
                <Text className="qs-r stage-text" fontSize="16px">
                    {des}
                </Text>
                <div className="stage-content-line"></div>
                {children}
            </div>
        </div>
    );
}
