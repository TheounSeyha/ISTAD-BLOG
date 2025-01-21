import React, { useState, useRef } from "react";
import { ArrowLeft, Plus, Trash2, PlusSquare } from "lucide-react";

const PersonalInfo = ({ onNavigate }) => {
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);
  const [fields, setFields] = useState({
    "legal-name": {
      value: "Peter Griffin",
      isEditing: false,
      defaultValue: "Peter Griffin",
    },
    email: {
      value: "h***@designdrops.op",
      isEditing: false,
      defaultValue: "h***@designdrops.op",
    },
    phone: {
      value: "",
      isEditing: false,
      defaultValue: "",
    },
    "government-id": {
      value: "",
      isEditing: false,
      defaultValue: "",
    },
    address: {
      value: "",
      isEditing: false,
      defaultValue: "",
    },
    "emergency-contact": {
      value: "",
      isEditing: false,
      defaultValue: "",
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = () => {
    setProfilePic(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const startEdit = (fieldId) => {
    setFields((prev) => ({
      ...prev,
      [fieldId]: {
        ...prev[fieldId],
        isEditing: true,
      },
    }));
  };

  const saveEdit = (fieldId) => {
    setFields((prev) => ({
      ...prev,
      [fieldId]: {
        ...prev[fieldId],
        isEditing: false,
        defaultValue: prev[fieldId].value,
      },
    }));
  };

  const cancelEdit = (fieldId) => {
    setFields((prev) => ({
      ...prev,
      [fieldId]: {
        ...prev[fieldId],
        isEditing: false,
        value: prev[fieldId].defaultValue,
      },
    }));
  };

  const handleInputChange = (fieldId, value) => {
    setFields((prev) => ({
      ...prev,
      [fieldId]: {
        ...prev[fieldId],
        value,
      },
    }));
  };

  const renderField = (fieldId, label) => {
    const field = fields[fieldId];

    return (
      <div key={fieldId}>
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleInputChange(fieldId, e.target.value)}
            className="text-gray-800 bg-white border border-gray-300 rounded-md w-full p-2"
            placeholder="Not provided"
            disabled={!field.isEditing}
          />
          {!field.isEditing ? (
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-md"
              onClick={() => startEdit(fieldId)}
            >
              Edit
            </button>
          ) : (
            <>
              <button
                className="bg-orange-600 text-white px-4 py-2 rounded-md"
                onClick={() => saveEdit(fieldId)}
              >
                Save
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={() => cancelEdit(fieldId)}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg">
        <small className="text-gray-500">Account {">"} personal info</small>
        <h1 className="text-2xl font-bold mb-6">Personal info</h1>

        <div className="flex items-center mb-6 flex-col">
          <div className="relative w-24 h-24 mb-4">
            <div
              className="bg-gray-100 rounded-lg flex items-center justify-center w-full h-full border-2 border-dashed border-gray-300"
              style={
                profilePic
                  ? {
                      backgroundImage: `url(${profilePic})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            >
              {!profilePic && <Plus className="h-10 w-10 text-gray-400" />}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              id="upload-pic"
            />
            <label
              htmlFor="upload-pic"
              className="absolute inset-0 cursor-pointer"
            />
          </div>

          <div className="flex gap-4">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center">
              <PlusSquare className="w-4 h-4 mr-2" />
              Update
            </button>
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center"
              onClick={handleDeletePhoto}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {renderField("legal-name", "Legal name")}
          {renderField("email", "Email address")}
          {renderField("phone", "Phone numbers")}
          {renderField("government-id", "Government ID")}
          {renderField("address", "Address")}
          {renderField("emergency-contact", "Emergency contact")}
        </div>

        <div className="mt-6">
          <button
            onClick={() => onNavigate("/account")}
            className="flex items-center gap-2 text-purple-600 font-medium px-4 py-2 bg-purple-100 rounded-lg hover:bg-purple-200 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
