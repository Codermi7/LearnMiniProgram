// 发请求 补齐地址
import { request } from '../../request/index.js'
Page({
  data: {
    swiperList:[],
    cateList:[],
    floorData:[]
  },
  onLoad: function (options) {
    // 请求数据
    this.getSwiperList()
    this.getCateList()
    this.getFloorData()
  
  },
  //获取轮播图数据
  getSwiperList() {
    request({url:'/home/swiperdata'}).then((res)=>{
      this.setData({
          swiperList: res.data.message
       })
    })
  },
  //获取分类导航
  getCateList() {
    request({url:'/home/catitems'}).then((res) => {
    
      this.setData({
        cateList: res.data.message
      })
    })
  },
  getFloorData() {
    request({url:'/home/floordata'}).then((res) => {
      console.log(res)
      this.setData({
        floorData: res.data.message
      })
    })
  }

  
})