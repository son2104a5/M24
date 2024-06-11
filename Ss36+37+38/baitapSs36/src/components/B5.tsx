import { useEffect, useState } from 'react'

export default function B5() {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);
    
        return () => {
        clearInterval(intervalId);
        };
    }, []);
    
    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time;
    };
    
    const hours = formatTime(currentTime.getHours());
    const minutes = formatTime(currentTime.getMinutes());
    const seconds = formatTime(currentTime.getSeconds());
    
    return (
        <div className="clock">
        Thời gian hiện tại: {hours} : {minutes} : {seconds}
        </div>
    );
}
