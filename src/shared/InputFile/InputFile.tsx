import "./index.scss";

interface IProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}
export default function InputFile(props: IProps) {
  return (
    <>
      <input
        onChange={props.onChange}
        type="file"
        id="filename"
        name="filename"
        hidden
      />
      <label className="label-file rounded" htmlFor="filename">
        Subir imagen
      </label>
    </>
  );
}
