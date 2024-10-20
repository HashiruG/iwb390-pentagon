import style from "./css/Logo.module.css";
import Logo from "./image/logo.png";

export default function Logoo() {
  return (
    <div>
      <img className={style.logo} name="logo" src={Logo} alt="Logo" />
    </div>
  );
}
