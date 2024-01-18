// Friend.jsx
import React, { useState } from "react";
import Button from "./Button";

const Friend = ({ data, onSelect, selectFriend }) => {
  const isSelected = selectFriend?.id === data.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>

      {data.balance < 0 && (
        <p className="red">
          You Owe {data.name} ${Math.abs(data.balance)}
        </p>
      )}
      {data.balance > 0 && (
        <p className="green">
          You Owe {data.name} ${Math.abs(data.balance)}
        </p>
      )}
      {data.balance === 0 && <p>You and {data.name} are even</p>}
      <Button onClick={() => onSelect(data)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
