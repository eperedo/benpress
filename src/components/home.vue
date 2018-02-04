<template>
	<section class="home">
		<binpress-logo />
		<binpress-title />
		<store-logo />
		<binpress-activate-message />
		<binpress-activate-button />
	</section>
</template>

<script>
import binpressLogo from './binpress-logo';
import binpressTitle from './binpress-title';
import storeLogo from './store-logo';
import binpressActivateMessage from './binpress-activate-message';
import binpressActivateButton from './binpress-activate-button';

export default {
	name: 'home',
	components: {
		binpressActivateMessage,
		binpressActivateButton,
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
