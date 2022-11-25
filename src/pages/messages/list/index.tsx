/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {CurrentUser, Friend} from './types';

import nullPicture from '../../../assets/images/nullProfilePicture.png';

import styles from './styles.module.sass';
import User from '../../../components/User';
import { UserType } from '../types';
import { Link } from 'react-router-dom';
import APIFriends from '../../../api/friends';
import axios from "axios";
import {api} from "../../../utils/api";

interface ListProps {
  handleOpenChat(user: Omit<UserType, 'token'>): void;
}

const List = ({ handleOpenChat }: ListProps): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>();
  const [myFriends, setMyFriends] = useState<Omit<UserType, 'token'>[]>([]);
  const { user }  = useSelector((state: any) => state);

  const fetchUserById = (id: string) => {
    return axios
      .get(`${api}/user/id/${id}`, {
        headers: {
          authorization: user.token,
        },
      })
      .then((result) => {
        return {
          status: result.status,
          data: result.data,
        };
      })
      .catch((error) => {
        console.log(error, ' ERROR GET USER BY ID');
        return {
          status: error.status,
          data: {
            msg: error.response.msg
          },
        };
      });
  }
  useEffect(() => {
    const fetchFriends = async () => {
      const list = await APIFriends.list({userID: user.id, token: user.token})
      const listFriends = await Promise.all(
          list.data.msg.map(async (friend: Friend) => {
            let getUser;
            if (friend.idUserOne !== user.id) {
              getUser = await fetchUserById(friend.idUserOne);
            } else {
              getUser = await fetchUserById(friend.idUserTwo);
            }
            return getUser.data.msg[0];
          })
        )
      setMyFriends(listFriends)
      }

    fetchFriends();
  }, []);

  const handleOpenImageProfile = () => {

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
          />
        ))}
      </main>
    </div>
  );
};

export default List;
