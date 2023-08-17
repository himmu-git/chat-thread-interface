import React from "react";

type Props = {
  isSent?: boolean;
};

const Message = (props: Props) => {
  const { isSent = false } = props;
  return (
    <div className={isSent ? "msgSent" : ""}>
      <div className="message">
        <span>This is Test Message</span>
        <div className="timeStatusBox">
          <span>12:00AM</span>
          <span className="status">sent</span>
        </div>
      </div>
      <div className="moreOption"></div>
    </div>
  );
};

export default Message;
