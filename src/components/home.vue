<template>
	<section class="home">
		<binpress-logo />
		<binpress-title />
		<store-logo />
		<!-- <img src="header-icon.svg" /> -->
	</section>
</template>

<script>
import binpressLogo from './binpress-logo';
import binpressTitle from './binpress-title';
import storeLogo from './store-logo';

export default {
	name: 'home',
	components: {
		binpressLogo,
		binpressTitle,
		storeLogo,
	},
};
</script>

<style lang="scss" scoped>
.home {
	background-color: #319ae7;
}
</style>
