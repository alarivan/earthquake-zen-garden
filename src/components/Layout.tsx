import React, { ReactNode, useState } from "react";
import { Site, Profile } from "../fetch/data";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";

interface Props {
  site: Site;
  profile: Profile;
  children: ReactNode;
  pageTitle: string;
}

const Layout: React.FC<Props> = ({ children, site, profile, pageTitle }) => {
  const [showSvgLogo, setShowSvgLogo] = useState<boolean>(true);

  const toggleLogo = () => setShowSvgLogo(!showSvgLogo);

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logoLink}>
            {showSvgLogo ? (
              <Logo />
            ) : (
              <img className={styles.logoImg} src={site.logoImage} alt="Logo" />
            )}
          </Link>
          <h1 onClick={toggleLogo} className={styles.navTitle}>
            {site.title}
          </h1>
          <Link to="/profile">Welcome {profile.firstName}</Link>
        </div>
      </nav>
      <main className={styles.main}>
        <h2 className={styles.pageTitle}>{pageTitle}</h2>
        {children}
      </main>
    </div>
  );
};

export default Layout;
