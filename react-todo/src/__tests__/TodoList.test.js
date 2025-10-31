import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

test("renders input and button", () => {
  render(<TodoList />);
    const input = screen.getByTestId("todo-input");
      const button = screen.getByTestId("add-btn");
        expect(input).toBeInTheDocument();
          expect(button).toBeInTheDocument();
          });

          test("adds a new todo item", () => {
            render(<TodoList />);
              const input = screen.getByTestId("todo-input");
                const button = screen.getByTestId("add-btn");

                  fireEvent.change(input, { target: { value: "Learn React" } });
                    fireEvent.click(button);

                      const list = screen.getByTestId("todo-list");
                        expect(list).toHaveTextContent("Learn React");
                        });

                        test("deletes a todo item", () => {
                          render(<TodoList />);
                            const input = screen.getByTestId("todo-input");
                              const button = screen.getByTestId("add-btn");

                                fireEvent.change(input, { target: { value: "Task 1" } });
                                  fireEvent.click(button);

                                    const deleteButton = screen.getByTestId("delete-btn");
                                      fireEvent.click(deleteButton);

                                        const list = screen.getByTestId("todo-list");
                                          expect(list).not.toHaveTextContent("Task 1");
                                          });
                                          