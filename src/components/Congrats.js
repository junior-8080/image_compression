import React from "react";
import Button from "./Button";

export default function Congrats({ transformed }) {
  return (
    <div className="px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
        <span className="block xl:inline">Congratulations!</span>
      </h1>
      <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
        Your files were successfully compressed and they are ready to be
        downloaded.
      </p>
      <div className="flex items-center content-center justify-center w-full h-full">
        <Button
          kind="secondary"
          className="mt-8 mx-3 rounded-lg py-2 px-6 font-semibold"
          onClick={() => {
            window.open(transformed?.file, "_blank");
          }}
        >
          Download
        </Button>
        <Button
          kind="primary"
          className="mt-8 mx-3 rounded-lg py-2 px-6 font-semibold"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
