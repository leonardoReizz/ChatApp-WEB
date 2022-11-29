import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import nullPicture from "../../../assets/images/nullProfilePicture.png";

import User from "../../../components/User";
import { IStore } from "../../../redux/types";
import { useFriends } from "../../../hooks/useFriends";

import * as types from "../types";
import { CurrentUser, Friends } from "./types";

import styles from "./styles.module.sass";

interface ListProps {
  handleOpenChat(user: Omit<Friends, "token">): void;
  usersOnline: types.UsersOnline[];
}

export function List({ handleOpenChat, usersOnline }: ListProps) {
  const [currentUser, setCurrentUser] = useState<CurrentUser>();
  const { user } = useSelector((state: IStore) => state.user);

  const myFriends = useFriends();

  function handleOpenImageProfile() {
    throw "not implemented";
  }

  return (
    <div className={styles.list}>
      <header>
        <div className={styles.profile}>
          <div className={styles.img}>
            <img
              src={
                currentUser?.profilePicture
                  ? currentUser.profilePicture
                  : nullPicture
              }
              alt="imagem de perfil"
            />
          </div>
          <div>
            <h4>{user.fullName}</h4>
            <Link to="/profile">Minha Conta</Link>
          </div>
        </div>
      </header>
      <main>
        {myFriends.map((friend) => (
          <User
            key={friend._id}
            user={friend}
            onClick={() => handleOpenChat(friend)}
            onClickImage={handleOpenImageProfile}
            online={
              usersOnline.filter((user) => user.email === friend.email).length >
              0
            }
          />
        ))}
      </main>
    </div>
  );
}
