import PresentationRouter from "../../Router/PresentationRouter";
import { Flex, Logo } from "../../shared";
import "./index.scss";

export default function PresentationPage() {
  return (
    <Flex width="100vw" className="presentation-container">
      <Flex
        width="30%"
        height="100vh"
        direction="column"
        padding="72px"
        className="left-panel-container"
      >
        <Flex alignItems="center" className="logo-container">
          <Logo />
          <h1>Aprix</h1>
        </Flex>
        <Flex width="100%" className="module-container">
          <PresentationRouter />
        </Flex>
      </Flex>
      <Flex width="70%" height="100vh" className="right-panel-container" />
    </Flex>
  );
}
