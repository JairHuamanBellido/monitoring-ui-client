import Flex from "shared/Flex/Flex";
interface IProps {
  message: string;
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
      <p>{props.message}</p>
    </Flex>
  );
}
