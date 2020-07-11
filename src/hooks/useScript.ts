import { useEffect } from "react";

const useScript = (url: void) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;