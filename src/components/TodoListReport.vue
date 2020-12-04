<template>
  <div>
    <span>共{{total}}个代办事项，已完成{{finishedcount}}</span>
  </div>
</template>

<script>
export default {
  name: "todo-list-report",
  props: {
    total: Number,
    finishedcount: Number
  }
}
</script>
