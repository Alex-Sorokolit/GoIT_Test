import React, { useEffect, useState } from "react";
import { getUsers } from "api/api";
import Card from "./Card";
import css from "./List.module.css";
import { useLocalStorage } from "hooks/useLocalstorage";

const List = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useLocalStorage("users");

  useEffect(() => {
    // Відхилення запиту
    const controller = new AbortController();

    async function fetchData() {
      setIsLoading(true);
      setError(null);

      // Запит на бекенд
      try {
        const usersData = await getUsers(controller);

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

    if (users.length === 0) {
      fetchData();
    }

    // fetchData();

    // Відхиляє запит при розмонтуванні елементу
    return () => {
      controller.abort();
    };
  }, [setUsers, users.length]);

  // додаємо підписку
  const subscribe = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, followers: user.followers + 1, isSubscribed: true };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  // видаляємо підписку
  const unsubscribe = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, followers: user.followers - 1, isSubscribed: false };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  if (!users) {
    return null;
  }

  return (
    <ul className={css.list}>
      {users.length > 0 &&
        users.map((user) => (
          <li key={user.id}>
            <Card user={user} subscribe={subscribe} unsubscribe={unsubscribe} />
          </li>
        ))}
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </ul>
  );
};

export default List;
