import { useMemo, useState } from "react";
import { useTodos } from "./hooks/useTodos";

export default function App() {
  const { todos, add, remove, toggle, update, clearCompleted, remaining } =
    useTodos();

  // input de nova tarefa (controlado)
  const [text, setText] = useState("");

  // filtros: all | active | completed
  const [filter, setFilter] = useState("all");

  // estados de edição inline
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    add(text);
    setText("");
  }

  function startEdit(todo) {
    setEditingId(todo.id);
    setEditText(todo.text);
  }
  function commitEdit() {
    if (editingId == null) return;
    update(editingId, editText);
    setEditingId(null);
    setEditText("");
  }
  function cancelEdit() {
    setEditingId(null);
    setEditText("");
  }

  const filtered = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.done);
    if (filter === "completed") return todos.filter((t) => t.done);
    return todos;
  }, [todos, filter]);

  return (
    <main style={s.app}>
      <header style={s.header}>
        <h1>To-Do List (React)</h1>
        <span style={s.badge}>
          {remaining} {remaining === 1 ? "pendente" : "pendentes"}
        </span>
      </header>

      <form onSubmit={handleSubmit} style={s.row}>
        <input
          type="text"
          placeholder="Digite e pressione Enter"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={s.input}
        />
        <button type="submit" style={s.addBtn}>
          Adicionar
        </button>
      </form>

      <div style={s.toolbar}>
        <div style={s.filters}>
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{ ...s.chip, ...(filter === f ? s.chipActive : {}) }}
            >
              {f === "all" ? "Todas" : f === "active" ? "Ativas" : "Concluídas"}
            </button>
          ))}
        </div>
        <button
          onClick={clearCompleted}
          disabled={todos.every((t) => !t.done)}
          style={{
            ...s.clearBtn,
            opacity: todos.every((t) => !t.done) ? 0.5 : 1,
            cursor: todos.every((t) => !t.done) ? "not-allowed" : "pointer",
          }}
        >
          Limpar concluídas
        </button>
      </div>

      <ul style={s.list}>
        {filtered.map((todo) => (
          <li key={todo.id} style={s.item}>
            <label style={s.left}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggle(todo.id)}
              />

              {editingId === todo.id ? (
                <input
                  autoFocus
                  style={s.edit}
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={commitEdit}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") commitEdit();
                    if (e.key === "Escape") cancelEdit();
                  }}
                />
              ) : (
                <span
                  style={{ ...(todo.done ? s.done : {}) }}
                  onDoubleClick={() => startEdit(todo)}
                  title="Duplo clique para editar"
                >
                  {todo.text}
                </span>
              )}
            </label>

            <button onClick={() => remove(todo.id)} style={s.rmBtn}>
              Remover
            </button>
          </li>
        ))}

        {filtered.length === 0 && (
          <li style={s.empty}>Nada aqui. Adicione uma nova tarefa acima.</li>
        )}
      </ul>
    </main>
  );
}

/* estilos simples (pode trocar por CSS externo) */
const s = {
  app: {
    maxWidth: 720,
    margin: "40px auto",
    fontFamily: "system-ui, Arial, sans-serif",
    lineHeight: 1.5,
  },
  header: { display: "flex", alignItems: "center", justifyContent: "space-between" },
  badge: {
    background: "#ecfdf5",
    color: "#16a34a",
    padding: "4px 10px",
    borderRadius: 999,
    fontWeight: 700,
  },
  row: { display: "flex", gap: 8, margin: "12px 0" },
  input: { flex: 1, padding: "10px 12px", fontSize: 16, border: "1px solid #ddd", borderRadius: 8 },
  addBtn: { padding: "10px 12px", fontWeight: 700, cursor: "pointer", borderRadius: 8 },
  toolbar: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, gap: 8, flexWrap: "wrap" },
  filters: { display: "flex", gap: 8, flexWrap: "wrap" },
  chip: { padding: "6px 10px", borderRadius: 999, border: "1px solid #ddd", background: "#fff", cursor: "pointer" },
  chipActive: { outline: "2px solid #7c5cff" },
  clearBtn: { padding: "6px 10px", borderRadius: 8, border: "1px solid #f88", background: "#fff0f0", color: "#a00" },
  list: { listStyle: "none", padding: 0, display: "grid", gap: 8 },
  item: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 8 },
  left: { display: "flex", alignItems: "center", gap: 10 },
  edit: { border: "1px solid #ddd", borderRadius: 8, padding: "6px 8px", fontSize: 16, minWidth: 240 },
  done: { textDecoration: "line-through", color: "#888" },
  rmBtn: { padding: "6px 10px", cursor: "pointer", borderRadius: 8, border: "1px solid #f88", background: "#fff0f0", color: "#a00" },
  empty: { color: "#666", textAlign: "center", padding: 16, border: "1px dashed #ddd", borderRadius: 8 },
};
