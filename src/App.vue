<template>
  <div id="app">
    <!--phone screen-->
		<div id="phoneScreen">
    <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  body{
  background: #000000;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
}
#phoneScreen {
	width: 320px;
	min-width: 320px;
	height: 620px;
	min-height: 620px;
  background-color: #3C3C3C;
	color: #ffffff;
	margin: 0 auto;
	border: 10px solid #585858;
	border-radius: 30px;
}
</style>
