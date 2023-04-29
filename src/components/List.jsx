import React, { useEffect, useState } from "react";
import { getUsers } from "api/api";
import Card from "./Card";

const List = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Відхилення запиту
    const controller = new AbortController();

    async function fetchData() {
      setIsLoading(true);
      setError(null);

      // Запит на бекенд
      try {
        const usersData = await getUsers(controller);
        // console.log("usersData:", JSON.stringify(usersData, null, 2));

        // Перевірка чи є результати пошуку
        if (usersData.length === 0) {
          console.log("немає даних");
          setError("Щось пішло не так, спробуйте перезавантажити сторінку");
          return;
        }

        // Записуємо дані у стейт
        setUsers(usersData.data);
      } catch (error) {
        console.log("catch: ", error.message);
        setError("Щось пішло не так, перезавантажте сторінку");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    // Відхиляє запит при розмонтуванні елементу
    return () => {
      controller.abort();
    };
  }, []);

  if (!users) {
    return null;
  }

  return (
    <>
      <h1>List</h1>
      {users.length > 0 &&
        users.map((user) => (
          <li key={user.id}>
            <Card />
          </li>
        ))}
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default List;
