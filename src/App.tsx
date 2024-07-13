import { Counter } from "./Counter";
import "./styles.css";
import LOGO from "../public/react.svg";

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <img src={LOGO} alt={"react-logo"} width={60} height={60} />
      <Counter />
    </>
  );
};
