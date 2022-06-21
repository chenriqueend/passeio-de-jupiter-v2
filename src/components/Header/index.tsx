import logo from "src/assets/logo.png";
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
          Narrativa digital voltada para crianças e seus cuidadores.
          <br />
          Mais informações no nosso{" "}
          <a href="https://www.instagram.com/opasseiodejupiter">instagram</a>
        </p>
      </div>
    </Container>
  );
}

export default Header;
