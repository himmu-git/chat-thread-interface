import React from "react";

type Props = {
  isSent?: boolean;
};

const Message = (props: Props) => {
  const { message = {}, onReplyClick, isThreadMessage = false } = props;
  const { replies } = message ?? {};
  console.log(
    replies?.length > 0,
    isThreadMessage,
    message?.msgTxt,
    replies?.length > 0 && !isThreadMessage
  );
  if (!message) return null;
  return (
    <div>
      <div
        className={`${message?.isSent ? "msgSent" : "msgBox"} ${
          replies?.length > 0 && !isThreadMessage ? "showReplies" : ""
        }`}
      >
        <div className="message">
          <span>{message?.msgTxt}</span>
          <div className="timeStatusBox">
            <span>{message?.msgTime?.toDateString()}</span>
            <span className="status">{message?.msgStatus}</span>
          </div>
        </div>
        {replies?.length > 0 && !isThreadMessage && (
          <div className="replies" onClick={onReplyClick}>
            {replies.length} reply
          </div>
        )}
        <div className="moreOption"></div>
      </div>
    </div>
  );
};

export default Message;
