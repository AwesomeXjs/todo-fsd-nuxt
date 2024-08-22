<script setup lang="ts">
  import { TodoItem, useTodoStore } from "@/entities/todo";
  import { useFilter } from "@/features/filter";
  import { useSortUtils } from "@/features/sort";
  import { useAppStore } from "@/shared/store";
  import { collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
  import type { ITodo } from "@/entities/todo";

  const { searchTodos } = useFilter();
  const { sortedAndFilteredTodos } = useSortUtils(searchTodos);
  const store = useAppStore();
  const todoStore = useTodoStore();
  const db = useFirestore();
  const auth = useFirebaseAuth();

  const isLoading = ref<boolean>(false);

  const getAllTodos = async <T extends ITodo>(user: any): Promise<T[]> => {
    try {
      isLoading.value = true;
      const q = query(collection(db, `users/${user.uid}/todos`), orderBy("title"));
      const listDocs = await getDocs(q);
      return listDocs.docs.map((doc) => doc.data() as T);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error);
      }
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(async () => {
    const user = await getCurrentUser();
    const data = await getAllTodos<ITodo>(user);
    todoStore.todos = [...data];
  });
</script>

<template>
  <div v-if="isLoading" class="text-center text-3xl font-semibold">Is Loading...</div>
  <div v-else class="empty-wrapper" v-show="sortedAndFilteredTodos?.length === 0">
    <div class="empty_todo_list">
      <img src="/detective.svg" alt="" />
      <h3>Empty...</h3>
    </div>
  </div>
  <div class="todo-list">
    <TransitionGroup name="todos">
      <TodoItem v-for="item in sortedAndFilteredTodos" :key="item.id" :todo="item" />
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
  .todo-list {
    max-width: 520px;
    margin: 0 auto;
    padding-top: 30px;
  }

  .todos-enter-active,
  .todos-leave-active {
    transition: all 0.5s ease;
  }
  .todos-enter-from,
  .todos-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .todos-move, /* apply transition to moving elements */
.todos-enter-active,
.todos-leave-active {
    transition: all 0.5s ease;
  }

  .todos-enter-from,
  .todos-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .empty_todo_list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .empty-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }
</style>
