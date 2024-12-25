import React, { useState } from "react";

const MessagesViewer = () => {
  const [topic, setTopic] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRefresh = async () => {
    if (!topic) {
      alert("Please select a topic first!");
      return;
    }

    setLoading(true);

    try {
      // Example GET request to fetch messages for the selected topic
      const response = await fetch(`https://your-api-endpoint.com/messages?topic=${topic}`);
      
      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages || []);
      } else {
        alert("Failed to fetch messages.");
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">View Messages by Topic</h2>

      {/* Topic Dropdown */}
      <div className="mb-4">
        <label
          htmlFor="topic"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Topic
        </label>
        <select
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="topic1">Topic 1</option>
          <option value="topic2">Topic 2</option>
          <option value="topic3">Topic 3</option>
        </select>
      </div>

      {/* Refresh Button */}
      <div className="mb-4">
        <button
          onClick={handleRefresh}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {/* Messages List */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Messages:</h3>
        {messages.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2">
            {messages.map((message, index) => (
              <li key={index} className="text-gray-800">
                {message}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            {loading ? "Fetching messages..." : "No messages available for this topic."}
          </p>
        )}
      </div>
    </div>
  );
};

export default MessagesViewer;
