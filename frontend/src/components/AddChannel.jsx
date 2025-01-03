import axios from "axios";
import React, { useState } from "react";

const CreateChannelForm = () => {
    const [formData, setFormData] = useState({
        channelName: "",
        channelEmail: "",
        description: "",
        channelBanner: null,
    });

    const [subscribers] = useState(0); // Default value

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, channelBanner: e.target.files[0] });
    };
    const payload = {
        ...formData,
        subscribers: subscribers || 0, // Default to 0 if not set
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., API call)
        console.log("Form Data Submitted: ", payload);
        axios.post(`http://localhost:3000/channel/create`,payload)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Create Your Channel</h1>
            <form onSubmit={handleSubmit}>
                {/* Channel Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="channelName">
                        Channel Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="channelName"
                        name="channelName"
                        value={formData.channelName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your channel name"
                        required
                    />
                </div>

                {/* Channel Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="channelEmail">
                        Email
                    </label>
                    <input
                        type="email"
                        id="channelEmail"
                        name="channelEmail"
                        value={formData.channelEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your email (optional)"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Describe your channel (optional)"
                        rows="4"
                    ></textarea>
                </div>

                {/* Channel Banner */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="channelBanner">
                        Channel Banner
                    </label>
                    <input
                        type="file"
                        id="channelBanner"
                        name="channelBanner"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    >
                        Create Channel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateChannelForm;
