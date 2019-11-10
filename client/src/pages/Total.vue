<template>
  <div>
    <h2>total</h2>
    <p>访问服务器的次数为 {{ total }}</p>
  </div>
</template>
<script>
export default {
  name: "Total",
  data() {
    return {
      total: 0
    };
  },
  mounted() {
    this.getTotal();
  },
  methods: {
    getTotal() {
      this.$axios.get("/base/api/total").then(res => {
        if (res.data.errno === 0) {
          this.total = res.data.data.total;
        }
      });
    }
  }
};
</script>
<style lang="scss"></style>
