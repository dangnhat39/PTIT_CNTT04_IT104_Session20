import React, { useReducer } from "react";

export default function Counter() {
  let inital = {
    count: 0,
  };
  let countReducer = (state1: any, action: any) => {
    switch (action.type) {
      case "Click_Cong":
        return { count: state1.count + action.payload };
      case "Click_Tru":
        return { count: state1.count - action.payload };
    }
  };
  let [state, dispatch] = useReducer(countReducer, inital); 
  let handleClick = () => {
    dispatch({ type: "Click_Cong", payload: 1 });
  };
  let handleClickTru = () => {
    dispatch({ type: "Click_Tru", payload: 1 });
  };
  return (
    <div>
      <h2>Bài 7</h2>
      <h2>Số đếm: {state?.count} </h2>
      <button onClick={handleClick}>Tăng</button>
      <button onClick={handleClickTru}>Giảm</button>
    </div>
  );
}
