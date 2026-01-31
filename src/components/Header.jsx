import React from 'react';

export default function Header({ onViewChange, currentView }) {
    return (
        <nav style={{
            borderBottom: '1px solid var(--border)',
            background: 'var(--surface-transparent)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div className="container" style={{
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div
                    className="logo-area"
                    onClick={() => onViewChange('list')}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                    }}>S</div>
                    <h1 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.025em' }}>
                        StoryWeaver <span style={{ color: 'var(--primary)' }}>Reports</span>
                    </h1>
                </div>

                <div className="actions">
                    {currentView !== 'create' && (
                        <button className="btn btn-primary" onClick={() => onViewChange('create')}>
                            + New Report
                        </button>
                    )}
                    {currentView === 'create' && (
                        <button className="btn btn-secondary" onClick={() => onViewChange('list')}>
                            Cancel
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
