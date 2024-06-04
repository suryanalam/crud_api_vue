<template>
  <header class="header-div">
      <h2 class="title">
        <slot name="title">Title</slot>
      </h2>
  </header>
</template>

<style scoped>
header {
  padding: 1rem 0;
  width: 100%;
  color: #fafafa;
  background-color: #356080;
}

.title{
  text-align: center;
}
</style>