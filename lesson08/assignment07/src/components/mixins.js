export default {
	created: function () {
		console.log('border mixin')
	},
	data() {
		return {
			isHidden: false,
			myVal: true
		}
	},
	methods: {
		toggleShowHide() {
			this.isHidden = !this.isHidden;
		},
		myMethod() {
			var element = document.getElementById('noBorder');
			element.classList.toggle('addBorder');
			console.log('remove border button')
		}
	}
}
