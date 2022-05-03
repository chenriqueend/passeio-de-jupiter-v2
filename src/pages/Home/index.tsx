import ComicViewer from "react-comic-viewer";

import Header from "src/components/Header";
import page1 from "src/assets/comic-book/1.png";
import page2 from "src/assets/comic-book/2.png";
import page3 from "src/assets/comic-book/3.png";
import page4 from "src/assets/comic-book/4.png";
import page5 from "src/assets/comic-book/5.png";
import page6 from "src/assets/comic-book/6.png";
import { Container } from "./styles";

interface Props {}

function Home({}: Props) {
  return (
    <Container>
      <Header />
      <ComicViewer
        defaultIsSingleView
        pages={[page1, page2, page3, page4, page5, page6]}
        switchingRatio={0.75}
        direction="ltr"
        text={{
          fullScreen: "Tela cheia",
          move: "Mover",
          normal: "Normal",
          expansion: "Expandir",
        }}
      />
    </Container>
  );
}

export default Home;
