var router=new VueRouter({
		routes:[
			{
				path:"/",
				beforeEnter:function(to, from, next){//跳转页面之前触发
			        //console.log(to, from, next);
			        next();//跳转过去
			    },
				component:{
					template:`<transition name="fade">
								<div id="index">
									<h1 id="company">
								        <span class="fl">李卫敏</span>
								        <span class="fr">广东星会奔驰有限公司</span>
								    </h1>
								    <div id="ad">
								        <a href="#"><img src="images/1.jpg" /></a>
								    </div>
								    <ul id="nav" class="clearfix">
								        <li><router-link to="sellUrl">卖车</router-link></li>
								        <li><router-link to="mysellUrl">我的卖车</router-link></li>
								        <li><router-link to="buyUrl">买车</router-link></li>
								        <li><a href="myBuy.html">我的买车</a></li>
								        <li><a href="buyAndSell.html">委托买卖</a></li>
								        <li><a href="system.html">系统</a></li>
								    </ul>
								    <div id="indexTel"><a href="tel:4006070751">客服电话：4006-0707-51</a></div>
								</div>
							</transition>`,
					data:function(){
						return {
							sellUrl:"/sell",
							mysellUrl:"/mySell",
							buyUrl:"/buy"
						}
					}
				}

			},
			{
				path:"/home/:num",
				beforeEnter:function(to, from, next){//跳转页面之前触发
			        //console.log(to, from, next);
			        next();//跳转过去
			    },
				component:{
					props:{
					 	aa:{
					 		type:String,//验证类型
					 		default:"aa的值"
					 	}
					},
					template:"<div @click='clickFunCC($route)'>{{ home }} {{ aa }} {{ $route.params.num }}</div>",
					methods:{//方法
						clickFunCC:function(a){
							console.log(a,"000");
						}
					},
					data:function(){
						return {
							home:"这是home"
						}
					}
				}
			},
			{
				path:"/list",
				component:{
					template:`
						<transition name="fade">
							<div>
								<button @click="show=!show">点击</button>
							    <transition name="fade">
							      <div v-if="show">...</div>
							    </transition>
						    </div>
					    </transition>
					  `,//"#list-template",
					data:function(){
						return {
							list:"888",
							show:true
						}
					}
				}
			}
		]
});


var vm=new Vue({
	router:router,
	el:"#app"//作用范围
});