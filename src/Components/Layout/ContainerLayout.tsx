import React, { useState } from "react";
import "../css/ContainerLayout.css";
import ListOfUser from "../ChatBox/ListOfUser";
import ChatContainer from "../ChatBox/ChatContainer";
import ThreadContainer from "../ChatBox/ThreadContainer";

type Props = {};
export enum MSG_TYPE {
  SENT = "sent",
  SEEN = "seen",
  DELIVERED = "delivered",
}
const userDetailMsgDetails = [
  {
    userId: 1,
    name: "Himanshu",
    lastMsg: "Hi! How are you ?",
    lastMsgSentDate: new Date(),
  },
  {
    userId: 2,
    name: "Tanay",
    lastMsg: "Hi",
    lastMsgSentDate: new Date(),
  },
  {
    userId: 3,
    name: "You",
    lastMsg: "This is Saved Message",
    lastMsgSentDate: new Date(),
  },
];
const messageCorrespondingUser = {
  1: {
    name: "Himanshu",
    lastMsg: "Hi! How are you ?",
    lastMsgSentDate: new Date(),
    messages: [
      {
        msgId: 11,
        msgTxt: "Hi ",
        msgStatus: MSG_TYPE.SEEN,
        msgTime: new Date(),
        isSent: true,
        replies: [
          {
            msgId: 113,
            msgTxt: "Hi How are You?",
            msgStatus: MSG_TYPE.SEEN,
            msgTime: new Date(),
            isSent: false,
          },
        ],
      },
      {
        msgId: 12,
        msgTxt: "Hey!!! ",
        msgStatus: MSG_TYPE.SENT,
        msgTime: new Date(),
        isSent: false,
        replies: [],
      },
    ],
  },
  2: {
    name: "Tanay",
    lastMsg: "Hello there!",
    lastMsgSentDate: new Date(),
    messages: [
      {
        msgId: 21,
        msgTxt: "Hello",
        msgStatus: MSG_TYPE.SEEN,
        msgTime: new Date(),
        isSent: true,
        replies: [
          {
            msgId: 213,
            msgTxt: "Hey, how's it going?",
            msgStatus: MSG_TYPE.SEEN,
            msgTime: new Date(),
            isSent: false,
          },
        ],
      },
      {
        msgId: 22,
        msgTxt: "Hey, I'm good!",
        msgStatus: MSG_TYPE.SENT,
        msgTime: new Date(),
        isSent: false,
        replies: [],
      },
    ],
  },
  3: {
    name: "Tanay",
    lastMsg: "Hello there!",
    lastMsgSentDate: new Date(),
    messages: [],
  },
  4: {},
};

const ContainerLayout = (props) => {
  const [userSelected, setUserSelected] = useState(1);
  return (
    <main className="mainContainer">
      <ListOfUser
        setUserSelected={setUserSelected}
        userDetailMsgDetails={userDetailMsgDetails}
      />
      <ChatContainer
        // userSelected={userSelected}
        messageCorrespondingUser={messageCorrespondingUser[userSelected]}
      />
    </main>
  );
};

export default ContainerLayout;
