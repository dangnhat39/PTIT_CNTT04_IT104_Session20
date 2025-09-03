import React, { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    console.log("Đã re-render lần đầu");
  }, []);

  return (
    <div>
      <h2>Bài 3</h2>
      <h3>Chào mừng bạn dến với ứng dungk của chúng tôi</h3>
    </div>
  );
}