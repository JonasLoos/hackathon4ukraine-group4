<template>
  <div>
    <nav
      className="relative w-full flex flex-wrap items-center justify-between py-1 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg"
    >
      <div
        className="container-fluid w-full flex flex-wrap items-center justify-between px-3"
      >
        <div className="container-fluid flex flex-col">
          <a className="text-sm text-black" href="#">contact</a>
          <a className="text-sm text-black" href="#">help us</a>
          <a className="text-sm text-black" href="#">Knolegebase</a>
        </div>
        <div className="bg-red-500">
          <div className="px-20 py-5">Logo</div>
        </div>
        <div className="flex">
          <div className="flex-row">
            <span className="fi fi-pl fib px-2"></span>
            <span className="fi fi-ua fib px-2"></span>
            <span className="fi fi-gr fib px-2"></span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
