import type { ITodo } from "./model/types";

import { useTodoStore } from "./model/store";
import TodoItem from "./ui/TodoItem.vue";

export { useTodoStore, TodoItem };
export type { ITodo };
