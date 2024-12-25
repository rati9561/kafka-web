import React, { useState } from "react";

const TopicManager = () => {
  const [topics, setTopics] = useState(["Topic1", "Topic2", "Topic3"]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [newTopicName, setNewTopicName] = useState("");

  // Dummy data for topic details
  const topicDetails = {
    Topic1: { name: "Topic1", currentOffset: 50, totalMessages: 500 },
    Topic2: { name: "Topic2", currentOffset: 30, totalMessages: 300 },
    Topic3: { name: "Topic3", currentOffset: 70, totalMessages: 700 },
  };

  const handleSelectTopic = (e) => {
    setSelectedTopic(e.target.value);
  };

  const handleCreateTopic = () => {
    setIsOverlayOpen(true);
  };

  const handleSubmitNewTopic = () => {
    if (newTopicName.trim()) {
      setTopics([...topics, newTopicName]);
      setNewTopicName("");
      setIsOverlayOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Dropdown for topics */}
      <div className="w-full max-w-md mb-8">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select a Topic
        </label>
        <select
          onChange={handleSelectTopic}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="">-- Select a Topic --</option>
          {topics.map((topic, index) => (
            <option key={index} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      {/* Display selected topic details */}
      {selectedTopic && topicDetails[selectedTopic] && (
        <div className="w-full max-w-lg bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Topic Details
          </h2>
          <p className="text-gray-700">
            <strong>Name:</strong> {topicDetails[selectedTopic].name}
          </p>
          <p className="text-gray-700">
            <strong>Current Offset:</strong>{" "}
            {topicDetails[selectedTopic].currentOffset}
          </p>
          <p className="text-gray-700">
            <strong>Total Messages:</strong>{" "}
            {topicDetails[selectedTopic].totalMessages}
          </p>
        </div>
      )}

      {/* Button to create a new topic */}
      <button
        onClick={handleCreateTopic}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Create New Topic
      </button>

      {/* Overlay Form */}
      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Create New Topic
            </h2>
            <input
              type="text"
              value={newTopicName}
              onChange={(e) => setNewTopicName(e.target.value)}
              placeholder="Enter topic name"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsOverlayOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitNewTopic}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicManager;
