import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { VStack } from "@chakra-ui/react";

const Main: React.FC = () => {
  return (
    <VStack spacing={4} align="stretch" p={8}>
      <TodoList />
      <AddTodo />
    </VStack>
  );
};

export default Main;
