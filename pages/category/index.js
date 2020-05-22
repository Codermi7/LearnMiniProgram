import {request} from '../../request/index.js'
import regeneratorRuntime from '../../lib/runtime/runtime.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList:[],
    categoryContent:[],
    //当前分类索引
    currentIndex:0,
    //滚动到顶部
    scrollTop:0
    
  },
  Cates:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 本地存储数据
    // this.getCategory()
    //1 获取本地存储数据
    const Cates = wx.getStorageSync("cates");
    if(!Cates){
      //不存在
      this.getCategory()
    }else {
      if(Date.now()-Cates.time>1000*10){
        this.getCategory()
      }else {
        console.log('可以使用旧数据')
        this.Cates = Cates.data
        let menuList = this.Cates.map(v=>v.cat_name)
        let categoryContent = this.Cates[0].children
        this.setData({
          menuList,
          categoryContent
        })
      }
    }
  },
 async getCategory() {
    // request({url:'/categories'}).then( res=> {
    //   console.log(res)
    //   this.Cates = res.data.message
    //   wx.setStorageSync("cates",{time:Date.now(),data:this.Cates})
    //   let menuList = this.Cates.map(v=>v.cat_name)
    //   let categoryContent = this.Cates[0].children
    //   this.setData({
    //     menuList,
    //     categoryContent
    //   })
    // })
    //使用es7 async await 来发送请求
    const res = await request({url:'/categories'});
    this.Cates = res.data.message
    wx.setStorageSync("cates",{time:Date.now(),data:this.Cates})
    let menuList = this.Cates.map(v=>v.cat_name)
    let categoryContent = this.Cates[0].children
    this.setData({
      menuList,
      categoryContent
    })

  },
  handleItem(e) {
    //解构赋值
    const {index} = e.currentTarget.dataset
    let categoryContent = this.Cates[index].children
    this.setData({
      currentIndex:index,
      categoryContent,
      scrollTop:0
    })
  },

})