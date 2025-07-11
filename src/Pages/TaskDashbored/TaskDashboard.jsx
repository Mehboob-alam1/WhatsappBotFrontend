import { useState } from 'react';
import {
  TrendingUp,
  Clock,
  CheckCircle,
  Filter,
  Flag,
  Paperclip,
  MessageCircle,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Search,
  ArrowUpDown,
} from 'lucide-react';
import './TaskDashborad.css';

export default function TaskDashboard() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="task-dashboard">
      <StatsCards />
      <TaskFilters activeTab={activeTab} onTabChange={setActiveTab} />
      <TaskTable activeTab={activeTab} />
    </div>
  );
}

function StatsCards() {
  const stats = [
    {
      title: 'Total Tasks',
      value: '8',
      badge: '8 Tasks',
      badgeColor: 'bg-blue-100 text-blue-800',
      trend: '2 new this week',
      trendIcon: TrendingUp,
      trendColor: 'text-green-500',
    },
    {
      title: 'In Progress',
      value: '3',
      badge: '3 Tasks',
      badgeColor: 'bg-blue-100 text-blue-800',
      trend: 'Due soon: 2',
      trendIcon: Clock,
      trendColor: 'text-blue-500',
    },
    {
      title: 'Completed',
      value: '4',
      badge: '4 Tasks',
      badgeColor: 'bg-green-100 text-green-800',
      trend: 'This month',
      trendIcon: CheckCircle,
      trendColor: 'text-green-500',
    },
  ];

  return (
    <div className="stats-cards">
      {stats.map((stat) => {
        const TrendIcon = stat.trendIcon;
        return (
          <div key={stat.title} className="stats-card">
            <div className="stats-card-header">
              <h3>{stat.title}</h3>
              <span className={`stats-badge ${stat.badgeColor}`}>
                {stat.badge}
              </span>
            </div>
            <div className="stats-card-content">
              <div className="stats-value">{stat.value}</div>
              <div className="stats-trend">
                <TrendIcon className={`trend-icon ${stat.trendColor}`} />
                <span className={stat.trendColor}>{stat.trend}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TaskFilters({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'all', label: 'All', count: 8 },
    { id: 'in-progress', label: 'In Progress', count: 3 },
    { id: 'blocked', label: 'Blocked', count: 1 },
    { id: 'done', label: 'Done', count: 4 },
  ];

  return (
    <div className="task-filters">
      <div className="filters-header">
        <div>
          <h1>My Tasks</h1>
          <p>Manage your assigned tasks</p>
        </div>
        <div className="filters-actions">
          <div className="filter-select">
            <select>
              <option value="all">All Projects</option>
              <option value="marketing">Marketing Campaign</option>
              <option value="product">Product Launch</option>
              <option value="planning">Q3 Planning</option>
            </select>
          </div>
          <button className="filter-button">
            <Filter className="filter-icon" />
            Filters
          </button>
        </div>
      </div>

      <div className="tabs-container">
        <nav className="tabs-navigation">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

function TaskTable({ activeTab }) {
  const tasks = [
    {
      id: '1',
      name: 'Create marketing plan',
      project: 'Marketing Campaign',
      projectColor: 'bg-blue-100 text-blue-800',
      dueDate: 'May 30, 2023',
      priority: 3,
      status: 'in-progress',
    },
    {
      id: '2',
      name: 'Prepare requirements document',
      project: 'Product Launch',
      projectColor: 'bg-purple-100 text-purple-800',
      dueDate: 'May 18, 2023',
      priority: 3,
      status: 'done',
    },
    {
      id: '3',
      name: 'Design product mockups',
      project: 'Product Launch',
      projectColor: 'bg-purple-100 text-purple-800',
      dueDate: 'Jun 5, 2023',
      priority: 2,
      status: 'blocked',
    },
    {
      id: '4',
      name: 'Create social media content',
      project: 'Marketing Campaign',
      projectColor: 'bg-blue-100 text-blue-800',
      dueDate: 'Jun 1, 2023',
      priority: 3,
      status: 'in-progress',
    },
    {
      id: '5',
      name: 'Review Q3 budget',
      project: 'Q3 Planning',
      projectColor: 'bg-gray-100 text-gray-800',
      dueDate: 'Jul 10, 2023',
      priority: 2,
      status: 'in-progress',
    },
  ];

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'in-progress') return task.status === 'in-progress';
    if (activeTab === 'blocked') return task.status === 'blocked';
    if (activeTab === 'done') return task.status === 'done';
    return true;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'in-progress':
        return (
          <span className="badge bg-blue-100 text-blue-800">In Progress</span>
        );
      case 'done':
        return <span className="badge bg-green-100 text-green-800">Done</span>;
      case 'blocked':
        return <span className="badge bg-red-100 text-red-800">Blocked</span>;
      default:
        return null;
    }
  };

  const renderPriorityFlags = (priority) => {
    return (
      <div className="priority-flags">
        {Array.from({ length: priority }, (_, i) => (
          <Flag key={i} className="flag-icon" />
        ))}
      </div>
    );
  };

  return (
    <div className="task-table-container">
      <div className="table-header">
        <h2>My Assigned Tasks</h2>
        <div className="table-actions">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="search-input"
            />
          </div>
          <button className="sort-button">
            <ArrowUpDown className="sort-icon" />
          </button>
        </div>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th className="w-12">
                <input type="checkbox" />
              </th>
              <th>Task</th>
              <th>Project</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td className="w-12">
                  <input type="checkbox" />
                </td>
                <td className="font-medium">{task.name}</td>
                <td>
                  <span className={`project-badge ${task.projectColor}`}>
                    {task.project}
                  </span>
                </td>
                <td>{task.dueDate}</td>
                <td>{renderPriorityFlags(task.priority)}</td>
                <td>{getStatusBadge(task.status)}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-button">
                      <Paperclip className="action-icon" />
                    </button>
                    <button className="action-button">
                      <MessageCircle className="action-icon" />
                    </button>
                    <button className="action-button">
                      <MoreHorizontal className="action-icon" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <p>
          Showing {filteredTasks.length} of {tasks.length} tasks
        </p>
        <div className="pagination">
          <button className="pagination-button" disabled>
            <ChevronLeft className="pagination-icon" />
          </button>
          <button className="pagination-button active">1</button>
          <button className="pagination-button">
            <ChevronRight className="pagination-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
