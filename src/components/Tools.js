import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Congrats from "./Congrats";
import { motion } from "framer-motion";

export default function Tools({
  options,
  handleTransform,
  transformed,
  reset,
}) {
  const [allOptions, setAllOptions] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubOptions, setIsSubOptions] = useState(false);

  const { workOptions } = options;

  useEffect(() => {
    if (workOptions) {
      // const actionButtons = Object.keys(workOptions);
      const actionButtons = workOptions;
      setSelectedTools(actionButtons);
      setAllOptions(actionButtons);
    }
  }, [workOptions]);
   
   // eslint-disable-next-line
  const loadSubOptions = (action) => {
    const subOptions = workOptions[action];
    setSelectedOption(action);
    setSelectedTools(subOptions);
    setIsSubOptions(true);
  };

  const handleBack = () => {
    if (isSubOptions) {
      setIsSubOptions(false);
      return setSelectedTools(allOptions);
    }
    setIsSubOptions(false);
    return reset();
  };

  // const transform = (action) => {
  //   if (!isSubOptions) {
  //     return loadSubOptions(action);
  //   }
  //   handleTransform({ work: selectedOption, options: action });
  // };

  return (
    <div className="flex flex-col">
      {!transformed && (
        <div className="flex items-center">
          <Button
            kind="primary"
            className="rounded-lg font-semibold text-lg mr-6"
            onClick={handleBack}
          >
            <i className="fas fa-arrow-left" />
          </Button>
          <h1 className="text-2xl font-bold">
            {selectedOption || "Select your tool"}
          </h1>
        </div>
      )}
      {/* <div className="flex flex-col my-8 items-center"> */}
      <div className="flex flex-col my-8 items-center">
        {!transformed ? (
          selectedTools?.map((action, index) => (
            <motion.div
              key={index}
              className="w-full flex justify-center"
              animate={{ x: 0 }}
              initial={{ x: -80 }}
              transition={{ type: "spring" }}
            >
              <Button
                kind={isSubOptions ? "primary" : "secondary"}
                className="rounded-lg font-semibold text-base mb-6 py-2 w-1/2"
                onClick={() => handleTransform(action)}
              >
                {action}
              </Button>
            </motion.div>
          ))
        ) : (
          <Congrats transformed={transformed} />
        )}
        {/* {selectedTools?.length < allOptions?.length && !isSubOptions && ( */}
        {/* )} */}
      </div>
      {/* </div> */}
      {!isSubOptions && !transformed && (
        <>
          <div className="grid grid-cols-24 place-items-center">
            <Button
              kind="ghost"
              className="rounded-lg font-semibold text-base mb-6 py-2 w-1/2 text-indigo-700 "
              // onClick={() => setSelectedTools(allOptions)}
            >
              More Options
            </Button>
          </div>
          <Link
            to="#"
            className="underline text-sm font-semibold text-center w-full"
          >
            Didn&apos;t you find what you were looking for? Let us know
          </Link>
        </>
      )}
    </div>
  );
}
