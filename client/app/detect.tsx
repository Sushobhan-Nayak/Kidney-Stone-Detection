"use client";

import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";

const KidneyDetection: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    ""
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setPrediction(result.prediction);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-6xl font-semibold py-8">Kidney Stone Detection</div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          className="rounded-md"
          accept="image/*"
          required
        />
        <button
          type="submit"
          className="text-gray-900 bg-white hover:bg-gray-400 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Upload
        </button>
      </form>
      {imagePreview && (
        <div className="image-preview">
          <Image
            src={imagePreview.toString()}
            alt="Selected"
            className="border-white border-solid border-2 m-4"
           height={350}
           width={400}
          />
        </div>
      )}
      {prediction && <div id="result" className="flex text-3xl mt-2">Prediction: {prediction}</div>}
    </div>
  );
};

export default KidneyDetection;
