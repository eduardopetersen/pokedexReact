import { Nav, CustomLink } from "./NavBar.style";

type NavBarProps = {
    hasGoBack?: boolean; //? = opcional
};

function NavBar(props: NavBarProps) {
    return (
        <Nav className="nav">
            <CustomLink to="/" fontSize={24} lineHeight={31} color="#17171b" className="brand">
                Pokédex
            </CustomLink>
            {props.hasGoBack && (
                <CustomLink to="/" fontSize={16} lineHeight={21} color="#747476"></CustomLink>
            )}
        </Nav>
    )
}

export default NavBar;