//import css
import "./../../../css/layout.css";
import "./../../../css/font.css";
import "./../../../css/background.css";
//inport iconify
import { Icon } from "@iconify/react";
import { Text } from "@chakra-ui/react";
export default function TechBox({ title, icon }) {
    return (
        <div className="tech-box">
            <div className="tech-box-icon">
                <Icon icon={icon} width="37" height="37" />
            </div>
            <Text className="progress-bar-title qs-smb" fontSize="16px">
                {title}
            </Text>
        </div>
    );
}
