import React, { useEffect, useRef } from "react";

export default function Upload({ handleChange, errors, children, ...props }) {
  const dropElement = useRef(null);

  useEffect(() => {
    const dropArea = dropElement.current;

    // Prevent default drag behaviors
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dropArea.addEventListener(eventName, preventDefaults, false);
      document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop area when item is dragged over it
    ["dragenter", "dragover"].forEach((eventName) => {
      dropArea.addEventListener(eventName, highlight, false);
    });

    ["dragleave", "drop"].forEach((eventName) => {
      dropArea.addEventListener(eventName, unhighlight, false);
    });

    // Handle dropped files
    dropArea.addEventListener("drop", handleDrop, false);

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    function highlight(e) {
      dropArea.classList.add("highlight");
    }

    function unhighlight(e) {
      console.log(e);
      dropArea.classList.remove("highlight");
    }

    function handleDrop(e) {
      let dt = e.dataTransfer;
      let files = Array.from(dt.files);

      handleChange(files);
    }

    return () => {
      ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
        dropArea.removeEventListener(eventName, preventDefaults, false);
        document.body.removeEventListener(eventName, preventDefaults, false);
      });

      ["dragenter", "dragover"].forEach((eventName) => {
        dropArea.removeEventListener(eventName, highlight, false);
      });

      ["dragleave", "drop"].forEach((eventName) => {
        dropArea.removeEventListener(eventName, unhighlight, false);
      });

      dropArea.removeEventListener("drop", handleDrop, false);
    };
	// eslint-disable-next-line
  }, []);

  return (
    <form ref={dropElement} className="drop-area">
      <input
        type="file"
        id="fileElem"
        multiple={props.multiple}
        accept={props.accept || "*"}
        onChange={(e) => {
          return handleChange(Array.from(e.target.files));
        }}
      />
      <label
        className={`upload-label ${
          errors ? "label-error bg-red-50" : "label-normal"
        }`}
        htmlFor="fileElem"
      >
        {children ? (
          children
        ) : (
          <div className="upload-text">
            {errors ? (
              <i className="fa-solid fa-circle-exclamation border-spacing-4 border-red-900 text-red-900"></i>
            ) : (
              <i className="fa-solid fa-cloud-arrow-up border-red-900"></i>
            )}

            <p className="font-semibold">
              {errors || "select a file to upload or drag and drop"}
            </p>
            {!errors && (
              <>
                <small className="text-xs text-gray-500">
                  PPT, DOC, XLS, JPG, PNG, ...
                </small>
                <p
                  className={`${
                    errors ? "bg-red-900" : "bg-indigo-600"
                  }  text-white rounded-md px-4 py-1`}
                >
                  Select File
                </p>
              </>
            )}
          </div>
        )}
      </label>
    </form>
  );
}
