<template>
	<div class="sys_header">
	</div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class NavBar extends Vue{
}
</script>

<style lang="scss">
	.sys_header{
		height: 50px;
		background-image: linear-gradient(90deg, #00b4ff 0%, #2196f3 99%), linear-gradient(#2196f3, #2196f3);
		background-blend-mode: normal, normal;
	}
</style>