import React, { useEffect, useState } from "react";
// import Card from "./Card";
import { getUsers } from "api/api";

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Відхилення запиту
    const controller = new AbortController();

    // Отримуємо дані з бекенду
    async function fetchData() {
      try {
        const usersData = await getUsers(controller);
        console.log("usersData:", JSON.stringify(usersData, null, 2));
        setUsers(usersData);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();

    // Відхиляє запит при розмонтуванні елементу
    return () => {
      controller.abort();
    };
  }, [setUsers]);

  return (
    <>
      <h1>Hello!</h1>
      {users.length > 0 && <p>You have {users.length} unread messages.</p>}
    </>
  );
};

export default List;
