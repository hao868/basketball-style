var newArticleData = require("../../datas/articleData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    useArticleData : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(newArticleData)
    this.setData({
      useArticleData: newArticleData.articleData
      
    })
    
  }
})