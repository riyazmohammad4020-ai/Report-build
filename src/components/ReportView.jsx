import React from 'react';

export default function ReportView({ report, onBack }) {
    if (!report) return null;

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="container fade-in" style={{ padding: '2rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }} className="no-print">
                <button
                    className="btn btn-secondary"
                    onClick={onBack}
                >
                    ← Back to List
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => window.print()}
                >
                    🖨️ Print Report
                </button>
            </div>

            <div className="card" style={{ background: 'white', color: '#1e293b', padding: '5rem', maxWidth: '900px', margin: '0 auto', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', marginBottom: '1rem', fontSize: '0.9rem' }}>
                        {report.organization}
                    </h4>
                    <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
                        {report.title}
                    </h1>
                    <div style={{ display: 'inline-block', background: '#e0f2fe', color: '#0369a1', padding: '0.5rem 1.5rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {report.type}
                    </div>
                </div>

                {/* Meta */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem', textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '3rem' }}>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Prepared By</span>
                        <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#334155' }}>{report.author}</span>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Department</span>
                        <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#334155' }}>{report.department}</span>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Date</span>
                        <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#334155' }}>{formatDate(report.date)}</span>
                    </div>
                </div>

                {/* Table of Contents */}
                <div style={{ marginBottom: '5rem', background: '#f8fafc', padding: '2rem', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Contents</h3>
                    <ul style={{ listStyle: 'none', padding: 0, color: '#475569', fontSize: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <a href="#section-1" style={{ color: 'inherit', textDecoration: 'none' }}>1. Objectives</a>
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>2. Data Summary</li>
                        <li style={{ marginBottom: '0.5rem' }}>3. Findings & Results</li>
                        <li>4. Conclusion</li>
                    </ul>
                </div>

                {/* Content */}
                <div className="report-content">
                    <section id="section-1" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#0f172a', fontWeight: 700 }}>1. Objectives</h2>
                        <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', color: '#334155', fontSize: '1.1rem' }}>{report.objectives || 'No objectives specified.'}</p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#0f172a', fontWeight: 700 }}>2. Data Summary</h2>
                        <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', color: '#334155', fontSize: '1.1rem' }}>{report.summary || 'No summary provided.'}</p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#0f172a', fontWeight: 700 }}>3. Findings & Results</h2>
                        <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', color: '#334155', fontSize: '1.1rem' }}>{report.findings || 'No findings recorded.'}</p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#0f172a', fontWeight: 700 }}>4. Conclusion</h2>
                        <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', color: '#334155', fontSize: '1.1rem' }}>{report.conclusion || 'No conclusion provided.'}</p>
                    </section>
                </div>

                {/* Footer */}
                <div style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0', textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8' }}>
                    <p>Generated by StoryWeaver Report System • {new Date().getFullYear()}</p>
                </div>

            </div>
        </div >
    );
}
