import React, { useEffect, useState } from 'react'

export default function Timer() {
    let [time, setTime] = useState(0);
    useEffect (() => {
        let time2 = setInterval(() => {
            setTime(prev => prev +1);
        },1000);
        return () => {
            clearInterval(time2)
        }
    })
  return (
    <div>
        <h2>Bài 5</h2>
        <h3>Time: {time}</h3>
    </div>
  )
}
