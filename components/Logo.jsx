import PropTypes from "prop-types";
import clsx from "clsx";
import Link from "next/link";

const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div className={clsx(logoClass)}>
      <Link href={"/"} passHref>
        <img alt="" src={imageUrl} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string
};

export default Logo;
