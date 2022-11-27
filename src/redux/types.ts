import { ISocketUser, User } from "../types/types";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export interface IStore {
  user: {
    user: User,
    _persist: any
  }
  ioSocket: {
    ioSocket:  Socket<DefaultEventsMap, DefaultEventsMap>
    usersOnline: ISocketUser[]
  }
  message: {
    receivedMessage: boolean
  }
}