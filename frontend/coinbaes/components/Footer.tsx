import { IconButton } from "@chakra-ui/react";
import styles from "@styles/Footer.module.css";
import { FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.socials}>
        {`Wagner's Nightmare`}
        <IconButton
          aria-label="Search database"
          colorScheme="gray"
          variant="ghost"
          icon={<FaTwitter />}
        />
        <IconButton
          aria-label="Search database"
          colorScheme="gray"
          variant="ghost"
          icon={<FaTelegram />}
        />
      </div>
      Made by BRDG LABS
    </footer>
  );
};

export default Footer;
