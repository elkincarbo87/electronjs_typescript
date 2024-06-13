import React, { useState } from "react";

export function MyComponent() {
  const [myState, setMyState] = useState(0);

  return (
    <>
      <div>this is the component using useState hook</div>
      <button onClick={() => setMyState(myState + 1)}>
        click me to increase
      </button>
      <div>clicks: {myState}</div>
    </>
  );
}
