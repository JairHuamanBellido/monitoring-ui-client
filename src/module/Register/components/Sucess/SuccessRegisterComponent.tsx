import { Link } from "react-router-dom";
import { Flex } from "shared";

export default function SuccessRegisterComponent() {
  return (
    <Flex width="100%" direction="column" alignItems="center" className="header">
      <h2>Enhorabuena</h2>
      <p>Su registre se realizado con éxito</p>

      <Link to="/login"> Ingresar</Link>
    </Flex>
  );
}
