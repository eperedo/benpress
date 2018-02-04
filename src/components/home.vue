<template>
	<section class="home">
		<binpress-logo />
		<binpress-title />
	</section>
</template>

<script>
import binpressLogo from './binpress-logo';
import binpressTitle from './binpress-title';

export default {
	name: 'home',
	components: {
		binpressLogo,
		binpressTitle,
	},
};
</script>

<style lang="scss" scoped>
.home {
	background-color: #319ae7;
}
</style>
