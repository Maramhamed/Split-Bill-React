import { useState } from "react";
import Button from "./components/Button.jsx";
import FormAddFriend from "./components/FormAddFriend.jsx";
import FriendsList from "./components/FriendsList.jsx";
import FormSplitBill from "./components/FormSplitBill.jsx";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [newFriends, setNewFriends] = useState(initialFriends);
  const [showFormAddFriend, setShowFormAddFriend] = useState(false);
  const [selectFriend, setSelectFriend] = useState(6);

  function handleShowFormAddFriend() {
    setShowFormAddFriend(!showFormAddFriend);
  }
  function handleAddFriends(friend) {
    setNewFriends((friends) => [...friends, friend]);
    setShowFormAddFriend(false);
  }
  function handleSelect(friend) {
    // setSelectFriend(friend);

    setSelectFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowFormAddFriend(false);
  }

  function handleSplitBill(value) {
    setNewFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectFriend(null);
  }
  return (
    <main className="app">
      <aside className="sidebar">
        <FriendsList
          data={newFriends}
          onSelect={handleSelect}
          selectFriend={selectFriend}
        />
        {showFormAddFriend && <FormAddFriend onAddFriend={handleAddFriends} />}
        <Button onClick={handleShowFormAddFriend}>
          {showFormAddFriend ? "Close" : "Add New Friend"}
        </Button>
      </aside>
      {selectFriend && (
        <FormSplitBill
          selectFriend={selectFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </main>
  );
}

export default App;
