<template>
	<p class="activate-message">
		To activate your account, we need to know you received this Email.
		Please click on the button to confirm that.
	</p>
</template>

<script>
export default {
	name: 'binpress-activate-message',
};
</script>

<style lang="scss" scoped>
.activate-message {
	color: map-get($colors, white);
	font-family: Arial;
	font-size: 16px;
	line-height: 2.15;
	margin: 60px auto 28px auto;
	text-align: center;
	width: 100%;
}
</style>
