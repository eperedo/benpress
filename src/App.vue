<template>
	<div id="app">
		<home />
	</div>
</template>

<script>
import home from './components/home';

export default {
	name: 'app',
	components: {
		home,
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
