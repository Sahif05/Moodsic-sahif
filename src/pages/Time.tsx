"use client"

import { useState, useEffect } from 'react'; 

const timeOptions = {
    timeZone : "America/New_York",
    hour: "numeric",
    minute: "numeric",
} as const;

export default function Time() {
    const [time, setTime] = useState('--:-- --');
    
    useEffect(() => {
        setTime(new Intl.DateTimeFormat(
            "en-US", timeOptions).format(new Date()));
        const interval = setInterval(() => {
            setTime(new Intl.DateTimeFormat(
                "en-US", timeOptions).format(new Date()));
        }, 10_000);
        return () => clearInterval(interval)
    }, []);

    return (
        <>
            <span className="font-bold text-center">
                <span>{time}</span>
            </span>
        </>
    )
}