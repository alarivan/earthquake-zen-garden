import React, { useEffect } from "react";
import { Profile as IProfile } from "../fetch/data";
import styles from "./Profile.module.css";
import FlexRow from "../components/FlexRow";

interface Props {
  profile: IProfile;
  setPageTitle: (title: string) => void;
}

const Profile: React.FC<Props> = ({ profile, setPageTitle }) => {
  useEffect(() => {
    setPageTitle("Profile");
  }, [setPageTitle]);

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img
          className={styles.avatarImg}
          src={profile.avatarImage}
          alt="Avatar"
        />
      </div>
      <div className={styles.info}>
        <FlexRow title="first name" value={profile.firstName} />
        <FlexRow title="last name" value={profile.lastName} />
        <FlexRow title="phone" value={profile.phone} />
        <FlexRow title="email" value={profile.email} />
        <FlexRow title="bio" value={profile.bio} />
      </div>
    </div>
  );
};

export default Profile;
