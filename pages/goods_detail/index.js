import {request} from '../../request/index.js'
import regeneratorRuntime from '../../lib/runtime/runtime.js'
import { GoodsInfo } from '../../utils/object.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_id:0,
    pics:[],
    attrs:[],
    goods_introduce:'',
    goods_name:'',
    goods_price:0,
    goods_info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goods_id:options.goods_id
    })
    this.getGoodsDeatil()
  },
  async getGoodsDeatil(){
    let goods_id = this.data.goods_id
    let res = await request({ url:'/goods/detail', data:{ goods_id}})
    let result = res.data.message
    let goods_info = new GoodsInfo(result)
    let {pics,attrs,goods_introduce} = result
    this.setData({
      pics,
      attrs,
      goods_introduce,
      goods_info
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})