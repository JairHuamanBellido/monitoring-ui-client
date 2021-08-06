interface IProps {
  placeholder: string;
  className?: string;
  name: string;
  value: string | number;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  type?: string;
  required?:boolean;
}

export default function Input(props: IProps) {
  const { name, onChange, placeholder, value, className, type,required } = props;
  return (
    <>
      <input
        style={{ width: "360px" }}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        name={name}
        className={className || undefined}
        type={type}
        required={required || false}
      />
    </>
  );
}
