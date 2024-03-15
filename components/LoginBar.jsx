import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const LoginBar = ({ toggleCart }) => {
  return (
    <div className={clsx(`main-menu`)}>
      <nav>
        <ul>
          <li>
            <Link href={"/"} passHref>
              Sign in
            </Link>
          </li>
          <li>
            <Link href={"/"} passHref>
              Search 
            </Link>
          </li>
          <li>
            <button onClick={toggleCart}>
              <Image src="/img/logo_cart.png" alt="Cart" width="40" height="40" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LoginBar;
