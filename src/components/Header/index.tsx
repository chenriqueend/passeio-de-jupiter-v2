import logo from "src/assets/logo.png";
import { Container } from "./styles";

interface Props {}

function Header({}: Props) {
  return (
    <Container>
      <img src={logo} alt="Logo" />
    </Container>
  );
}

export default Header;
