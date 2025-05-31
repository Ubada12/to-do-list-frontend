import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function InfoModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative bg-white text-black w-full max-w-2xl max-h-[90vh] rounded-lg shadow-xl overflow-y-auto p-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-50"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4">Why Task Master?</h2>

        <p className="mb-4 text-gray-700">
          <strong>We know how chaotic task management can get</strong> with sticky notes, mental checklists, and lost reminders.
          <br />
          <br />
          <span className="text-blue-700 font-semibold">Task Master</span> simplifies it all.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
          <li>✨ User-friendly interface</li>
          <li>🔔 Smart reminders that adapt to your routine</li>
          <li>☁️ Cloud sync across devices</li>
          <li>🔒 Privacy-focused (no third-party tracking)</li>
        </ul>

        <div className="mb-4">
          <h3 className="font-semibold">How It Works</h3>
          <p>Create → Set Due Date → Prioritize → Get Reminded → Complete → Track Progress</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Why It's Better?</h3>
          <p>
            Compared to Google Tasks or Notion, Task Master is laser-focused on
            <strong> simplicity, speed, and productivity</strong>. No clutter, just results.
          </p>
        </div>

        <blockquote className="italic text-blue-600 mb-4">
          “This app saved my final-year project timeline!”<br />
          <span className="text-sm text-gray-500">— Student from Mumbai</span>
        </blockquote>

        <button
          onClick={() => {
            onClose(); // optional
            navigate("/todolist");
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Try It — It’s Free
        </button>
      </div>
    </div>
  );
}
