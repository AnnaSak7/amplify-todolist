import {
  Center,
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { TodoItem } from "./TodoItem";

const TodoList: React.FC = () => {
  const todoList = [
    { id: "aaa", content: "kkkkk", isDone: true },
    { id: "bbb", content: "lllll", isDone: false },
    { id: "ccc", content: "mmmmm", isDone: true },
    { id: "ddd", content: "nnnnn", isDone: true },
    { id: "eee", content: "ooooo", isDone: false },
    { id: "fff", content: "ppppp", isDone: true },
    { id: "ggg", content: "qqqqq", isDone: false },
    { id: "hhh", content: "rrrrr", isDone: true },
    { id: "iii", content: "sssss", isDone: false },
    { id: "jjj", content: "ttttt", isDone: true },
  ];
  return (
    <Flex flexDir="column" align="center">
      <Center mb={8}>
        <Heading mt={5}>TodoList</Heading>
      </Center>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        align="stretch"
        w={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw" }}
        border="2px"
        borderColor="gray.300"
        borderRadius="md"
        p={4}
        maxH="65vh"
        overflow="scroll"
      >
        {todoList.length === 0 ? (
          <Text align="center" fontWeight="bold" fontSize="lg">
            No Todo
          </Text>
        ) : (
          todoList.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              content={item.content}
              isDone={item.isDone}
            />
          ))
        )}
      </VStack>
    </Flex>
  );
};

export default TodoList;
