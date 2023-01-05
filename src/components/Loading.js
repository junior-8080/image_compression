import React, { useState, useEffect } from "react";

export default function Loading({ success, files }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!success) {
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 90 ? 90 : prevProgress + 1
        );
      }, 20);
      return () => {
        clearInterval(interval);
      };
    }
  }, [success]);

  return (
    <div className="flex flex-col items-center content-center justify-center w-full h-full">
      <h2 className="font-bold text-xl">Wait a second...</h2>
      <p className="text-gray-400 text-sm my-4">
        Uploading <span className="text-maroon">{files || 0}</span> files
      </p>
      <div className="w-64 h-3 bg-gray-200 rounded-full mt-4">
        <div
          className="h-full bg-indigo-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
