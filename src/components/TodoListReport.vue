<template>
  <div>
    <span>共{{count}}个代办事项，已完成{{finishedCount}}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "todo-list-report",
  computed: {
    ...mapState(['count', 'finishedCount'])
  }
}
</script>
