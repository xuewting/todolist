<template>
  <div class="item-box">
    <a-checkbox
    class="checkbox"
    :class="{ finished: finished}"
    v-model="finished"
    @change="finishItem">
      {{detail.value}}
    </a-checkbox>
    
    <span class="item-close">
        <a-button type="danger" @click="deleteItem">取消</a-button>
      </span>
  </div>
</template>

<script>
export default {
  name: 'todo-item',
  props: {
    detail: {},
  },
  data() {
    return {
      finished: this.detail.finished,
    };
  },
  methods: {
    finishItem() {
      this.$emit('finishedCount', this.finished, this.detail.id)
    },
    deleteItem() {
      this.$emit('deleteItem', this.detail.id)
    }
  },
};
</script>

<style lang="less" scoped>
.item-box {
  display: block;
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
