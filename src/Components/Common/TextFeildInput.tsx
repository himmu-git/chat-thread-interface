import React, { useState } from "react";
import sendIcon from "../../assets/sendButtonIcon.svg";
type Props = {};

const TextFeildInput = (props: Props) => {
  const [msgValue, setMsgValue] = useState();
  return (
    <div className="inputBoxAndSend">
      <textarea
        onChange={(e) => {
          setMsgValue(e.target.value);
        }}
        className="textAreaInput"
      ></textarea>
      <button onClick={() => {}} className="sendButton">
        <img src={sendIcon} />
      </button>
    </div>
  );
};

export default TextFeildInput;
