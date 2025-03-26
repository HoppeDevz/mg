import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const useHeartbeat = (target: string) => {

    const[heartbeat, setHeartbeat] = useState(0);

    useEffect(() => {
        
        const interval = setInterval(() => {

            const now = dayjs();
            const targetDate = dayjs(target);

            const seconds = now.diff(targetDate, "second");
            const heartbeat = Math.ceil(70 * (seconds / 60));

            setHeartbeat(heartbeat);

        }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [target])

    return { heartbeat };

}