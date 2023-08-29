// index.js
// 获取应用实例
//生成随机颜色函数
function getRandomColor() {
  let rgb = [ ]
for (let i = 0;i< 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0'+ color : color
    rgb.push(color)
  }
  return '#'+rgb.join('')
}
Page({
  data: {
    danmuTxt:"",
    list:[
      {
        id:'1',
        title:"杨国宜先生口述校史实录",
        videoUrl:"http://arch.ahnu.edu.cn/__local/6/CB/D1/C2DF3FC847F4CE2ABB67034C595_025F0082_ABD7AE2.mp4?e=.mp4"
      },
      {
        id:'2',
        title:"唐成伦先生口述校史实录",
        videoUrl:"http://arch.ahnu.edu.cn/__local/E/31/EB/2F368A265E6C842BB6A63EE5F97_425ABEDD_7167F22.mp4?e=.mp4"
      },
      {
        id:'3',
        title:"倪光明先生口述校史实录",
        videoUrl:"http://arch.ahnu.edu.cn/__local/9/DC/3B/35687573BA2145023FDAEBAFE67_AAD8D222_925F3FF.mp4?e=.mp4"
      },
      {
        id:'4',
        title:"吴仪兴先生口述校史实录",
        videoUrl:"http://arch.ahnu.edu.cn/__local/5/DA/BD/7A27865731CF2B096E90B522005_A29CB142_6525BCF.mp4?e=.mp4"
      },

    ]
  },
  getDanmu:function (e) {
    this.setData({
      danmuTxt:e.detail.value
    })
  },
  sendDanmu:function (e) {
    let text=this.data.danmuTxt
    this.videoCtx.sendDanmu({
      text:text,
      color:getRandomColor()
    })
  },
  // 事件处理函数
  
 onLoad:function (options) {
   this.videoCtx=wx.createVideoContext('myVideo')
 },
 playVideo:function (e) {
   //停止播放
   this.videoCtx.stop()
   //更新视频
   this.setData({
     src:e.currentTarget.dataset.url
   })
   //播放新的视频
   this.videoCtx.play()
 }
})
