
import {  Image } from "theme-ui";
import { Link } from "../../link";


export default function Logo({ isSticky, light, dark, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {light ? (
        <Image src={"/images/rgslogo.png"} alt="startup landing logo"  width={120} height={120}/>
      ) : dark ? (
        <Image src={"/images/rgslogo.png"} alt="startup landing logo"  width={120} height={120}/>
      ) : (
        <Image
          src={isSticky ? "/images/rgslogo.png" : "/images/rgslogo.png"}
          alt="startup landing logo" width={120} height={120}
        />
      )}
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    img: {
      maxWidth: [128, null, "100%"],
    },
  },
};
