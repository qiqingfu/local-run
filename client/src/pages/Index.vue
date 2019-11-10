<template>
  <div>
    <h2>Index</h2>
    <ul>
      <li v-for="item in queryList" :key="item.id">
        <span>{{ item.key }}: </span>
        <span>{{ item.val }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      list: null
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios
        .get("/erp/api/list")
        .then(res => {
          if (res.data.errno === 0) {
            this.list = res.data.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    queryList() {
      let res = [];
      if (this.list) {
        Object.keys(this.list).forEach((key, index) => {
          res.push({
            id: index,
            key,
            val: this.list[key]
          });
        });
      }

      return res;
    }
  }
};
</script>
<style lang="scss"></style>
