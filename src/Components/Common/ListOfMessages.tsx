import React from "react";
import Message from "./Message";

type Props = {};

const ListOfMessages = (props: Props) => {
  const { messages = [], setMessageDataThread, isThread = false } = props;
  return (
    <div className="listOfMsgBox">
      {messages.map((message) => {
        return (
          <Message
            key={message.msgId}
            message={message}
            isTheadMessage={isThread}
            onReplyClick={() => {
              setMessageDataThread(message);
            }}
          />
        );
      })}
    </div>
  );
};

export default ListOfMessages;
