import React, { useState, useRef, useEffect } from "react";

export default function Modal() {
  let [isOpen, setIsOpen] = useState(false);
  let isRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isOpen) {
      isRef.current?.focus();
    }
  }, [isOpen]);
  let handleOpen = () => {
    setIsOpen(true);
  };
  let handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <h2>Bài 6</h2>
      <h3>Ứng dụng React với Modal và Focus Input</h3>
      <button onClick={handleOpen}>Mở Modal</button>
      {isOpen && (
        <div>
          <h1>Đăng nhập</h1>
          <input ref={isRef} type="text" placeholder="Nhập tên người dùng" />
          <br />
          <button onClick={handleClose}>Đóng</button>
        </div>
      )}
    </div>
  );
}
