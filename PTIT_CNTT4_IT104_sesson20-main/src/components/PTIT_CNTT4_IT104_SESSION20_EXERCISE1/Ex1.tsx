import React, { useState } from "react";

export default function Ex1() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Bài 1</h2>
      <h3>Kiểm tra độ dài chuỗi nhập vào</h3>
      <input
        type="text"
        placeholder="Nhập vào đây"
        value={text}
        onChange={handleChange}
      />

      {text.length > 5 && (
        <p style={{ color: "red" }}>Chuỗi nhập vào dài hơn 5 ký tự</p>
      )}
    </div>
  );
}
