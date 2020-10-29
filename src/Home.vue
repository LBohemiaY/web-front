<template>
  <div id="home">
    <el-container>
    	
    	<base-header :activeIndex="activeIndex"></base-header>
		
		<!-- header上点击相应的item匹配到的路由组件将会展示到router-view当中 -->
		<router-view class="me-container"></router-view>

		<!-- footer为页面的下脚标 用于展示design等  -->
		<base-footer v-show="footerShow"></base-footer>
		  
	</el-container>
		
  </div>
  
</template>

<script>
import BaseFooter from '@/components/BaseFooter'
import BaseHeader from '@/views/baseheader/BaseHeader'

export default {
  name: 'Home',
  data (){
  	return {
  			activeIndex: '/',
  			footerShow:true
  	}
  },
  components:{
  	'base-header':BaseHeader,
  	'base-footer':BaseFooter
  },
  beforeRouteEnter (to, from, next){
  	 next(vm => {
    	vm.activeIndex = to.path
  	})
  },
  beforeRouteUpdate (to, from, next) {
	  if(to.path == '/'){
	  	this.footerShow = true
	  }else{
	  	this.footerShow = false
	  }
	  this.activeIndex = to.path
	  next()
	}
}
</script>

<style>

.me-container{
  margin: 100px auto 140px;
}
</style>
