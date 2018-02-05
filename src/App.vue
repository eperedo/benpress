<template>
	<div id="app">
		<home />
		<info />
		<div class="separator"></div>
		<p class="contact">
			Contact: info@binpress.com
		</p>
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

<style lang="scss">
#app {
	font-family: 'Georgia', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.separator {
	background-color: #d8d8d8;
	height: 1px;
	margin: 0 auto 37px auto;
	width: 100%;
}

.contact {
	color: map-get($colors, grey);
	font-family: Arial;
	font-size: 16px;
	margin: 0 auto 46px auto;
	height: 15px;
	width: 164px;
}
</style>
