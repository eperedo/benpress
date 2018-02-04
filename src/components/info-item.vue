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
	margin-bottom: 76px;

	.logo {
		margin-right: 38.5px;
	}
}

.description {
	color: #7f7f7f;
	font-family: Arial;
	font-size: 13px;
	line-height: 1.46;
	text-align: left;
}

.title {
	color: #525252;
	font-family: Georgia;
	font-size: 20px;
	font-weight: bold;
	text-align: left;
}
</style>
