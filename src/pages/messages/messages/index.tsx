import {useFormik} from "formik";
import {useEffect} from "react";
import listMessages from "../../../api/messages/listMessages";
import {User} from "../types";
import {useSelector} from "react-redux";
import {IStore} from "../../../redux/types";

interface MessageProps{
  friend: User
}
const Messages = ({friend}: MessageProps): JSX.Element => {
  const { user } = useSelector((state: IStore) => state);


  useEffect(() => {
    const fetchMessages = async () => {
      const data = await listMessages({
        idUser: user.id,
        idUserFriend: friend._id,
        token: user.token,
      })

      console.log(data)
    }
    fetchMessages();
  },[friend])
  return (
    <h2>MINHAS MENSAGENS</h2>
  );
}

export default Messages;