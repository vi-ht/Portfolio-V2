//import css
import "./../../../css/layout.css";
import "./../../../css/font.css";
import "./../../../css/scroll.css";
import "./../../../css/background.css";
import "./../../../css/portfolio-anim.css";
//inport iconify
import { Icon } from "@iconify/react";
import { Text, Box } from "@chakra-ui/react";
export default function ProgressBar({ title, percent }) {
    return (
        <div className="progress-bar">
            <Text className="progress-bar-title qs-m" fontSize="16px" mb="7px">
                {title}
            </Text>
            <div className="progress-bar-outside">
                <div className="progress-bar-inside" style={{width: percent}}></div>
            </div>
        </div>
    );
}
