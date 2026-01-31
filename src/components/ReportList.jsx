import React, { useState } from 'react';

export default function ReportList({ reports, onView, onEdit, onDelete }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredReports = reports.filter(report =>
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container fade-in" style={{ padding: '2rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem' }}>All Reports</h2>
                <input
                    type="text"
                    placeholder="Search reports..."
                    className="input"
                    style={{ maxWidth: '300px' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {filteredReports.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                    <p>No reports found. Create one to get started.</p>
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {filteredReports.map(report => (
                        <div key={report.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{
                                    background: 'rgba(99, 102, 241, 0.2)',
                                    color: 'var(--primary)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase'
                                }}>
                                    {report.type}
                                </span>
                                <span style={{ float: 'right', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                    {report.date}
                                </span>
                            </div>

                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>{report.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
                                by {report.author}
                            </p>

                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                                <button
                                    className="btn btn-secondary"
                                    style={{ flex: 1, padding: '0.5rem' }}
                                    onClick={() => onView(report.id)}
                                >
                                    View
                                </button>
                                <button
                                    className="btn btn-secondary"
                                    style={{ padding: '0.5rem' }}
                                    onClick={() => onEdit(report.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    style={{ padding: '0.5rem' }}
                                    onClick={() => {
                                        if (window.confirm('Are you sure you want to delete this report?')) {
                                            onDelete(report.id);
                                        }
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
