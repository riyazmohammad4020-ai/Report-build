import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ReportList from './components/ReportList';
import ReportForm from './components/ReportForm';
import ReportView from './components/ReportView';
import { db } from './services/storage';

function App() {
  const [view, setView] = useState('list'); // list, create, edit, view
  const [reports, setReports] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = () => {
    setReports(db.getAll());
  };

  const handleCreate = (data) => {
    db.create(data);
    loadReports();
    setView('list');
  };

  const handleUpdate = (data) => {
    db.update(selectedId, data);
    loadReports();
    setView('list');
    setSelectedId(null);
  };

  const handleDelete = (id) => {
    db.delete(id);
    loadReports();
    if (selectedId === id) {
      setView('list');
      setSelectedId(null);
    }
  };

  const handleEditInit = (id) => {
    setSelectedId(id);
    setView('edit');
  };

  const handleViewInit = (id) => {
    setSelectedId(id);
    setView('view');
  };

  const getActiveReport = () => {
    return reports.find(r => r.id === selectedId);
  };

  return (
    <div className="app">
      <Header onViewChange={(v) => {
        setView(v);
        setSelectedId(null);
      }} currentView={view} />

      <main style={{ minHeight: 'calc(100vh - 70px)' }}>
        {view === 'list' && (
          <ReportList
            reports={reports}
            onView={handleViewInit}
            onEdit={handleEditInit}
            onDelete={handleDelete}
          />
        )}

        {view === 'create' && (
          <ReportForm
            onSubmit={handleCreate}
            onCancel={() => setView('list')}
          />
        )}

        {view === 'edit' && (
          <ReportForm
            initialData={getActiveReport()}
            onSubmit={handleUpdate}
            onCancel={() => setView('list')}
          />
        )}

        {view === 'view' && (
          <ReportView
            report={getActiveReport()}
            onBack={() => setView('list')}
          />
        )}
      </main>
    </div>
  );
}

export default App;
