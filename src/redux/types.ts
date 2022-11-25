import { User } from "../types/types";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export interface IStore {
  user: User
  socket: {
    socket:  Socket<DefaultEventsMap, DefaultEventsMap>
  }
}