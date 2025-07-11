import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import vector2 from '../../assets/Vector2.png';
import Ai from '../../assets/svg1.png';
import blub from '../../assets/bulb.png';
import './Notes.css';

const Notes = () => {
  return (
    <div className="container">
      <div className="headings">
        <div className="text">
          <h1>Upload Meeting Notes</h1>
          <p>Convert meeting notes into actionable tasks</p>
        </div>

        <Link to="/" className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Dashboard</span>
        </Link>
      </div>

      <div className="summary">
        <div className="text_summary">
          <h1>Upload Transcript or Summary</h1>
          <p>
            Paste meeting notes or upload a file to extract tasks and action
            items
          </p>
        </div>

        <div className="meeting">
          <label htmlFor="meeting-notes">Meeting Notes</label>
          <textarea
            id="meeting-notes"
            placeholder="Paste your meeting notes or transcript here..."
          />
        </div>

        <div className="upload">
          <label>Or Upload File</label>
          <div className="uploads_files">
            <img src={vector2} alt="Upload Icon" />
            <p>Drag and drop files here</p>
            <span>Supported formats: .txt, .doc, .docx, .pdf</span>
            <button className="browse-button">Browse File</button>
          </div>
        </div>

        <div className="form-fields-container">
          <div className="form-group">
            <label htmlFor="project">Project</label>
            <input id="project" type="text" placeholder="Select project" />
          </div>

          <div className="form-group">
            <label htmlFor="attendees">Attendees</label>
            <select id="attendees">
              <option value="">Select attendee</option>
              <option value="John Smith">John Smith</option>
              <option value="Sarah Lee">Sarah Lee</option>
              <option value="Mike Johnson">Mike Johnson</option>
            </select>
          </div>
        </div>

        <div className="button-container">
          <button className="process-button">
            <img src={Ai} alt="AI Icon" /> Process with AI
          </button>
        </div>
      </div>

      <div className="extract_tasks">
        <div className="task-preview">
          <h1>Extracted Tasks Preview</h1>
          <p>Review and edit extracted tasks before saving</p>
        </div>
        <div className="review-placeholder">
          <p>Tasks extracted from your meeting notes will appear here</p>
        </div>
      </div>

      <div className="assistant-tips">
        <p>AI Assistant Tips</p>
        <div className="container_flex">
          <div className="card_1">
            <h1>
              <img src={blub} alt="" />
              Better Notes
            </h1>
            <p>
              Use clear action verbs like "create," "review," or "schedule" in
              your notes to help the AI identify tasks more accurately.
            </p>
          </div>
          <div className="card_1">
            <h1>
              <img src={blub} alt="" />
              Date Recognition
            </h1>
            <p>
              Include specific dates in your notes to help the AI automatically
              set deadlines for tasks.
            </p>
          </div>
          <div className="card_1">
            <h1>
              <img src={blub} alt="" />
              Assignees
            </h1>
            <p>
              Mention team members by name to help the AI assign tasks
              correctly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
