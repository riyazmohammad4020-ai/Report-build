import React, { useState, useEffect } from 'react';

export default function ReportForm({ onSubmit, initialData = null, onCancel }) {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        date: new Date().toISOString().split('T')[0],
        organization: '',
        department: '',
        type: 'Project Report',
        objectives: '',
        summary: '',
        findings: '',
        conclusion: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = 'Report Title is required';
        if (!formData.author.trim()) newErrors.author = 'Author Name is required';
        if (!formData.organization.trim()) newErrors.organization = 'Organization is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <div className="card fade-in" style={{ maxWidth: '800px', margin: '2rem auto' }}>
            <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                {initialData ? 'Edit Report' : 'Create New Report'}
            </h2>

            <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

                    <div className="input-group" style={{ gridColumn: 'span 2' }}>
                        <label className="label">Report Title</label>
                        <input
                            className="input"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g. Analysis of AI Trends"
                        />
                        {errors.title && <span style={{ color: 'var(--danger)', fontSize: '0.8rem' }}>{errors.title}</span>}
                    </div>

                    <div className="input-group">
                        <label className="label">Author / Student Name</label>
                        <input
                            className="input"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            placeholder="John Doe"
                        />
                        {errors.author && <span style={{ color: 'var(--danger)', fontSize: '0.8rem' }}>{errors.author}</span>}
                    </div>

                    <div className="input-group">
                        <label className="label">Report Date</label>
                        <input
                            type="date"
                            className="input"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label className="label">Organization / Institution</label>
                        <input
                            className="input"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="e.g. University of Tech"
                        />
                        {errors.organization && <span style={{ color: 'var(--danger)', fontSize: '0.8rem' }}>{errors.organization}</span>}
                    </div>

                    <div className="input-group">
                        <label className="label">Department / Domain</label>
                        <input
                            className="input"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            placeholder="e.g. Computer Science"
                        />
                    </div>

                    <div className="input-group">
                        <label className="label">Report Type</label>
                        <select
                            className="input"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <option>Project Report</option>
                            <option>Research Paper</option>
                            <option>Lab Report</option>
                            <option>Assignment</option>
                            <option>Case Study</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="input-group" style={{ gridColumn: 'span 2' }}>
                        <label className="label">Objectives</label>
                        <textarea
                            className="input"
                            name="objectives"
                            value={formData.objectives}
                            onChange={handleChange}
                            placeholder="List the main goals of this report..."
                            style={{ minHeight: '80px' }}
                        />
                    </div>

                    <div className="input-group" style={{ gridColumn: 'span 2' }}>
                        <label className="label">Data / Content Summary</label>
                        <textarea
                            className="input"
                            name="summary"
                            value={formData.summary}
                            onChange={handleChange}
                            placeholder="Brief summary of the content..."
                        />
                    </div>

                    <div className="input-group" style={{ gridColumn: 'span 2' }}>
                        <label className="label">Findings / Results</label>
                        <textarea
                            className="input"
                            name="findings"
                            value={formData.findings}
                            onChange={handleChange}
                            placeholder="What were the key outcomes?"
                        />
                    </div>

                    <div className="input-group" style={{ gridColumn: 'span 2' }}>
                        <label className="label">Conclusion</label>
                        <textarea
                            className="input"
                            name="conclusion"
                            value={formData.conclusion}
                            onChange={handleChange}
                            placeholder="Final thoughts and conclusion..."
                        />
                    </div>

                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'flex-end' }}>
                    <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Save Report</button>
                </div>
            </form>
        </div>
    );
}
