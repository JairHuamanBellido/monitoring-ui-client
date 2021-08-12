import "./index.scss";

export default function PulseLoader() {
  return (
    <div data-testid="loader-pulse" className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
}
