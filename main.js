var vm = new Vue({
	el: '#wrap-con',

	data: {
		title: "hello message",
		productListName: '1111'
	},

	mounted: function() {
		var _this = this;

		this.$nextTick(function() {
			_this.cartView();
		})
	},

	methods: {
		show: function() {
			console.log('ok');
		},
		cartView: function() {
			//this.title = "message hello"
			var _this = this;
			axios.get('./data/cartData.json').then(function(res) {
				_this.shopList = res.data.result.list;
				console.log(_this.productListName = _this.shopList[0].productName);
				_this.productListName = _this.shopList[0].productName;
			})

		}
	}

})