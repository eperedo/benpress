<template>
	<button type="button" class="binpress-button" @click="activate">
		Activate My Account
	</button>
</template>

<script>
function activate() {
	window.open('https://resume.eperedo.com');
}

export default {
	name: 'binpress-activate-button',
	methods: {
		activate,
	},
};
</script>

<style scoped>
.binpress-button {
	background-color: #115d95;
	border: none;
	border-radius: 40px;
	color: #fff;
	font-family: Arial;
	font-size: 11px;
	font-weight: bold;
	letter-spacing: 0.9px;
	margin-bottom: 47px;
	padding: 20px 54.5px 18px 54.5px;
	text-align: center;
	text-transform: uppercase;
	text-decoration: none;
}
</style>
