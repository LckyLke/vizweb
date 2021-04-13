import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const notFound = () => {
  const router = useRouter();
  const [time, setTime] = useState(5.0);
  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime((prev) => prev - 0.1), 100);
    }
    if (time === 5) {
      setTimeout(() => {
        router.back();
      }, 5000);
    }
  });
  

  return (
    <div className="flex flex-col justify-center h-full items-center">
      <p className="text-9xl">
        ? - <span className="text-RED">404</span>
      </p>
      <h1 className="text-7xl">URL not found:c</h1>
      <p className="">
        This URL does not exist....if you think it should => contact us:).
      </p>
      <p className="text-lg">
        You will be redirected in{" "}
        <span className="text-RED">{parseFloat(time.toFixed(3))} </span>Seconds!
      </p>
    </div>
  );
};

export default notFound;
