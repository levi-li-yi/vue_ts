<template>
	<section>
		<keep-alive>
			<router-view if="$route.meta.keepAlive"/>
		</keep-alive>
		<router-view if="!$route.meta.keepAlive"/>
	</section>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class AppMain extends Vue{
}
</script>

<style scoped>

</style>