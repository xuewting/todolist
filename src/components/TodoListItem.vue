<template>
  <div class="item-box">
    <a-checkbox
      v-model="detail.done"
      class="checkbox"
      :class="{ finished: detail.done }"
      @change="changeItemState(detail.id)"
    >
      {{ detail.value }}
    </a-checkbox>

    <a-button type="danger" @click="deleteItem(detail.id)"> 取消 </a-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'todo-list-item',
  props: {
    detail: {}
  },
  methods: {
    ...mapMutations(['changeItemState', 'deleteItem'])
  }
};
</script>

<style lang="less" scoped>
.item-box {
  display: block;
  width: 100%;
  text-align: left;
  .checkbox {
    font-size: 25px;
  }
}
.finished {
  color: lightgray;
  text-decoration: line-through;
}
</style>
