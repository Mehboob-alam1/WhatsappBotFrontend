import React, { useState } from 'react';
import './ProjectMockep.css';

const ProjectMockep = () => {
  const [status, setStatus] = useState('To Do');
  const [startDate, setStartDate] = useState('2023-05-20');
  const [dueDate, setDueDate] = useState('2023-06-05');
  const [priority, setPriority] = useState('Low');
  const [blockedBy, setBlockedBy] = useState('Requirements document');
  const [newComment, setNewComment] = useState('');

  const comments = [
    {
      id: '1',
      author: 'John Smith',
      avatar:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/83e6d9d743074ea7a206b25a15a71a78928156a9?width=64',
      timestamp: 'May 22, 2023 • 10:45 AM',
      content:
        "We need to wait for the requirements document to be finalized before starting the mockups. I've added it as a blocker.",
    },
    {
      id: '2',
      author: 'Mike Johnson',
      avatar:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/21dfbb4c2c6a0d0407eca6f57285cb2994f5ec91?width=64',
      timestamp: 'May 22, 2023 • 11:30 AM',
      content:
        "I'll try to get the requirements document ready by tomorrow. Sorry for the delay!",
    },
    {
      id: '3',
      author: 'Sarah Lee',
      avatar:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/eed79a830d688fb477a260223c94f1b9545c5892?width=64',
      timestamp: 'May 23, 2023 • 9:15 AM',
      content:
        "Thanks Mike. I'll start working on this as soon as I get the requirements. In the meantime, I'll review the brand guidelines.",
    },
  ];

  const files = [
    {
      name: 'wireframes-v2.fig',
      size: '2.4 MB',
      uploadedDate: 'May 19, 2023',
      uploadedBy: 'John Smith',
      type: 'figma',
    },
    {
      name: 'brand_guidelines_2023.pdf',
      size: '4.7 MB',
      uploadedDate: 'May 21, 2023',
      uploadedBy: 'Sarah Lee',
      type: 'pdf',
    },
  ];

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      console.log('New comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="task-card">
      {/* Header */}
      <h1>Design product mockups</h1>
      <div className="header">
        <div className="tags">
          <div className="tag">
            <span className="tag-label">Project:</span>
            <span className="tag-value">Product Launch</span>
          </div>
          <div className="tag">
            <span className="tag-label">Created:</span>
            <span className="tag-value">May 18, 2023</span>
          </div>
          <div className="tag blocked">
            <svg className="warning-icon" viewBox="0 0 15 15">
              <path d="M7.15622 1.625C7.5445 1.625 7.9027 1.83008 8.09958 2.16641L14.0058 12.2289C14.2054 12.568 14.2054 12.9863 14.0113 13.3254C13.8172 13.6645 13.4535 13.875 13.0625 13.875H1.24997C0.858952 13.875 0.49528 13.6645 0.301139 13.3254C0.106999 12.9863 0.109733 12.5652 0.306608 12.2289L6.21286 2.16641C6.40973 1.83008 6.76794 1.625 7.15622 1.625ZM7.15622 5.125C6.79255 5.125 6.49997 5.41758 6.49997 5.78125V8.84375C6.49997 9.20742 6.79255 9.5 7.15622 9.5C7.51989 9.5 7.81247 9.20742 7.81247 8.84375V5.78125C7.81247 5.41758 7.51989 5.125 7.15622 5.125ZM8.03122 11.25C8.03122 11.0179 7.93903 10.7954 7.77494 10.6313C7.61084 10.4672 7.38828 10.375 7.15622 10.375C6.92415 10.375 6.70159 10.4672 6.5375 10.6313C6.3734 10.7954 6.28122 11.0179 6.28122 11.25C6.28122 11.4821 6.3734 11.7046 6.5375 11.8687C6.70159 12.0328 6.92415 12.125 7.15622 12.125C7.38828 12.125 7.61084 12.0328 7.77494 11.8687C7.93903 11.7046 8.03122 11.4821 8.03122 11.25Z" />
            </svg>
            <span className="blocked-text">Blocked</span>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="form-grid">
        {/* Assignees */}
        <div className="form-field">
          <label>Assignees</label>
          <div className="assignee-field">
            <div className="avatar">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4c5104da4373c144e52030fac848ac31c4ceb47?width=56"
                alt="Sarah Lee"
              />
            </div>
            <p>Sarah Lee</p>

            <button className="edit-button">
              <svg viewBox="0 0 16 16">
                <path d="M14.7375 0.678122C14.0531 -0.00625306 12.9469 -0.00625306 12.2625 0.678122L11.3219 1.61562L14.3813 4.675L15.3219 3.73437C16.0063 3.05 16.0063 1.94375 15.3219 1.25937L14.7375 0.678122ZM5.3875 7.55312C5.19687 7.74375 5.05 7.97812 4.96562 8.2375L4.04063 11.0125C3.95 11.2812 4.02188 11.5781 4.22188 11.7812C4.42188 11.9844 4.71875 12.0531 4.99062 11.9625L7.76562 11.0375C8.02188 10.9531 8.25625 10.8062 8.45 10.6156L13.6781 5.38437L10.6156 2.32187L5.3875 7.55312ZM3 2C1.34375 2 0 3.34375 0 5V13C0 14.6562 1.34375 16 3 16H11C12.6562 16 14 14.6562 14 13V10C14 9.44687 13.5531 9 13 9C12.4469 9 12 9.44687 12 10V13C12 13.5531 11.5531 14 11 14H3C2.44688 14 2 13.5531 2 13V5C2 4.44687 2.44688 4 3 4H6C6.55312 4 7 3.55312 7 3C7 2.44687 6.55312 2 6 2H3Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="form-field">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        {/* Start Date */}
        <div className="form-field">
          <label>Start Date</label>
          <div className="date-input">
            <input
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75"
              />
            </svg>
          </div>
        </div>

        {/* Due Date */}
        <div className="form-field">
          <label>Due Date</label>
          <div className="date-input">
            <input
              type="text"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75"
              />
            </svg>
          </div>
        </div>

        {/* Priority */}
        <div className="form-field">
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Blocked By */}
        <div className="form-field">
          <label>Blocked By</label>
          <select
            value={blockedBy}
            onChange={(e) => setBlockedBy(e.target.value)}
          >
            <option value="Requirements document">Requirements document</option>
            <option value="Design approval">Design approval</option>
            <option value="Technical review">Technical review</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div className="description-field">
        <label>Description</label>
        <textarea placeholder="Create high-fidelity mockups for the new product interface based on the wireframes. Include mobile and desktop variations. Use the approved color palette and typography from the brand guidelines. The designs should be ready for developer handoff with proper layer organization and component structure." />
      </div>

      {/* Files & Attachments */}
      <div className="files-section">
        <div className="files-header">
          <h3>Files & Attachments</h3>
          <button className="add-file-button">
            <svg viewBox="0 0 14 15">
              <path d="M7.79688 2.9375C7.79688 2.45352 7.40586 2.0625 6.92188 2.0625C6.43789 2.0625 6.04688 2.45352 6.04688 2.9375V6.875H2.10938C1.62539 6.875 1.23438 7.26602 1.23438 7.75C1.23438 8.23398 1.62539 8.625 2.10938 8.625H6.04688V12.5625C6.04688 13.0465 6.43789 13.4375 6.92188 13.4375C7.40586 13.4375 7.79688 13.0465 7.79688 12.5625V8.625H11.7344C12.2184 8.625 12.6094 8.23398 12.6094 7.75C12.6094 7.26602 12.2184 6.875 11.7344 6.875H7.79688V2.9375Z" />
            </svg>
            Add File
          </button>
        </div>

        <div className="files-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <div className={`file-icon ${file.type}`}>
                {file.type === 'figma' ? (
                  <svg viewBox="0 0 12 16">
                    <path d="M2 0C0.896875 0 0 0.896875 0 2V14C0 15.1031 0.896875 16 2 16H10C11.1031 16 12 15.1031 12 14V5H8C7.44688 5 7 4.55312 7 4V0H2ZM8 0V4H12L8 0ZM2 8C2 7.73478 2.10536 7.48043 2.29289 7.29289C2.48043 7.10536 2.73478 7 3 7C3.26522 7 3.51957 7.10536 3.70711 7.29289C3.89464 7.48043 4 7.73478 4 8C4 8.26522 3.89464 8.51957 3.70711 8.70711C3.51957 8.89464 3.26522 9 3 9C2.73478 9 2.48043 8.89464 2.29289 8.70711C2.10536 8.51957 2 8.26522 2 8ZM6.75 9C6.91563 9 7.06875 9.08125 7.1625 9.21562L9.9125 13.2156C10.0188 13.3687 10.0281 13.5687 9.94375 13.7312C9.85938 13.8938 9.6875 14 9.5 14H6.75H5.5H4H2.5C2.31875 14 2.15313 13.9031 2.06562 13.7469C1.97812 13.5906 1.97813 13.3969 2.07188 13.2437L3.57188 10.7437C3.6625 10.5938 3.825 10.5 4 10.5C4.175 10.5 4.3375 10.5906 4.42812 10.7437L4.82812 11.4125L6.3375 9.21875C6.43125 9.08438 6.58437 9.00313 6.75 9.00313V9Z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 16 16">
                    <path d="M0 2C0 0.896875 0.896875 0 2 0H7V4C7 4.55312 7.44688 5 8 5H12V9.5H5.5C4.39687 9.5 3.5 10.3969 3.5 11.5V16H2C0.896875 16 0 15.1031 0 14V2ZM12 4H8V0L12 4ZM5.5 11H6.5C7.46562 11 8.25 11.7844 8.25 12.75C8.25 13.7156 7.46562 14.5 6.5 14.5H6V15.5C6 15.775 5.775 16 5.5 16C5.225 16 5 15.775 5 15.5V14V11.5C5 11.225 5.225 11 5.5 11ZM6.5 13.5C6.91563 13.5 7.25 13.1656 7.25 12.75C7.25 12.3344 6.91563 12 6.5 12H6V13.5H6.5ZM9.5 11H10.5C11.3281 11 12 11.6719 12 12.5V14.5C12 15.3281 11.3281 16 10.5 16H9.5C9.225 16 9 15.775 9 15.5V11.5C9 11.225 9.225 11 9.5 11ZM10.5 15C10.775 15 11 14.775 11 14.5V12.5C11 12.225 10.775 12 10.5 12H10V15H10.5ZM13 11.5C13 11.225 13.225 11 13.5 11H15C15.275 11 15.5 11.225 15.5 11.5C15.5 11.775 15.275 12 15 12H14V13H15C15.275 13 15.5 13.225 15.5 13.5C15.5 13.775 15.275 14 15 14H14V15.5C14 15.775 13.775 16 13.5 16C13.225 16 13 15.775 13 15.5V13.5V11.5Z" />
                  </svg>
                )}
              </div>

              <div className="file-info">
                <div className="file-name-row">
                  <span className="file-name">{file.name}</span>
                  <span className="file-size">{file.size}</span>
                </div>
                <div className="file-meta">
                  Uploaded {file.uploadedDate} • by {file.uploadedBy}
                </div>
              </div>

              <div className="file-actions">
                <button className="file-action-button">
                  <svg viewBox="0 0 16 16">
                    <path d="M9 1C9 0.446875 8.55313 0 8 0C7.44688 0 7 0.446875 7 1V8.58438L4.70625 6.29063C4.31563 5.9 3.68125 5.9 3.29063 6.29063C2.9 6.68125 2.9 7.31563 3.29063 7.70625L7.29063 11.7063C7.68125 12.0969 8.31563 12.0969 8.70625 11.7063L12.7063 7.70625C13.0969 7.31563 13.0969 6.68125 12.7063 6.29063C12.3156 5.9 11.6812 5.9 11.2906 6.29063L9 8.58438V1ZM2 11C0.896875 11 0 11.8969 0 13V14C0 15.1031 0.896875 16 2 16H14C15.1031 16 16 15.1031 16 14V13C16 11.8969 15.1031 11 14 11H10.8281L9.4125 12.4156C8.63125 13.1969 7.36562 13.1969 6.58437 12.4156L5.17188 11H2ZM13.5 12.75C13.6989 12.75 13.8897 12.829 14.0303 12.9697C14.171 13.1103 14.25 13.3011 14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25C13.3011 14.25 13.1103 14.171 12.9697 14.0303C12.829 13.8897 12.75 13.6989 12.75 13.5C12.75 13.3011 12.829 13.1103 12.9697 12.9697C13.1103 12.829 13.3011 12.75 13.5 12.75Z" />
                  </svg>
                </button>
                <button className="file-action-button">
                  <svg viewBox="0 0 14 16">
                    <path d="M4.225 0.553125C4.39375 0.2125 4.74062 0 5.11875 0H8.88125C9.25938 0 9.60625 0.2125 9.775 0.553125L10 1H13C13.5531 1 14 1.44687 14 2C14 2.55312 13.5531 3 13 3H1C0.446875 3 0 2.55312 0 2C0 1.44687 0.446875 1 1 1H4L4.225 0.553125ZM1 4H13V14C13 15.1031 12.1031 16 11 16H3C1.89688 16 1 15.1031 1 14V4ZM4 6C3.725 6 3.5 6.225 3.5 6.5V13.5C3.5 13.775 3.725 14 4 14C4.275 14 4.5 13.775 4.5 13.5V6.5C4.5 6.225 4.275 6 4 6ZM7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5C7.5 6.225 7.275 6 7 6ZM10 6C9.725 6 9.5 6.225 9.5 6.5V13.5C9.5 13.775 9.725 14 10 14C10.275 14 10.5 13.775 10.5 13.5V6.5C10.5 6.225 10.275 6 10 6Z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <div className="upload-area">
            <div className="upload-icon">
              <svg viewBox="0 0 30 24">
                <path d="M6.75 22.5C3.02344 22.5 0 19.4766 0 15.75C0 12.8062 1.88437 10.3031 4.50937 9.37969C4.50469 9.25313 4.5 9.12656 4.5 9C4.5 4.85625 7.85625 1.5 12 1.5C14.7797 1.5 17.2031 3.00937 18.5016 5.25937C19.2141 4.78125 20.0766 4.5 21 4.5C23.4844 4.5 25.5 6.51562 25.5 9C25.5 9.57187 25.3922 10.1156 25.2 10.6219C27.9375 11.175 30 13.5984 30 16.5C30 19.8141 27.3141 22.5 24 22.5H6.75ZM10.4531 12.3281C10.0125 12.7688 10.0125 13.4812 10.4531 13.9172C10.8938 14.3531 11.6062 14.3578 12.0422 13.9172L13.8703 12.0891V18.375C13.8703 18.9984 14.3719 19.5 14.9953 19.5C15.6187 19.5 16.1203 18.9984 16.1203 18.375V12.0891L17.9484 13.9172C18.3891 14.3578 19.1016 14.3578 19.5375 13.9172C19.9734 13.4766 19.9781 12.7641 19.5375 12.3281L15.7875 8.57812C15.3469 8.1375 14.6344 8.1375 14.1984 8.57812L10.4484 12.3281H10.4531Z" />
              </svg>
            </div>
            <p>Drag files here or click to upload</p>
            <button className="browse-button">Browse files</button>
          </div>
        </div>
      </div>

      {/* Comments */}
      <div className="comments-section">
        <div className="comments-header">
          <h3>Comments</h3>
          <span>{comments.length} comments</span>
        </div>

        {/* Existing Comments */}
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="avatar">
                <img src={comment.avatar} alt={comment.author} />
              </div>
              <div className="comment-content">
                <div className="comment-header">
                  <span className="comment-author">{comment.author}</span>
                  <span className="comment-timestamp">{comment.timestamp}</span>
                </div>
                <p className="comment-text">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* New Comment Form */}
        <div className="new-comment">
          <div className="avatar">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83e6d9d743074ea7a206b25a15a71a78928156a9?width=64"
              alt="User"
            />
          </div>
          <div className="comment-form">
            <div className="comment-textarea-container">
              <textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <div className="comment-toolbar">
                <div className="formatting-tools">
                  <button>
                    <svg viewBox="0 0 12 16">
                      <path d="M0 2C0 1.44687 0.446875 1 1 1H2.5H3H7C9.20938 1 11 2.79063 11 5C11 5.97813 10.6469 6.87813 10.0625 7.57188C11.2219 8.27187 12 9.54375 12 11C12 13.2094 10.2094 15 8 15H3H2.5H1C0.446875 15 0 14.5531 0 14C0 13.4469 0.446875 13 1 13H1.5V8V3H1C0.446875 3 0 2.55313 0 2ZM7 7C8.10312 7 9 6.10313 9 5C9 3.89687 8.10312 3 7 3H3.5V7H7ZM3.5 9V13H8C9.10312 13 10 12.1031 10 11C10 9.89688 9.10312 9 8 9H7H3.5Z" />
                    </svg>
                  </button>
                  <button>
                    <svg viewBox="0 0 12 16">
                      <path d="M4 2C4 1.44687 4.44688 1 5 1H11C11.5531 1 12 1.44687 12 2C12 2.55313 11.5531 3 11 3H9.16562L5 13H7C7.55312 13 8 13.4469 8 14C8 14.5531 7.55312 15 7 15H1C0.446875 15 0 14.5531 0 14C0 13.4469 0.446875 13 1 13H2.83437L7 3H5C4.44688 3 4 2.55313 4 2Z" />
                    </svg>
                  </button>
                  <button>
                    <svg viewBox="0 0 20 16">
                      <path d="M18.1188 8.36559C19.8845 6.59997 19.8845 3.74059 18.1188 1.97497C16.5563 0.412466 14.0938 0.209341 12.297 1.49372L12.247 1.52809C11.797 1.84997 11.6938 2.47497 12.0157 2.92184C12.3376 3.36872 12.9626 3.47497 13.4095 3.15309L13.4595 3.11872C14.4626 2.40309 15.8345 2.51559 16.7032 3.38747C17.6876 4.37184 17.6876 5.96559 16.7032 6.94997L13.197 10.4625C12.2126 11.4468 10.6188 11.4468 9.63447 10.4625C8.7626 9.59059 8.6501 8.21872 9.36572 7.21872L9.4001 7.16872C9.72197 6.71872 9.61572 6.09372 9.16885 5.77497C8.72197 5.45622 8.09385 5.55934 7.7751 6.00622L7.74072 6.05622C6.45322 7.84997 6.65635 10.3125 8.21885 11.875C9.98447 13.6406 12.8438 13.6406 14.6095 11.875L18.1188 8.36559ZM1.88135 7.63434C0.115723 9.39997 0.115723 12.2593 1.88135 14.025C3.44385 15.5875 5.90635 15.7906 7.70322 14.5062L7.75322 14.4718C8.20322 14.15 8.30635 13.525 7.98447 13.0781C7.6626 12.6312 7.0376 12.525 6.59072 12.8468L6.54072 12.8812C5.5376 13.5968 4.16572 13.4843 3.29697 12.6125C2.3126 11.625 2.3126 10.0312 3.29697 9.04684L6.80322 5.53747C7.7876 4.55309 9.38135 4.55309 10.3657 5.53747C11.2376 6.40934 11.3501 7.78122 10.6345 8.78434L10.6001 8.83434C10.2782 9.28434 10.3845 9.90934 10.8313 10.2281C11.2782 10.5468 11.9063 10.4437 12.2251 9.99684L12.2595 9.94684C13.547 8.14997 13.3438 5.68747 11.7813 4.12497C10.0157 2.35934 7.15635 2.35934 5.39072 4.12497L1.88135 7.63434Z" />
                    </svg>
                  </button>
                  <button>
                    <svg viewBox="0 0 16 16">
                      <path d="M1.25 1.5C0.834375 1.5 0.5 1.83437 0.5 2.25V3.75C0.5 4.16563 0.834375 4.5 1.25 4.5H2.75C3.16563 4.5 3.5 4.16563 3.5 3.75V2.25C3.5 1.83437 3.16563 1.5 2.75 1.5H1.25ZM6 2C5.44688 2 5 2.44687 5 3C5 3.55312 5.44688 4 6 4H15C15.5531 4 16 3.55312 16 3C16 2.44687 15.5531 2 15 2H6ZM6 7C5.44688 7 5 7.44688 5 8C5 8.55312 5.44688 9 6 9H15C15.5531 9 16 8.55312 16 8C16 7.44688 15.5531 7 15 7H6ZM6 12C5.44688 12 5 12.4469 5 13C5 13.5531 5.44688 14 6 14H15C15.5531 14 16 13.5531 16 13C16 12.4469 15.5531 12 15 12H6ZM0.5 7.25V8.75C0.5 9.16563 0.834375 9.5 1.25 9.5H2.75C3.16563 9.5 3.5 9.16563 3.5 8.75V7.25C3.5 6.83437 3.16563 6.5 2.75 6.5H1.25C0.834375 6.5 0.5 6.83437 0.5 7.25ZM1.25 11.5C0.834375 11.5 0.5 11.8344 0.5 12.25V13.75C0.5 14.1656 0.834375 14.5 1.25 14.5H2.75C3.16563 14.5 3.5 14.1656 3.5 13.75V12.25C3.5 11.8344 3.16563 11.5 2.75 11.5H1.25Z" />
                    </svg>
                  </button>
                  <button>
                    <svg viewBox="0 0 16 16">
                      <path d="M4 2C4 1.44687 4.44688 1 5 1H11C11.5531 1 12 1.44687 12 2C12 2.55313 11.5531 3 11 3H9.16562L5 13H7C7.55312 13 8 13.4469 8 14C8 14.5531 7.55312 15 7 15H1C0.446875 15 0 14.5531 0 14C0 13.4469 0.446875 13 1 13H2.83437L7 3H5C4.44688 3 4 2.55313 4 2Z" />
                    </svg>
                  </button>
                  <button>
                    <svg viewBox="0 0 16 16">
                      <path d="M8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C8.55313 14 9 14.4469 9 15C9 15.5531 8.55313 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8V9C16 10.6562 14.6562 12 13 12C12.0844 12 11.2625 11.5875 10.7125 10.9406C10 11.5969 9.04688 12 8 12C5.79063 12 4 10.2094 4 8C4 5.79063 5.79063 4 8 4C8.87187 4 9.67813 4.27813 10.3344 4.75313C10.5125 4.59688 10.7437 4.5 11 4.5C11.5531 4.5 12 4.94688 12 5.5V8V9C12 9.55313 12.4469 10 13 10C13.5531 10 14 9.55313 14 9V8C14 4.6875 11.3125 2 8 2ZM10 8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10C8.53043 10 9.03914 9.78929 9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8Z" />
                    </svg>
                  </button>
                </div>
                <button
                  className="post-comment-button"
                  onClick={handleSubmitComment}
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMockep;
