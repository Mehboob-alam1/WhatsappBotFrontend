import React, { useState } from 'react';
import { Paperclip, MessageSquare } from 'lucide-react';
import {
  Plus,
  Search,
  ChevronDown,
  MoreHorizontal,
  Calendar,
  Users,
  Bot,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Dashboared.css';

const Dashboard = () => {
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [viewMode, setViewMode] = useState('list');

  const projects = [
    {
      id: '1',
      name: 'Marketing Campaign',
      tasks: 12,
      status: 'In Progress',
      progress: 65,
      dueDate: 'Jun 15',
      teamMembers: ['user1', 'user2', 'user3'],
    },
    {
      id: '2',
      name: 'Product Launch',
      tasks: 18,
      status: 'At Risk',
      progress: 42,
      dueDate: 'Jul 30',
      teamMembers: ['user4', 'user5', 'user6'],
    },
    {
      id: '3',
      name: 'Website Redesign',
      tasks: 8,
      status: 'On Track',
      progress: 78,
      dueDate: 'Jun 10',
      teamMembers: ['user7', 'user8'],
    },
    {
      id: '4',
      name: 'Q3 Planning',
      tasks: 5,
      status: 'Blocked',
      progress: 15,
      dueDate: 'Aug 5',
      teamMembers: ['user9', 'user10'],
    },
  ];

  const tasks = [
    {
      id: '1',
      name: 'Create marketing plan',
      assignees: ['user1', 'user2'],
      startDate: 'May 15, 2023',
      dueDate: 'May 30, 2023',
      status: 'In Progress',
    },
    {
      id: '2',
      name: 'Design product mockups',
      assignees: ['user3'],
      startDate: 'May 20, 2023',
      dueDate: 'Jun 5, 2023',
      status: 'Blocked',
      blockedBy: 'Requirements document',
    },
    {
      id: '3',
      name: 'Prepare requirements document',
      assignees: ['user4', 'user5'],
      startDate: 'May 10, 2023',
      dueDate: 'May 18, 2023',
      status: 'Done',
    },
    {
      id: '4',
      name: 'Develop landing page',
      assignees: ['user6'],
      startDate: 'May 25, 2023',
      dueDate: 'Jun 10, 2023',
      status: 'At Risk',
    },
  ];

  function StatusBadge({ status }) {
    const getStatusClass = () => {
      switch (status) {
        case 'In Progress':
          return 'status-badge status-in-progress';
        case 'At Risk':
          return 'status-badge status-at-risk';
        case 'On Track':
          return 'status-badge status-on-track';
        case 'Blocked':
          return 'status-badge status-blocked';
        case 'Done':
          return 'status-badge status-done';
        default:
          return 'status-badge';
      }
    };
    return <span className={getStatusClass()}>{status}</span>;
  }

  function Avatar({ src, alt, className }) {
    const avatarImages = [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
    ];
    const defaultSrc =
      src || avatarImages[Math.floor(Math.random() * avatarImages.length)];
    return (
      <img
        src={defaultSrc}
        alt={alt || 'User'}
        className={`avatar ${className || ''}`}
        onError={(e) => {
          e.currentTarget.src =
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiNFNUU3RUIiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik04IDJDOS4xIDIgMTAgMi45IDEwIDRDMTAgNS4xIDkuMSA2IDggNkM2LjkgNiA2IDUuMSA2IDRDNiAyLjkgNi45IDIgOCAyWk04IDdDMTAuMiA3IDEyIDguOCAxMiAxMUgxMlY1SDE0VjExQzE0IDEwIDEzIDkgMTIgOUgxMlY3SDhaIiBmaWxsPSIjOTQ5NEE0Ii8+Cjwvc3ZnPgo8L3N2Zz4K';
        }}
      />
    );
  }

  function AvatarGroup({ users, max = 3 }) {
    return (
      <div className="avatar-group">
        {users.slice(0, max).map((user) => (
          <Avatar key={user} className="avatar-group-item" />
        ))}
        {users.length > max && (
          <div className="avatar-more">+{users.length - max}</div>
        )}
      </div>
    );
  }

  function ProjectCard({ project }) {
    return (
      <div className="project-card">
        <div className="project-card-header">
          <div>
            <h3 className="project-card-title">{project.name}</h3>
            <p className="project-card-subtitle">{project.tasks} tasks</p>
          </div>
          <StatusBadge status={project.status} />
        </div>
        <div className="project-progress-container">
          <div className="project-progress-header">
            <span className="project-progress-label">Progress</span>
            <span className="project-progress-value">{project.progress}%</span>
          </div>
          <div className="project-progress-bar">
            <div
              className={`project-progress-fill ${
                project.status === 'In Progress'
                  ? 'progress-in-progress'
                  : project.status === 'At Risk'
                  ? 'progress-at-risk'
                  : project.status === 'On Track'
                  ? 'progress-on-track'
                  : 'progress-blocked'
              }`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
        <div className="project-footer">
          <AvatarGroup users={project.teamMembers} />
          <span className="project-due-date">Due: {project.dueDate}</span>
        </div>
      </div>
    );
  }

  function TaskRow({ task }) {
    return (
      <tr className="task-row">
        <td className="task-cell">
          <div className="task-name-container">
            <div className="task-drag-handle">
              <div className="task-drag-lines">
                <div className="task-drag-line"></div>
                <div className="task-drag-line"></div>
              </div>
            </div>
            <span className="task-name">{task.name}</span>
          </div>
        </td>
        <td className="task-cell">
          <AvatarGroup users={task.assignees} max={2} />
        </td>
        <td className="task-cell task-date">{task.startDate}</td>
        <td className="task-cell task-date">{task.dueDate}</td>
        <td className="task-cell">
          <StatusBadge status={task.status} />
        </td>
        <td className="task-cell task-blocked">{task.blockedBy || '-'}</td>
        <td className="task-cell task-actions">
          <div className="actions-container">
            <button className="action-button">
              <Paperclip className="action-icon" />
            </button>
            <button className="action-button">
              <MessageSquare className="action-icon" />
            </button>
            <button className="action-button">
              <MoreHorizontal className="action-icon" />
            </button>
          </div>
        </td>
      </tr>
    );
  }

  function AIAssistant({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
      <div className="ai-assistant">
        <div className="ai-assistant-header">
          <h2 className="ai-assistant-title">AI Assistant</h2>
          <button onClick={onClose} className="ai-assistant-close">
            <X className="icon-sm" />
          </button>
        </div>
        <div className="ai-assistant-content">
          <div className="ai-assistant-intro">
            <p className="ai-assistant-text">
              Ask me anything about your tasks or projects. I can help with:
            </p>
            <div className="ai-assistant-options">
              <button className="ai-option-button">
                Summarize project status
              </button>
              <button className="ai-option-button">List overdue tasks</button>
              <button className="ai-option-button">
                Generate weekly report
              </button>
            </div>
          </div>
          <div className="ai-chat-container">
            {/* Chat messages would go here */}
          </div>
        </div>
        <div className="ai-assistant-input-container">
          <div className="ai-assistant-input-wrapper">
            <input
              type="text"
              placeholder="Ask AI assistant..."
              className="ai-assistant-input"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <main className="dashboard-main">
        <div className="dashboard-title-container">
          <div>
            <h1 className="dashboard-title">Dashboard</h1>
            <p className="dashboard-subtitle">Manage your projects and tasks</p>
          </div>
          <div className="dashboard-actions">
            <select className="dashboard-select">
              <option>All Projects</option>
            </select>
            <Link to="/notes" className="new-project-button">
              <Plus className="button-icon" />
              <span>New Project</span>
            </Link>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="task-management-container">
          <div className="task-management-header">
            <h2 className="task-management-title">Task Management</h2>
            <div className="task-view-controls">
              <div className="view-toggle">
                <button
                  onClick={() => setViewMode('list')}
                  className={`view-toggle-button ${
                    viewMode === 'list' ? 'active' : ''
                  }`}
                >
                  List
                </button>
                <button
                  onClick={() => setViewMode('board')}
                  className={`view-toggle-button ${
                    viewMode === 'board' ? 'active' : ''
                  }`}
                >
                  Board
                </button>
                <button
                  onClick={() => setViewMode('gantt')}
                  className={`view-toggle-button ${
                    viewMode === 'gantt' ? 'active' : ''
                  }`}
                >
                  Gantt
                </button>
              </div>
              <select className="task-filter-select">
                <option>All Status</option>
              </select>
              <select className="task-filter-select">
                <option>All Assignees</option>
              </select>
            </div>
          </div>

          <div className="task-table-container">
            <table className="task-table">
              <thead className="task-table-header">
                <tr>
                  <th className="task-table-th">Task</th>
                  <th className="task-table-th">Assignees</th>
                  <th className="task-table-th">Start Date</th>
                  <th className="task-table-th">Due Date</th>
                  <th className="task-table-th">Status</th>
                  <th className="task-table-th">Blocked By</th>
                  <th className="task-table-th actions-th">Actions</th>
                </tr>
              </thead>
              <tbody className="task-table-body">
                {tasks.map((task) => (
                  <TaskRow key={task.id} task={task} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <AIAssistant
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />

      <button className="fab" onClick={() => setAiAssistantOpen(true)}>
        <Plus className="fab-icon" />
      </button>

      {aiAssistantOpen && (
        <div
          className="ai-assistant-overlay"
          onClick={() => setAiAssistantOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
