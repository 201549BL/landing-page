import React, { useContext, createContext } from "react";

const NotificationsContext = createContext();

const useNotificationsContext = () => useContext(NotificationsContext);

const useNotifications = () => {
  return { NotificationsContext, useNotificationsContext };
};

export default useNotifications;
