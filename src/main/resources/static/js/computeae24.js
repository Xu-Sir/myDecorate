
//一线城市
var cityIdF = [114, 973, 2419, 2393];
//二线城市
var cityIdS = [2763, 2722, 1124, 993, 612, 1039, 612, 152, 2533, 133, 2113, 3323, 2243, 627, 1743, 741, 1039, 1794, 1139, 1755, 1008, 11, 1918, 819, 10, 2441, 1237, 1620, 2555, 3087, 1152, 1769, 177, 347];
//三线城市
//var cityIdT = [114, 973, 2419, 2393];
var isApplySubmit = true;
function jsqsubmint(){
	var cityid=$("#navCity  option:selected").val();
	var housearea=$("#housearea").val();
	var shi=$("#shiselect  option:selected").val();
	var chu=$("#chuselect  option:selected").val();
	var wei=$("#weiselect  option:selected").val();
	var phone=$("#phone1").val();
	var name=$("#name1").val(); 
	// if(isEmpty(cityid)){
	// 	alert("请选择城市");
	// 	return;
	// }
	if(!isNumber(housearea) && !isDecimal(housearea)){
		alert("房屋面积必须是数字或者包含两位小数");
		return;
	}
	if(!isMoblie(phone)){
		alert("请输入正确的手机号码");
		return;
	}
	if(isEmpty(name)){
		alert("你的姓名必须填写");
		return;
	}
	if (!isApplySubmit) {
		alert("请勿重复提交或者请刷新页面重试！");
		return;
	}
	var remark = "所在城市：" +$("#navCity  option:selected").text()+ " 建筑面积：" + housearea + " 装修档次：";
	$("#remark").val(remark);
	isApplySubmit = false;
	saveactivity("_applyForm", phone ,"ok.html",false);
	yusuanfreecity(cityid,housearea,shi,chu,wei);
	setTimeout(function(){
		isApplySubmit = true;
	}, 3000);
}


function yusuanfreecity(cityid,housearea,shi,chu,wei) {
    //材料费
    var clfree = 0;
    //人工费
    var rgfree = 0;
    //设计费
    var sjfree = 0;
    //质检费
    var zjfree = 3500;
    //装修预算约
    var zxfree = 0;

    var jcclfree = 200;
    var jcrgfree = 0;
    var jcsjfree = 0;

    var area = parseFloat(housearea);


    if ($.inArray(parseInt(cityid), cityIdF) >= 0) {
        jcrgfree = 250;
        jcsjfree = 100;
    } else if ($.inArray(parseInt(cityid), cityIdS) >= 0) {
        jcrgfree = 240;
        jcsjfree = 80;
    } else {
        jcrgfree = 230;
        jcsjfree = 50;
    }
    clfree = area * jcclfree;
    if (parseInt(shi) > 1) {
        clfree = clfree + (shi-1) * 2000;
    }
    if (parseInt(chu) > 1) {
        clfree = clfree + (chu-1) * 2000;
    }
    if (parseInt(wei) > 1) {
        clfree = clfree + (wei-1) * 2000;
    }
    rgfree = area * jcrgfree;
    sjfree = area * jcsjfree;

    zxfree = clfree + rgfree;
    console.log("clfree:"+clfree);
    console.log("rgfree:"+rgfree);
    console.log("sjfree:"+sjfree);
    console.log("shi:"+shi);
    console.log();
    console.log();
    console.log();
    $("#ysfree").html(zxfree);
    $("#clfree").html(clfree);
    $("#rgfree").html(rgfree);
    $("#sjfree").html(0);
    $("#zjfree").html(0);
    $("#sjfreeb").html(sjfree);
    $("#zjfreeb").html(zjfree);
}

