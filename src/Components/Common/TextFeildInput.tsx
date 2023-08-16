import React from "react";
import sendIcon from "../../assets/sendButtonIcon.svg";
type Props = {};

const TextFeildInput = (props: Props) => {
  return (
    <div className="inputBoxAndSend">
      <textarea className="textAreaInput"></textarea>
      <button className="sendButton">
        <img src={sendIcon} />
      </button>
    </div>
  );
};

export default TextFeildInput;
