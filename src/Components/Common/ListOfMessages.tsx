import React from "react";
import Message from "./Message";

type Props = {};

const ListOfMessages = (props: Props) => {
  return (
    <div className="listOfMsgBox">
      <Message />
      <Message isSent={true} />
      <Message />
      <Message />
    </div>
  );
};

export default ListOfMessages;
