import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import APIFriends from "../api/friends";
import APIUser from "../api/user";
import { Friend, Friends } from "../pages/messages/list/types";
import { IStore } from "../redux/types";

export function useFriends(){
  const [myFriends, setMyFriends] = useState<Omit<Friends, 'token'>[]>([]);
  const { user }  = useSelector((state: IStore) => state.user);
  
  useEffect(() => {
    async function fetchFriends(){
      const list = await APIFriends.list({userID: user.id, token: user.token})
      const listFriends = await Promise.all(
          list.data.msg.map(async (friend: Friend) => {
            let getUser;
            if (friend.idUserOne !== user.id) {
              getUser = await APIUser.getUserById({id: friend.idUserOne, token :user.token});
            } else {
              getUser = await APIUser.getUserById({id: friend.idUserTwo, token :user.token});
            }
            return getUser.data.msg[0];
          })
        )
      setMyFriends(listFriends)
      }

    fetchFriends();
  }, []);

  return myFriends;
}
