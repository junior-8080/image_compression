import React, { useState } from "react";
import FilesList from "./FileList";
import Loading from "./Loading";
import Tools from "./Tools";
import Upload from "./Upload";
import axios from "axios";

// const url = "https://66630c49-47c9-4ff2-b4f3-c33d6185d982.mock.pstmn.io";
const url = "http://localhost:3002";

export default function Header() {
	const [files, setFiles] = useState([]);
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState(null);
	const [transformed, setTransformed] = useState(null);

	const handleUpload = async (files) => {
		setFiles((prev) => [...prev, ...files]);
		setLoading(true);
		setErrors(null);
		try {
			const formData = new FormData();
			const acceptedFiles = [
				"image/gif",
				"image/jpeg",
				"image/png",
				"application/pdf",
				"application/vnd.ms-powerpoint",
				"application/vnd.openxmlformats-officedocument.presentationml.presentation",
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
				"application/msword",
			];
			files.forEach((file) => {
				if (!acceptedFiles.includes(file.type)) {
					setFiles((prev) => {
						const newFiles = prev.filter((f) => f.name !== file.name);
						return newFiles;
					});
					throw new Error(`Selected file not supported for upload`);
				}
				formData.append("file", file);
			});

			const { data } = await axios.post(
				`${url}/verify`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				},
			);

			data.files = files;
			setResponse(data);
			setLoading(false);
		} catch (error) {
			setErrors(error.message);
			setLoading(false);
		}
	};

	const handleDelete = (file) => {
		setFiles((prev) => {
			const newFiles = prev.filter((f) => f.name !== file.name);
			return newFiles;
		});
	};

	const handleTransform = async (options) => {

		let path = "";
		switch (options) {
			case 'Remove Background':
				path = '/remove-bg'
				break;
			default:
				path = '/work'
				
		}
		try {
			setLoading(true);
			setErrors(null);
			const formdata = new FormData()
			files.forEach(el => formdata.append('file' , el))
			const { data } = await axios.post(`${url}/${path}`,formdata,{responseType : 'blob' , headers:{}});
			setTransformed({file : URL.createObjectURL(data)});
			setLoading(false);
		} catch (error) {
			setErrors(error.message);
			setLoading(false);
		}
	};

	const reset = () => {
		setResponse(null);
		setFiles([]);
		setTransformed(null);
	};

	return (
		<div className="bg-gray-50">
			<div className="mx-auto max-w-7xl py-14 sm:pb-24 sm:pt-10 sm:px-6 lg:px-8 ">
				<div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 min-h-[520px] mt-20 mb-4">
					<div className="relative w-full sm:h-full md:h-96 lg:inset-y-0 lg:left-0 lg:h-full bg-white py-6 px-4 rounded">
						{!response?.files?.length && !loading && (
							<Upload multiple={true} handleChange={handleUpload} errors={errors} />
						)}
						{!response && loading && <Loading files={files?.length} />}
						{response?.workOptions && response?.files?.length > 0 && (
							<FilesList
								handleChange={handleUpload}
								response={response}
								handleDelete={handleDelete}
								errors={errors}
								transformed={transformed}
								files={files}
							/>
						)}
					</div>
					<div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:text-left bg-indigo-50 rounded">
						<div className="px-8 sm:px-8 xl:pr-16 h-full">
							{!response?.files?.length ? (
								<div className="px-8 flex flex-col justify-center h-full text-center">
									<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
										<span className="block xl:inline">
											Get rid of tedious
											<br />
											office tasks...
										</span>
									</h1>
									<p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
										Automatically convert, translate of improve vour images and
										MS Office docs - and save up to 90% of vour valuable work
										time.
									</p>
								</div>
							) : (
								<>
									{response && (
										<Tools
											options={response}
											handleTransform={handleTransform}
											transformed={transformed}
											reset={reset}
										/>
									)}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
