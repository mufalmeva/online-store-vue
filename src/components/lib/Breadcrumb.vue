<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item" :key="index" v-for="(routeObject, index) in routeRecords">
      <span class="active" v-if="isLast(index)">{{getName(routeObject) | capitalize }}</span>
      <router-link :to="routeObject.to" v-else>
        {{ getName(routeObject) | capitalize }}
      </router-link>
    </li>
  </ol>
</template>

<script>
  export default {
    name: 'Breadcrumbs',
    props: {
      list: {
        type: Array,
        required: true,
        default: () => []
      }
    },
    computed: {
      routeRecords: function () {
        this.list.unshift({
          path: '/',
          to: this.$router.options.routes[0],
          label: 'Home',
          name: 'Home'
        });
        return this.list.filter((route) => typeof route.to !='undefined' && (route.to.name || route.to.meta.label))
      },
    },
    methods: {
      getName (item) {
        return (item.label || (item.to.meta && item.to.meta.label ? item.to.meta.label : item.to.name)).toString()
      },
      isLast (index) {
        return index === this.list.length - 1
      }
    },
  }
</script>
<style>
  .breadcrumb{
    background-color: #f8f8f8;
  }
</style>