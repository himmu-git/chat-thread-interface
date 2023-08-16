import React from "react";
import "../css/ContainerLayout.css";
import ListOfUser from "../ChatBox/ListOfUser";
import ChatContainer from "../ChatBox/ChatContainer";
import ThreadContainer from "../ChatBox/ThreadContainer";

type Props = {};

const ContainerLayout = (props: Props) => {
  return (
    <main className="mainContainer">
      <ListOfUser />
      <ChatContainer />
    </main>
  );
};

export default ContainerLayout;
