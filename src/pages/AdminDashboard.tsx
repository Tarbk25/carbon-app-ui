// src/pages/AdminDashboard.tsx
import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <iframe
        title="Admin Looker Dashboard"
        width="100%"
        height="800"
        src="https://lookerstudio.google.com/embed/u/1/reporting/4a735a43-c8d6-4269-98fb-d35324b41f47/page/gGRQF"
        style={{ border: "none" }}
        allowFullScreen
      />
    </div>
  );
};

export default AdminDashboard;
