import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

      const handleAddTodo = () => {
          if (newTodo.trim() !== "") {
                setTodos([...todos, newTodo]);
                      setNewTodo("");
                          }
                            };

                              const handleDeleteTodo = (index) => {
                                  setTodos(todos.filter((_, i) => i !== index));
                                    };

                                      return (
                                          <div>
                                                <h2>Todo List</h2>
                                                      <input
                                                              type="text"
                                                                      placeholder="Add new todo"
                                                                              value={newTodo}
                                                                                      onChange={(e) => setNewTodo(e.target.value)}
                                                                                              data-testid="todo-input"
                                                                                                    />
                                                                                                          <button onClick={handleAddTodo} data-testid="add-btn">
                                                                                                                  Add Todo
                                                                                                                        </button>
                                                                                                                              <ul data-testid="todo-list">
                                                                                                                                      {todos.map((todo, index) => (
                                                                                                                                                <li key={index}>
                                                                                                                                                            {todo}
                                                                                                                                                                        <button onClick={() => handleDeleteTodo(index)} data-testid="delete-btn">
                                                                                                                                                                                      Delete
                                                                                                                                                                                                  </button>
                                                                                                                                                                                                            </li>
                                                                                                                                                                                                                    ))}
                                                                                                                                                                                                                          </ul>
                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                