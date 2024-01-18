import React from "react";
import Friend from "./Friend";

const FriendsList = ({ data, onSelect, selectFriend }) => {
  return (
    <div>
      <ul>
        {data.map((friend) => (
          <Friend
            key={friend.id}
            data={friend}
            onSelect={onSelect}
            selectFriend={selectFriend}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
