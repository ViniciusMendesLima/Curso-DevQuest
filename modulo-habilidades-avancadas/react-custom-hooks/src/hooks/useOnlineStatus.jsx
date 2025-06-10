import { useEffect, useState } from "react";

export function useOnlineStatus(){
      const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnLine() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnLine);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnLine);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}