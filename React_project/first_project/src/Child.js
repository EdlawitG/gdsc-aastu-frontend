import React from "react";

function Child() {
  const user = { name: "Edlawit", email: "eg@gmail.com", password: "123" };
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.password}</h1>
    </div>
  );
}

export default Child;
