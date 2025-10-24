import React from "react";

interface ErrorProps {
  message?: string; // optional string
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  if (!message) return null; // early return if no message

  return (
    <div className="error-message text-red-600 bg-red-100 p-2 rounded">
      {message}
    </div>
  );
};
