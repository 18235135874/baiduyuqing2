$(function(){
	$('#dowebok').fullpage({
		'navigation': true,

	});
	var $down=$(".jiantou");
	$(document).on('click', $down, function(){
  		$.fn.fullpage.moveSectionDown();
  		/*'navigationTooltips'=["登录百度舆情","领先：数据收集与处理","全面：舆情分析逻辑与架构","专业：专业数据可视化"];*/
	})
	
});