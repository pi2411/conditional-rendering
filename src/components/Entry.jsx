import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

export default Entry;
