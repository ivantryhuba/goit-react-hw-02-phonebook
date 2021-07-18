import React from "react";

import { v4 as uuidv4 } from "uuid";

export const Filter = ({ value, onChange }) => {
  const searchId = uuidv4();
  return (
    <div>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input id={searchId} type="text" value={value} onChange={onChange} />
    </div>
  );
};
