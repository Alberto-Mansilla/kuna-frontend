import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import clsx from "clsx";

const NavBarMenu = () => {
  return (
    <div
      className={clsx(`main-menu`)}
    >
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
            {/* TODO: Will refactor this later in a new component */}
            <Image src="/img/logo_cart.png" alt="" width="40px" height="40px" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarMenu;
