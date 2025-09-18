import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "todos-react-v1";

export function useTodos() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // persiste toda vez que a lista mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function add(text) {
    const value = String(text || "").trim();
    if (!value) return;
    setTodos((prev) => [{ id: Date.now(), text: value, done: false }, ...prev]);
  }

  function remove(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function toggle(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  // atualizar texto (edição inline)
  function update(id, newText) {
    const value = String(newText || "").trim();
    if (!value) return;
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, text: value } : t)));
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.done));
  }

  const remaining = useMemo(() => todos.filter((t) => !t.done).length, [todos]);

  return { todos, add, remove, toggle, update, clearCompleted, remaining };
}
