import React, { useContext, createContext, useState, useEffect } from "react";
import Notifications from "../notifications";

const NotificationsContext = createContext();

export const useNotificationsContext = () => useContext(NotificationsContext);

const NotificationsContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const removeNotification = (notification) => {
    setNotifications((prev) => {
      return prev.filter((p) => p.id !== notification.id);
    });
  };

  const addNotification = (notification) => {
    if (notifications.length > 2) return;
    setNotifications((prev) => [...prev, notification]);
    setInterval(() => {
      removeNotification(notification);
    }, notification.duration + notification.life);
  };

  return (
    <NotificationsContext.Provider
      value={{ addNotification, removeNotification }}
    >
      <Notifications notifications={notifications} />
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsContextProvider;
