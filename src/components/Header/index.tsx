import logo from "src/assets/logo.png";
import insta from "src/assets/instaicon.svg";
import { Container } from "./styles";

interface Props {}

function Header({}: Props) {
  return (
    <Container>
      <div className="flex">
        <img className="logo" src={logo} alt="Logo" />
        <p>
          História contada por um gato reflexivo
          <br />
          <br />
          Narrativa digital voltada para crianças e seus cuidadores.
          <br />
          <br />
          Mais informações no nosso{" "}
        </p>
        <a href="https://www.instagram.com/opasseiodejupiter">
          <img className="insta" src={insta} alt="insta logo" />
        </a>
      </div>
    </Container>
  );
}

export default Header;
