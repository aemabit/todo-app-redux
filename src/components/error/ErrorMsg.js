import React from "react";

export default function ErrorMsg({ error }) {
  return (
    <div className="wrapper-error">
      <p>!{error.msg.error}</p>
    </div>
  );
}
