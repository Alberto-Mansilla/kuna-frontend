import Link from "next/link";
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
              Home
            </Link>
          </li>
          <li>
            {/* TODO: Put catetgories in dropbar */}
            <Link href={"/"} passHref>
              Catalogo 
            </Link>
            <i className="fa fa-angle-down" />
          </li>
          <li>
            <Link href={"/"} passHref>
              {/* TODO: Put accessories in dropbar */}
              Accessorios
            </Link>
            <i className="fa fa-angle-down" />
          </li>
          <li>
            <Link href={"/"} passHref>
              Sale
            </Link>
          </li>
          <li>
            <Link href={"/"} passHref>
              Conocenos
            </Link>
          </li>
          <li>
            <Link href={"/contact"} passHref>
              Contactenos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarMenu;
