<template>
  <div>
    <span>共{{ todosCount }}个代办事项，已完成{{ doneTodosCount }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'todo-list-report',
  computed: {
    ...mapGetters(['todosCount', 'doneTodosCount'])
  }
};
</script>
