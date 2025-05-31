import { X } from "lucide-react";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Alert } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "../components/ui/button";

export default function InfoModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  const [openDialog, setOpenDialog] = useState(false); // State to manage dialog visibility

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
    if (isAuthenticated) {
      navigate('/todo-list');
    } else {
      setOpenDialog(true);
    }
  }}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
>
  Try It — It’s Free
</button>

      </div>
      <Dialog 
              open={openDialog} 
              onClose={() => setOpenDialog(false)}
              PaperProps={{
                sx: {
                  width: '100%',
                  maxWidth: '500px',
                  m: 2,
                  overflowX: 'hidden',  // Prevent horizontal scroll
                  '& .MuiDialogTitle-root': {
                    pb: 2,
                  },
                  '& .MuiDialogContent-root': {
                    pb: 2,
                    px: 3,
                    overflowX: 'hidden',  // Prevent horizontal scroll
                  },
                  '& .MuiDialogActions-root': {
                    px: 3,
                    pb: 2,
                  }
                }
              }}
            >
              <DialogTitle sx={{ pr: 6 }}>  {/* Added right padding for close button */}
                Protected Page
                <IconButton 
                  edge="end" 
                  color="inherit" 
                  onClick={() => setOpenDialog(false)} 
                  aria-label="close" 
                  sx={{
                    position: 'absolute', 
                    right: 8, 
                    top: 8
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Alert severity="info">
                  Please sign up to access this page.
                </Alert>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenDialog(false)} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
    </div>
  );
}
