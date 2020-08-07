<template>
  <div>
    <h1>This is an contant page</h1>
    <p>{{$route.params.msg}}</p>
    <p>{{$route.params.id}}</p>
    <p>{{$route.query.foo}}</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>