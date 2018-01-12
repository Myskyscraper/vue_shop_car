1:cnpm init (node的安装：来实现package.json)

2：建文件/夹(css js data img index)

3:main.js：
		3-1:   创建 vue

		3-2：  各个状态 data  mounted(this.show()) methods(axios)
		

	vm = new Vue({
		el:"#app",
		data:{
			test：'vue',
			shopList:
		},
		mounted:{
			var _this = this;
			this.$nextTick(function(){
			_this.show()
		}),

		filters: {
			formMoney: function(value) {
				var values = "￥" + value.toFixed(2);
				return values;
			}
		},

		methods:{
			show:function(){
				axios.get('').then(function(){
					------------
				})
			}
		},

	})

4:html :


	4-1：实际计算值：{{item.productPrize}}

	4-2：{{item.productPrize| formMoney}}

	4-3: v-for(item in shopList)

	4-4: v-bind:class="{active:isActive}" 

	4-5: v-on:click="add(item)" //会传入当前数组的内容

	4-6：中转一下的 this.delpax = item;

	4-7: 删除 this.shopList.indexOf(this.delpax);

	4-8: 添加一个属性 this.$set(item, "check",true);

	4-9: this.shopList.forEach(function(item){
			if(item.check){
				_this.toAllMon +=item.productPrice*item.productQuant; 
			}
		})



	wrong : 
	1：this.shopList 	处理那尾数的项时候	

	2：filters:

	3：传参改变参数的 中转

	4：a 标签存在有问题的；

	5：splice()

	6:return 是结束符

