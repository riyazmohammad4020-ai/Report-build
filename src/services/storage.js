const DB_KEY = 'storyweaver_reports_db';

const simpleId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

export const db = {
  getAll: () => {
    const data = localStorage.getItem(DB_KEY);
    return data ? JSON.parse(data) : [];
  },

  getById: (id) => {
    const reports = db.getAll();
    return reports.find(r => r.id === id);
  },

  create: (reportData) => {
    const reports = db.getAll();
    const newReport = {
      id: simpleId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...reportData
    };
    reports.unshift(newReport);
    localStorage.setItem(DB_KEY, JSON.stringify(reports));
    return newReport;
  },

  update: (id, updates) => {
    const reports = db.getAll();
    const index = reports.findIndex(r => r.id === id);
    if (index === -1) return null;
    
    reports[index] = { ...reports[index], ...updates, updatedAt: new Date().toISOString() };
    localStorage.setItem(DB_KEY, JSON.stringify(reports));
    return reports[index];
  },

  delete: (id) => {
    let reports = db.getAll();
    reports = reports.filter(r => r.id !== id);
    localStorage.setItem(DB_KEY, JSON.stringify(reports));
    return true;
  }
};
