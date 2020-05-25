Component({
  data: {
    show: false,
    buy:false
  },
  properties: {
    image: {
      type:String,
      value:''
    },
    price: {
      type:Number,
      value:0
    }
  },
  methods: {
    onClose() {
      this.setData({ show: false });
    },
    onBuyClose() {
      this.setData({ buy: false });
    },
    showPopup() {
      this.setData({ show: true });
    },
    showBuyPop() {
      this.setData({ buy: true });
    },
   
  },
  options: {
    styleIsolation: 'apply-shared'
  },
 
})