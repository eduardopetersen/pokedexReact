//import "./Badge.css";
import { Container } from "./Badge.style"; // vai importar o estilo via styled components
type BadgeProps = {
    name: string
}

function Badge(props: BadgeProps) {
    return (
        <Container className={"type--" + props.name.toLowerCase()}>
            {props.name}
        </Container>
    );

}

export default Badge;