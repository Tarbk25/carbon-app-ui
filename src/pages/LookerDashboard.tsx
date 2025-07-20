import React from "react";
import { useAuth } from "../Context/AuthContext";

const LookerDashboard = () => {
  const { user } = useAuth();

  const hardcodedMap: Record<string, string> = {
    "user1@example.com": "user_A",
    "user2@example.com": "user_B",
    "admin@example.com": "admin",
  };

  const userEmail = user?.email ?? "";
  const userId = hardcodedMap[userEmail] || "";
  const isAdmin = userEmail === "admin@example.com";

  const ADMIN_LOOKER_URL =
    "https://lookerstudio.google.com/embed/u/1/reporting/4a735a43-c8d6-4269-98fb-d35324b41f47/page/gGRQF";

  const USER_LOOKER_BASE_URL =
    "https://lookerstudio.google.com/embed/u/1/reporting/4a735a43-c8d6-4269-98fb-d35324b41f47/page/gGRQF";

  const lookerUrl = isAdmin
    ? ADMIN_LOOKER_URL
    : `${USER_LOOKER_BASE_URL}?params=${encodeURIComponent(
        `{"df10":"include\uE0000\uE000IN\uE000${userId}"}`
      )}`;

  return (
    <iframe
      title="Looker Dashboard"
      width="100%"
      height="800"
      src={lookerUrl}
      style={{ border: "none" }}
      allowFullScreen
    />
  );
};

export default LookerDashboard;
