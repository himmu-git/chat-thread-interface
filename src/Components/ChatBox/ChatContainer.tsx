import React, { useEffect, useState } from "react";
import ThreadContainer from "./ThreadContainer";
import TextFeildInput from "../Common/TextFeildInput";
import ListOfMessages from "../Common/ListOfMessages";

type Props = {
  messageCorrespondingUser: any;
};

const ChatContainer = (props: Props) => {
  const { messageCorrespondingUser } = props;
  const [messageDataThread, setMessageDataThread] = useState({});
  useEffect(() => {
    setMessageDataThread({});
  }, [messageCorrespondingUser]);
  console.log(messageDataThread, "Set");
  return (
    <>
      <section className="chatContainer">
        <ListOfMessages
          messages={messageCorrespondingUser.messages}
          setMessageDataThread={setMessageDataThread}
        />
        <TextFeildInput onSendClick={(value) => {
          
        }} />
      </section>
      {Object.keys(messageDataThread).length > 0 && (
        <ThreadContainer messageDataThread={messageDataThread} />
      )}
    </>
  );
};

export default ChatContainer;
