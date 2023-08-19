import React, { useState } from "react";
import UserCardWithLastMessageCard, {
  UserCardWithLastMessageCardType,
} from "./UserCardWithLastMessageCard";
import SearchField from "../Common/SearchField";

type Props = {
  userDetailMsgDetails: UserCardWithLastMessageCardType[];
  setUserSelected: React.SetStateAction<any>;
  messageCorrespondingUser: any;
};

const ListOfUser = (props: Props) => {
  const { userDetailMsgDetails, setUserSelected, messageCorrespondingUser } =
    props;
  const [userDetailsData, setUserDetailsData] = useState(userDetailMsgDetails);
  // const [searchText, setSearchText] = useState("");
  const resetUserDetails = () => {
    setUserDetailsData(userDetailMsgDetails);
  };
  // const filterResult = (originalArray) => {
  //   const filteredResult = prevData.filter((userData) => {
  //     return userData.name.indexOf(value) > -1;
  //   });
  // };
  const searchInMessageFunc = (value) => {
    const listOfUserId = Object.keys(messageCorrespondingUser);
    const matchedUserId = [];
    listOfUserId.map((userId) => {
      const messages = messageCorrespondingUser?.[userId]?.messages ?? [];
      console.log(messages, "messages");
      const searchMessagesList = [...messages];
      messages.map((message) => {
        searchMessagesList.push(...(message?.replies ?? []));
      });
      const result = searchMessagesList.filter((msg) => {
        return msg?.msgTxt?.indexOf(value) > -1;
      });
      if (result.length > 0) {
        matchedUserId.push(parseInt(userId));
      }
    });
    return matchedUserId;
  };
  const onSearchHandler = (e) => {
    const value = e?.target?.value;
    // setSearchText(value);
    if (value == "") resetUserDetails();
    else {
      setUserDetailsData((prevData) => {
        const userIdForMatchedResult = searchInMessageFunc(value);
        const filteredResult = prevData.filter((userData) => {
          return (
            userData.name.indexOf(value) > -1 ||
            userIdForMatchedResult.includes(userData.userId)
          );
        });
        return filteredResult;
      });
    }
  };
  return (
    <aside className="userDetailBox">
      <SearchField onChange={onSearchHandler} />
      {userDetailsData.map((userData) => {
        return (
          <UserCardWithLastMessageCard
            key={userData?.userId}
            name={userData?.name}
            lastMsg={userData?.lastMsg}
            lastMsgSentDate={userData?.lastMsgSentDate}
            onClick={() => {
              setUserSelected?.(userData?.userId);
            }}
            userId={0}
          />
        );
      })}
    </aside>
  );
};

export default ListOfUser;
