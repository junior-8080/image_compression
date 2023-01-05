import React from "react";
import { XMarkIcon, CheckIcon } from "@heroicons/react/20/solid";
// import Upload from "./Upload";
import { icons } from "data/icons";
import { motion } from "framer-motion";

const getFileExtension = (fileName) => {
  const extension = fileName.split(".").pop();
  if (extension === "jpeg") return "jpg";
  if (extension === "pptx") return "ppt";
  return extension;
};

const FilesList = ({
  handleChange,
  handleDelete,
  errors,
  transformed,
  files,
}) => {
  return (
    <div className="flex flex-col justify-between h-full p-8 overflow-hidden">
      <h2 className="font-bold text-xl text-center">
        Uploaded files ({files?.length})
      </h2>
      <ul className="flex overflow-x-scroll">
        {files?.map((file, index) => (
          <motion.li
            animate={{ y: 0 }}
            initial={{ y: -20 }}
            transition={{ type: "spring" }}
            key={index}
            className={`file-item relative ml-2 flex-none my-6 w-1/5 py-6 px-2 hover:bg-indigo-50 rounded-md`}
          >
            {!transformed ? (
              <XMarkIcon
                className="h-5 w-5 hidden cursor-pointer bg-indigo-900 rounded-full text-white absolute top-1 right-1"
                onClick={() => handleDelete(file)}
              />
            ) : (
              <CheckIcon className="h-5 w-5 flex cursor-pointer bg-green-50 rounded-full text-green absolute top-1 right-1" />
            )}
            <img
              src={icons[getFileExtension(file.name)]}
              alt=""
              className="w-full"
            />
            <p className="text-xs text-gray-700 truncate font-semibold">
              {file.name}
            </p>
          </motion.li>
        ))}
      </ul>
      {/* <div className="h-1/4">
        {!transformed && (
          <Upload handleChange={handleChange} errors={errors}>
            {errors ? (
              <p className="text-center font-bold text-lg text-red-500">
                {errors}
              </p>
            ) : (
              <p className="text-center font-bold text-lg">
                Add another file
                <span className="px-4 py-2 rounded-lg text-white ml-3 bg-indigo-500">
                  +
                </span>
              </p>
            )}
          </Upload>
        )}
      </div> */}
    </div>
  );
};

export default FilesList;
