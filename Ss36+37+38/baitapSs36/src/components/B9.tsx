import { useEffect, useState } from 'react'

export default function B9() {
    const [time, setTime] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [time]);
  return (
    <div>
        <p>Thời gian đã trôi qua: {time} giây</p>
    </div>
  )
}
