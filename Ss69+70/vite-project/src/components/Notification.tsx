import React from 'react';

interface NotificationProps {
  message: string;
  action: string
}

const Notification: React.FC<NotificationProps> = ({ message, action }) => {
  if (action === 'add') {
    return <div className="alert alert-success" role="alert">{message}</div>;
  } else if (action === "delete") {
    return <div className="alert alert-danger" role="alert">{message}</div>;
  }
};

export default Notification;
