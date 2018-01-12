var vm = new Vue({
	el: '#wrap-con',

	data: {
		title: "hello message",
		productListName: '1111',
		shopList: '',
		productNum: '',
		selectFlag: true,
		checkAll: false,
		modeFlag: false,
		delIndex: null,
		delPro: '',
		totAllMon: 0
	},
	filters: {
		formMoney: function(value) {
			var values = "￥" + value.toFixed(2);
			return values;
		}
	},

	mounted: function() {

		var _this = this;

		this.$nextTick(function() {
			_this.cartView();
		})
	},

	methods: {

		show: function() {
			_this = this;
			this.totAllMon = 0;
			this.shopList.forEach(function(item) {
				if (item.check) {
					_this.totAllMon += item.productPrice * item.productQuantity;
				}

			})
		},

		cartView: function() {
			//this.title = "message hello"
			var _this = this;
			axios.get('./data/cartData.json').then(function(res) {
				_this.shopList = res.data.result.list;
				console.log(_this.shopList);
			})
		},

		changeNum: function(item, flag) {

			// 点击使v-model数目改变

			if (flag > 0) {

				item.productQuantity++;

			} else {

				item.productQuantity--;
				if (item.productQuantity < 0) {
					item.productQuantity = 0;
				}

			}

			this.caluAll();



		},

		selectProduct: function(item) {


			if (typeof item.check == "undefined") {

				this.$set(item, "check", true);
			} else {
				item.check = !item.check;
			}

			this.caluAll();
		},


		selectAll: function() {
			var _this = this;
			this.checkAll = !this.checkAll;

			if (this.checkAll) {

				this.shopList.forEach(function(item) {
					_this.$set(item, "check", true);
				})

			} else {
				this.shopList.forEach(function(item) {
					_this.$set(item, "check", false);
				})
			}

			this.caluAll();
		},


		showMode: function(item) {
			this.modeFlag = !this.modeFlag;
			this.delPro = item;
			this.delIndex = this.shopList.indexOf(item);
		},


		// 删除商品的方法

		dellProduct: function() {
			this.shopList.splice(this.delIndex, 1);
			this.modeFlag = !this.modeFlag;
			this.caluAll();
		},

		caluAll: function() {

			_this = this;
			this.totAllMon = 0;

			this.shopList.forEach(function(item) {

				if (item.check) {

					_this.totAllMon += item.productPrice * item.productQuantity;
				}
			})

		}

	}

})