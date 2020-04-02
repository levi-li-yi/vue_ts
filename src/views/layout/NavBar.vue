<template>
	<div class="sys_page_header">
		<input type="text" v-model="search.value">
		<p>{{search.value}}</p>
		<p>系统：{{sysToken}}</p>
		<button @click="submit">提交</button>
	</div>
</template>

<script lang="ts">
import {Vue, Prop, Component, Emit} from 'vue-property-decorator'
import {State, Getter, Action} from 'vuex-class'

interface Search {
  value: string
}

@Component
export default class NavBar extends Vue{
  //@State('token') stateToken;
	//@Getter('token') getterToken;
	//@Action('token') setToken;

  @State token
	@Action setToken
	
  @Prop({default: ''}) title: string;
  private search: Search = {
	  value: ''
	};
  
  get sysToken() {
    // return this.stateToken
    return this.token
	}
	
	mounted() {
    setTimeout(() => {
      //this.search.value = '123213'
		}, 1500)
	}
	@Emit('submitSuccess')
	submit() {
    const value = 'abc';
    this.setToken(value);
    return this.search.value
	}
}
</script>

<style lang="scss">
	.sys_page_header{
		height: 56px;
		width: 100%;
		position: fixed;
		left:0;
		top: 0;
		background-color: #fff;
		box-shadow: 0 2px 10px rgba(0,0,0,.05);
		z-index: 999;
	}
</style>