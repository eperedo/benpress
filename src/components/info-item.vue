<template>
	<article class="info-item">
		<div class="logo">
			<slot></slot>
		</div>
		<div>
			<p class="title">
				{{title}}
			</p>
			<p class="description">
				{{description}}
			</p>
		</div>
	</article>
</template>

<script>
export default {
	name: 'info-item',
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.info-item {
	display: flex;
	justify-content: center;
	margin-bottom: 76px;

	.logo {
		margin-right: 38.5px;
	}
}

.description {
	color: map-get($colors, grey-description);
	font-family: Arial;
	font-size: 13px;
	line-height: 1.46;
	text-align: left;
}

.title {
	color: map-get($colors, grey-title);
	font-family: Georgia;
	font-size: 20px;
	font-weight: bold;
	text-align: left;
}

@media only screen and (max-device-width: 667px) {
	.info-item {
		flex-direction: column;
	}
}
</style>
