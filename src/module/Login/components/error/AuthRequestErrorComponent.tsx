import { Flex } from "shared";
import "./index.scss"
interface IProps {
  message: string;
}
export default function AuthRequestErrorComponent(props: IProps) {
  return (
    <Flex
      width="100%"
      padding="16px"
      className="error-container-auth rounded"
      margin="24px 0px"
      justifyContent="center"
    >
      <p>{props.message}</p>
    </Flex>
  );
}
