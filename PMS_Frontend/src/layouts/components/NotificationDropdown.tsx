import React from "react";

const notifications = [
  { id: 1, message: "Notification 1." },
  { id: 2, message: "Notification 2'." },
  { id: 3, message: "Notification 3." },
];

const NotificationDropdown: React.FC<{
  notificationsRef: React.RefObject<HTMLDivElement>;
}> = ({ notificationsRef }) => {
  return (
    <div
      ref={notificationsRef}
      className="absolute right-0 mt-14 me-16 w-64 bg-white border rounded shadow-md z-50"
    >
      <div className="p-3 font-semibold text-gray-700 border-b">
        Notifications
      </div>
      <div className="p-3">
        {notifications.length > 0 ? (
          notifications.map((n) => (
            <div key={n.id} className="mb-2 text-sm text-gray-600">
              {n.message}
            </div>
          ))
        ) : (
          <div className="text-sm text-gray-600">No new notifications</div>
        )}
      </div>
    </div>
  );
};

export default NotificationDropdown;
