<template>
	<div class="sys_page_container">
		<el-container id="mes_container" v-loading="saveState">
			<el-header height="50px">
				<!--navbar-->
				<NavBar></NavBar>
			</el-header>
			<el-container class="bottom_container">
				<el-aside>
				</el-aside>
				<!--aside-->
				<el-container class="main-container">
					<el-header height="40px">
						<!--tabsbar-->
					</el-header>
					<el-main>
						<!--AppMain-->
						<AppMain></AppMain>
					</el-main>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import AppMain from './components/AppMain';
import NavBar from './components/NavBar.vue'

@Component({
	components: {
    AppMain,
    NavBar
	}
})
export default class Layout extends Vue{
  /*data*/
	private saveState: boolean = false; 页面是否加载中
  
  private submitSuccess(value: string) {
    console.log(value);
  }
}
</script>

<style lang="scss">
	html, body, .el-container, .el-aside, .app-main {
		height: 100%;
	}
	.bottom_container{
		height: calc(100% - 50px);
	}
	.el-main{
		height: calc(100% - 40px);
	}
	body {
		min-width: 1920px;
		overflow-x: auto;
	}
	.fixed_top_56{
		height: calc(100% - 56px);
		box-sizing: border-box;
		overflow: auto;
	}
	.el-aside {
		z-index: 999;
	}
	.el-picker-panel{
		.el-date-table td.in-range div{
			background-color: #b2e8ff;
			&:hover{
				background-color: #b2e8ff;
			}
		}
	}
	.el-input__inner::-webkit-input-placeholder{
		color: #bbbdc4;
		font-size: 14px;
	}
	#mes_container {
		.el-main {
			padding: 0;
		}
		.el-header {
			padding: 0;
		}
	}
	.main_container{
		position: relative;
		overflow-x: hidden;
	}
</style>