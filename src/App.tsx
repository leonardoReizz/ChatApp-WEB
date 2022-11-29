import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSocket } from "./hooks/useSocket";
import { IStore } from "./redux/types";
import AppRoutes from "./routes";

function App() {
  const reduxSocket = useSelector((state: IStore) => state.ioSocket);
  const { ioSocket } = useSocket();
  const { user } = useSelector((state: IStore) => state.user);

  useEffect(() => {
    if (user.isLogged) {
      const filter = reduxSocket.usersOnline.filter(
        (userOnline) => userOnline.email === user.email
      );
      if (filter.length === 0) {
        ioSocket.emit("online", user.email);
      }
    }
  }, [user]);

  return <AppRoutes />;
}

export default App;
