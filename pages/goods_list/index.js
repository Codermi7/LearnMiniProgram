import {request} from '../../request/index.js'
import regeneratorRuntime from '../../lib/runtime/runtime.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid:0,
    page:1,
    goods_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.cid)
    this.setData({
      cid:options.cid
    })
    this.getGoodsList()
  },
  async getGoodsList() {
    let res = await request({url:'/goods/search',data:{cid:this.data.cid}})
    console.log(res.data.message.goods)
    let goods_list = res.data.message.goods.filter(val=>{
      return val.goods_small_logo!==''
    })

    this.setData({
      goods_list
    })
  },
  async addGoodsList(page){
    page += 1;
    let res = await request({url:'/goods/search',data:{cid:this.data.cid,pagenum:page}})
    let list = res.data.message.goods.filter(val=>{
      return val.goods_small_logo!==''
    })
    console.log(list)
    let goods_list = [...this.data.goods_list,...list]
    this.setData({
      goods_list,
      page
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.addGoodsList(this.data.page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})