<template>
	<el-scrollbar>
		<el-menu class="sys_sidebar">
			<el-submenu index="/">
				<el-menu-item index="/p"></el-menu-item>
			</el-submenu>
		</el-menu>
	</el-scrollbar>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class SideBar extends Vue{
}
</script>

<style lang="scss">
	.sys_sidebar{
		width: 200px;
	}
</style>