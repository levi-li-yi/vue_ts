<template>
	<div class="sys_page_header">
		<input type="text" v-model="search.value">
		<p>{{search.value}}</p>
		<p>系统：{{sysToken}}</p>
		<p>home: {{homeState}}</p>
		<p>info:{{count}}</p>
		<button @click="submit">提交</button>
	</div>
</template>

<script lang="ts">
import {Vue, Prop, Component, Emit} from 'vue-property-decorator'
import {State, Getter, Action, namespace} from 'vuex-class'
/*vuex modules*/
import store from '@/store'
import {getModule} from 'vuex-module-decorators';
import Info from '@/store/home/info/index.ts'

interface Search {
  value: string
}

//const HomeModule = namespace('user');
//console.log(HomeModule.State);

@Component
export default class NavBar extends Vue{
  //@State('token') stateToken;
	//@Getter('token') getterToken;
	//@Action('token') setToken;
	//@HomeModule.State('homeState') public homeState: string;

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
	
	get homeState() {
    //console.log(this);
    //return this.homeState
	}
	
	get count() {
    const infos = getModule(Info);
    return infos.count
	}
	public created() {
    const infos = getModule(Info);
    console.log(infos.count);
  }
	
	public mounted() {
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