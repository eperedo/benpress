<template>
	<div id="app">
		<home />
		<info />
	</div>
</template>

<script>
import home from './components/home';
import info from './components/info';

export default {
	name: 'app',
	components: {
		home,
		info,
	},
};
</script>

<style>
#app {
	font-family: 'Georgia', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
</style>
