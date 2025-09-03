import React, { useReducer, useState } from "react";

export default function UserForm() {
  let initial = { name: "", email: "" };
  let reducer = (state: any, action: any) => {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };
  let [state, dispatch] = useReducer(reducer, initial);
  let [submitted, setSubmitted] = useState(false);
  let [result, setResult] = useState(initial);

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(state);
    setSubmitted(true);
  };

  let handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "NAME", payload: e.target.value });
  };
  let handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "EMAIL", payload: e.target.value });
  };

  return (
    <div>
      <h2>Bài 8</h2>
      <form onSubmit={handleSubmit}>
        <label>Tên:</label><br />
        <input type="text" value={state.name} onChange={handleNameChange} /><br />
        <label>Email:</label><br />
        <input type="text" value={state.email} onChange={handleEmailChange} /><br />
        <button type="submit">Gửi</button>
      </form>
      {submitted && (
        <div>
          <h3>Thông tin người dùng:</h3>
          <p>Tên: {result.name || "(Chưa nhập)"}</p>
          <p>Email: {result.email || "(Chưa nhập)"}</p>
        </div>
      )}
    </div>
  );
}
