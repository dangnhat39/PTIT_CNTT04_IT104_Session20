import React, { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  let handleSubmit= (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  }

  let handleNameChange=(e: React.ChangeEvent<HTMLInputElement>)=> {
    setName(e.target.value);
  }

  let handleEmailChange= (e: React.ChangeEvent<HTMLInputElement>)=> {
    setEmail(e.target.value);
  }
  return (
    <div>
      <h2>Bài 2</h2>
      <h3>Thông tin người dùng</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tên"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Nhập email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <button>Gửi</button>
      </form>

      {submitted && (
        <>
          <p>Tên: {name}</p>
          <p>Email: {email}</p>
        </>
      )}
    </div>
  );
}
