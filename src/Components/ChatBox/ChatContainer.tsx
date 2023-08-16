import React from "react";
import ThreadContainer from "./ThreadContainer";
import TextFeildInput from "../Common/TextFeildInput";
import ListOfMessages from "../Common/ListOfMessages";

type Props = {};

const ChatContainer = (props: Props) => {
  return (
    <>
      <section className="chatContainer">
        <ListOfMessages />
        <TextFeildInput />
      </section>
      <ThreadContainer />
    </>
  );
};

export default ChatContainer;
