import { DataStore } from "aws-amplify";
import { Todo } from "../../../models";

// create todo
export const createTodoApi = async (data: { content: string }) => {
  const { content } = data;
  try {
    await DataStore.save(
      new Todo({
        content,
        isDone: false,
      })
    );
  } catch (error) {
    throw error;
  }
};

// get todoList
export const fetchTodoListApi = async () => {
  try {
    const todoList = await DataStore.query(Todo);
    return todoList;
  } catch (error) {
    throw error;
  }
};

//
