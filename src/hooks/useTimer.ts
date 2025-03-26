import dayjs from "dayjs";
import { useEffect, useState } from "react"

export const useTimer = (target: string) => {

    const[seconds, setSeconds] = useState(0);
    const[minutes, setMinutes] = useState(0);
    const[hours, setHours] = useState(0);
    const[days, setDays] = useState(0);

    useEffect(() => {
        
        const interval = setInterval(() => {

            const now = dayjs();
            const targetDate = dayjs(target);

            const seconds = now.diff(targetDate, "second");
            const minutes = now.diff(targetDate, "minute");
            const hours = now.diff(targetDate, "hour");
            const days = now.diff(targetDate, "day");

            setSeconds(seconds);
            setMinutes(minutes);
            setHours(hours);
            setDays(days);

        }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [target])

    return { seconds, minutes, hours, days };

}