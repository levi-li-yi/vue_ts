<template>
	<div class="sys_page_container">
		<nav-bar @submitSuccess="submitSuccess"/>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import NavBar from './NavBar.vue'

@Component({
	components: {
    NavBar
	}
})
export default class Layout extends Vue{
  
  private submitSuccess(value: string) {
    console.log(value);
  }
}
</script>

<style lang="scss">
	.sys_page_container{
		min-height: calc(100vh - 66px);
		background-color: #f9f9f9;
	}
</style>