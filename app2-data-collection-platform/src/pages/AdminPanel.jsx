import React, { useState } from 'react';
import './AdminPanel.css';

// Simulated admin data
const recentSubmissions = [
  { id: 1, type: 'Story', title: 'Nowhere to Go', category: 'Sleep', date: '2024-12-01', status: 'pending' },
  { id: 2, type: 'Story', title: 'The Coldest Night', category: 'Shelter', date: '2024-11-30', status: 'approved' },
  { id: 3, type: 'Survey', title: 'Sleep Survey Response', category: 'Sleep', date: '2024-11-30', status: 'processed' },
  { id: 4, type: 'Story', title: 'Judged Before I Speak', category: 'Housing', date: '2024-11-29', status: 'pending' },
  { id: 5, type: 'Poll', title: 'Safe Space Poll', category: 'Services', date: '2024-11-29', status: 'processed' },
];

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="admin-panel-page">
      <header className="admin-header">
        <h1>🔐 Admin Console</h1>
        <p>Manage submissions, surveys, and platform content</p>
      </header>

      <nav className="admin-nav">
        <button 
          className={`admin-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button 
          className={`admin-tab ${activeTab === 'submissions' ? 'active' : ''}`}
          onClick={() => setActiveTab('submissions')}
        >
          📝 Submissions
        </button>
        <button 
          className={`admin-tab ${activeTab === 'surveys' ? 'active' : ''}`}
          onClick={() => setActiveTab('surveys')}
        >
          📋 Surveys
        </button>
        <button 
          className={`admin-tab ${activeTab === 'content' ? 'active' : ''}`}
          onClick={() => setActiveTab('content')}
        >
          📄 Content
        </button>
        <button 
          className={`admin-tab ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          ⚙️ Settings
        </button>
      </nav>

      <div className="admin-content">
        {activeTab === 'dashboard' && (
          <div className="admin-dashboard">
            <h2>Dashboard Overview</h2>
            
            <div className="admin-stats">
              <div className="admin-stat">
                <span className="stat-number">12</span>
                <span className="stat-label">Pending Review</span>
              </div>
              <div className="admin-stat">
                <span className="stat-number">217</span>
                <span className="stat-label">Total Stories</span>
              </div>
              <div className="admin-stat">
                <span className="stat-number">156</span>
                <span className="stat-label">Survey Responses</span>
              </div>
              <div className="admin-stat">
                <span className="stat-number">45</span>
                <span className="stat-label">This Week</span>
              </div>
            </div>

            <div className="recent-section">
              <h3>Recent Submissions</h3>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Title/Description</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSubmissions.map(sub => (
                    <tr key={sub.id}>
                      <td><span className={`type-badge ${sub.type.toLowerCase()}`}>{sub.type}</span></td>
                      <td>{sub.title}</td>
                      <td>{sub.category}</td>
                      <td>{sub.date}</td>
                      <td><span className={`status-badge ${sub.status}`}>{sub.status}</span></td>
                      <td>
                        <button className="action-btn">View</button>
                        {sub.status === 'pending' && (
                          <>
                            <button className="action-btn approve">Approve</button>
                            <button className="action-btn reject">Reject</button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="quick-actions">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <button className="btn btn-primary">Export All Data</button>
                <button className="btn btn-secondary">Generate Report</button>
                <button className="btn btn-secondary">Send Notification</button>
                <button className="btn btn-secondary">View Analytics</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'submissions' && (
          <div className="admin-submissions">
            <h2>Manage Submissions</h2>
            <div className="filters-bar">
              <select className="form-select">
                <option>All Types</option>
                <option>Stories</option>
                <option>Survey Responses</option>
                <option>Poll Responses</option>
              </select>
              <select className="form-select">
                <option>All Status</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
              <select className="form-select">
                <option>All Categories</option>
                <option>Sleep</option>
                <option>Shelter</option>
                <option>Housing</option>
                <option>Services</option>
              </select>
              <input type="search" placeholder="Search..." className="form-input" />
            </div>
            <div className="placeholder-content">
              <p>📋 Full submission management interface would appear here</p>
              <p>Features: Bulk actions, tagging, moderation queue, export options</p>
            </div>
          </div>
        )}

        {activeTab === 'surveys' && (
          <div className="admin-surveys">
            <h2>Survey Management</h2>
            <div className="survey-tools">
              <button className="btn btn-primary">+ Create New Survey</button>
              <button className="btn btn-secondary">Import Questions</button>
            </div>
            <div className="placeholder-content">
              <p>📊 Survey builder and management would appear here</p>
              <p>Features: Drag-and-drop form builder, response analytics, conditional logic</p>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="admin-content-mgmt">
            <h2>Content Management</h2>
            <div className="placeholder-content">
              <p>📄 CMS for managing site content would appear here</p>
              <p>Features: Page editor, story approval, public gallery curation</p>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="admin-settings">
            <h2>Platform Settings</h2>
            <div className="settings-sections">
              <div className="settings-section">
                <h3>Privacy & Security</h3>
                <label className="setting-item">
                  <input type="checkbox" defaultChecked />
                  <span>Require anonymous submissions by default</span>
                </label>
                <label className="setting-item">
                  <input type="checkbox" defaultChecked />
                  <span>Encrypt all contact information</span>
                </label>
                <label className="setting-item">
                  <input type="checkbox" />
                  <span>Require admin approval for public stories</span>
                </label>
              </div>
              
              <div className="settings-section">
                <h3>Notifications</h3>
                <label className="setting-item">
                  <input type="checkbox" defaultChecked />
                  <span>Email alerts for new submissions</span>
                </label>
                <label className="setting-item">
                  <input type="checkbox" />
                  <span>Daily summary report</span>
                </label>
              </div>

              <div className="settings-section">
                <h3>User Management</h3>
                <button className="btn btn-secondary">Manage Admin Users</button>
                <button className="btn btn-secondary">View Access Logs</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
