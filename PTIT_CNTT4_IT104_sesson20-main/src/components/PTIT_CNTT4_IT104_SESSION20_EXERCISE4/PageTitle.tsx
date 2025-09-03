import React, { useEffect, useState } from 'react'

export default function PageTitle() {
    let [title, setTitle] = useState("");
    let handleChange=(e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    useEffect(() => {
        document.title = title
    })
  return (
    <div>
        <h2>Bài 4</h2>
        <h3>Chào mừng bạn đến với trang của chúng tôi</h3>
        <input type="text" placeholder='Nhập tên của bạn' onChange={handleChange}/>
        <p>Tiêu đề trang sẽ thay đổi khi bạn nhập vào trường trêb</p>
    </div>
  )
}
