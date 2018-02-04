<template>
	<section class="home">
		<binpress-logo />
	</section>
</template>

<script>
import binpressLogo from './binpress-logo';

export default {
	name: 'home',
	components: {
		binpressLogo,
	},
};
</script>

<style lang="scss" scoped>
.home {
	background-color: #319ae7;
}
</style>
