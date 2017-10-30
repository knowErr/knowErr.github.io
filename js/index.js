/*
 * @Author: liujinyuan 
 * @Date: 2017-10-23 18:57:59 
 * @Last Modified by: liujinyuan
 * @Last Modified time: 2017-10-30 19:58:22
 */
demonstrate()
 
//  精彩展示
function demonstrate() {
  $('.jumbotron').on('mouseover',function(){
    $('.live-text').stop().fadeIn(300);
  })
 .on('mouseout',function(){
  $('.live-text').stop().fadeOut(300);
 })
}