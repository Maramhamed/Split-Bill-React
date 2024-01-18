import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paiedByUser, setPaiedByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("");
  const PaidByFriend = bill ? bill - paiedByUser : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paiedByUser) return;
    onSplitBill(whoIsPaying === "user" ? PaidByFriend : -paiedByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split a bill with {selectFriend.name}</h2>
      <label>💸Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paiedByUser}
        onChange={(e) =>
          setPaiedByUser(
            Number(e.target.value) > bill ? paiedByUser : Number(e.target.value)
          )
        }
      />

      <label>👫 {selectFriend.name}'s expense</label>
      <input type="text" disabled value={PaidByFriend} />

      <label>🤑 Who is paying the bill</label>

      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
