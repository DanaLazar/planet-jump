import React, { useState } from "react";
import { useStore } from "./../hooks/store";

const PersonalInfo = () => {
  const { setStep, personalInfo, setName, setGreeting, setImage } = useStore();

  const initialValues = {
    name: personalInfo.name,
    greeting: personalInfo.greeting,
    image: personalInfo.image,
    file: null as File | null,
    preview: "",
  };

  const [formValues, setFormValues] = React.useState(initialValues);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!/[a-zA-Z]+/g.test(formValues.name)) {
      alert("Invalid name");
      return;
    }
    if (!/\D+/.test(formValues.greeting)) {
      alert("Invalid greeting");
      return;
    }
    setName(formValues.name);
    setGreeting(formValues.greeting);
    setStep({ step: 1 });
    if (formValues.file) {
      setImage(formValues.preview);
    } else {
      setImage(formValues.image);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (name === "file" && files && files[0]) {
      const file = files[0];
      const previewURL = URL.createObjectURL(file);

      setFormValues((prevValues) => ({
        ...prevValues,
        file: file,
        preview: previewURL,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-blue-300 text-center">
        You on planet Earth
      </h2>
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">
            Your Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="smth"
            value={formValues.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">
            Your Greeting
          </label>
          <input
            name="greeting"
            type="text"
            placeholder="else"
            value={formValues.greeting}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">
            Your Face: Upload Your Photo
          </label>
          <input
            name="file"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formValues.preview && (
            <div className="mt-4">
              <img
                src={formValues.preview}
                alt="Preview"
                className="max-w-full h-auto rounded-md shadow-lg"
              />
              <p className="text-gray-400 text-xs mt-2">Image Preview</p>
            </div>
          )}
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
