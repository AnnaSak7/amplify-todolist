import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { BsFillTrashFill } from "react-icons/bs";
import { useAppDispatch } from "../../stores/hooks";
import { deleteTodoApi, updateTodoApi } from "../../stores/slices/todo/todoAPI";

type Props = {
  id: string;
  content: string;
  isDone: boolean;
};

export const TodoItem: React.FC<Props> = ({ id, content, isDone }) => {
  const dispatch = useAppDispatch();
  const handleUpdate = async () => {
    try {
      const switchIsDone = !isDone;
      const data = { id, isDone: switchIsDone };
      await updateTodoApi(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async () => {
    try {
      const data = { id };
      await deleteTodoApi(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex w="100%" align="center" justify="space-between">
      <Flex align="center">
        <Icon
          as={isDone ? RiCheckboxCircleFill : RiCheckboxBlankCircleLine}
          color="teal"
          cursor="pointer"
          // h = 4px * 6 = 24px
          h={6}
          mr={2}
          w={6}
          onClick={handleUpdate}
        />
        <Text fontSize="xl">{content}</Text>
      </Flex>
      <Icon
        as={BsFillTrashFill}
        color="red.300"
        cursor="pointer"
        h={5}
        w={5}
        onClick={handleDelete}
      />
    </Flex>
  );
};
