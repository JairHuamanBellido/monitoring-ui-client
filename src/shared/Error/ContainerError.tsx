import { HttpErrorMessageUIAdapter } from "core/adapter/HttpErrorMessageAdapter";
import { HttpErrorType } from "core/enums/HttpErrorEnum";
import Flex from "shared/Flex/Flex";
import "./index.scss";
interface IProps {
  codeError: HttpErrorType | undefined;
}
export default function ContainerError(props: IProps) {
  return (
    <Flex
      width="100%"
      padding="16px"
      className="container-error rounded"
      margin="24px 0px"
      justifyContent="center"
    >
      <p>{HttpErrorMessageUIAdapter.parse(props.codeError)}</p>
    </Flex>
  );
}
