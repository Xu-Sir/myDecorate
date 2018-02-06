﻿/*
*	全国三级城市联动 js版
*/
function Dsy(){
	this.Items = {};
}
Dsy.prototype.add = function(id,iArray){
	this.Items[id] = iArray;
}
Dsy.prototype.Exists = function(id){
	if(typeof(this.Items[id]) == "undefined") return false;
	return true;
}

function change(v){
	var str="0";
	for(i=0;i<v;i++){
		str+=("_"+(document.getElementById(s[i]).selectedIndex-1));
	};
	var ss=document.getElementById(s[v]);
	with(ss){
		length = 0;
		options[0]=new Option(opt0[v],opt0[v]);
		if(v && document.getElementById(s[v-1]).selectedIndex>0 || !v){
			if(dsy.Exists(str)){
				ar = dsy.Items[str];
				for(i=0;i<ar.length;i++){
					options[length]=new Option(ar[i],ar[i]);
				}//end for
				if(v){ options[0].selected = true; }
			}
		}//end if v
		if(++v<s.length){change(v);}
	}//End with
}

var dsy = new Dsy();

dsy.add("0",["天津市","上海市","重庆市","河北省","山西省","内蒙古","辽宁省","江苏省","浙江省","安徽省","福建省","江西省","山东省","湖北省","湖南省","广东省","广西","海南省","四川省","贵州省","云南省"]);
dsy.add("0_0_0",["和平区","河东区","河西区","南开区","河北区","红桥区","塘沽区","汉沽区","大港区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","蓟县","宁河县","芦台镇","静海县","静海镇"]);
dsy.add("0_0",["天津市"]);
dsy.add("0_1_0",["黄浦区","卢湾区","徐汇区","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","南汇区","奉贤区","崇明县","城桥镇"]);
dsy.add("0_1",["上海市"]);
dsy.add("0_2_0",["渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","万盛区","双桥区","渝北区","巴南区","万州区","涪陵区","黔江区","长寿区","合川市","永川区市","江津市","南川市","綦江县","潼南县","铜梁县","大足县","荣昌县","璧山县","垫江县","武隆县","丰都县","城口县","梁平县","开县","巫溪县","巫山县","奉节县","云阳县","忠县","石柱土家族自治县","彭水苗族土家族自治县","酉阳土家族苗族自治县","秀山土家族苗族自治县"]);
dsy.add("0_2",["重庆市"]);
dsy.add("0_3_0",["长安区","桥东区","桥西区","新华区","裕华区","井陉矿区","辛集市","藁城市","晋州市","新乐市","鹿泉市","井陉县","微水镇","正定县","正定镇","栾城县","栾城镇","行唐县","龙州镇","灵寿县","灵寿镇","高邑县","高邑镇","深泽县","深泽镇","赞皇县","赞皇镇","无极县","无极镇","平山县","平山镇","元氏县","槐阳镇","赵县","赵州镇"]);
dsy.add("0_3_1",["桥西区","桥东区","宣化区","下花园区","宣化县","张家口市宣化区","张北县","张北镇","康保县","康保镇","沽源县","平定堡镇","尚义县","南壕堑镇","蔚县","蔚州镇","阳原县","西城镇","怀安县","柴沟堡镇","万全县","孔家庄镇","怀来县","沙城镇","涿鹿县","涿鹿镇","赤城县","赤城镇","崇礼县","西湾子镇"]);
dsy.add("0_3_2",["双桥区","双滦区","鹰手营子矿区","承德县","下板城镇","兴隆县","兴隆镇","平泉县","平泉镇","滦平县","滦平镇","隆化县","隆化镇","丰宁满族自治县","大阁镇","宽城满族自治县","宽城镇","围场满族蒙古族自治县","围场镇"]);
dsy.add("0_3_3",["海港区","山海关区","北戴河区","昌黎县","昌黎镇","抚宁县","抚宁镇","卢龙县","卢龙镇","青龙满族自治县","青龙镇"]);
dsy.add("0_3_4",["路北区","路南区","古冶区","开平区","丰润区","丰南区","遵化市","迁安市","滦县","滦州镇","滦南县","倴城镇","乐亭县","乐亭镇","迁西县","兴城镇","玉田县","玉田镇","唐海县","唐海镇"]);
dsy.add("0_3_5",["安次区","广阳区","霸州市","三河市","固安县","固安镇","永清县","永清镇","香河县","淑阳镇","大城县","平舒镇","文安县","文安镇","大厂回族自治县","大厂镇"]);
dsy.add("0_3_6",["新市区","北市区","南市区","定州市","涿州市","安国市","高碑店市","满城县","满城镇","清苑县","清苑镇","易县","易州镇","徐水县","安肃镇","涞源县","涞源镇","定兴县","定兴镇","顺平县","蒲阳镇","唐县","仁厚镇","望都县","望都镇","涞水县","涞水镇","高阳县","高阳镇","安新县","安新镇","雄县","雄州镇","容城县","容城镇","曲阳县","恒州镇","阜平县","阜平镇","博野县","博陵镇","蠡县","蠡吾镇"]);
dsy.add("0_3_7",["桃城区","冀州市","深州市","枣强县","枣强镇","武邑县","武邑镇","武强县","武强镇","饶阳县","饶阳镇","安平县","安平镇","故城县","郑口镇","景县","景州镇","阜城县","阜城镇"]);
dsy.add("0_3_8",["运河区","新华区","泊头市","任丘市","黄骅市","河间市","沧县","沧州市新华区","青县","清州镇","东光县","东光镇","海兴县","苏基镇","盐山县","盐山镇","肃宁县","肃宁镇","南皮县","南皮镇","吴桥县","桑园镇","献县","乐寿镇","孟村回族自治县","孟村镇"]);
dsy.add("0_3_9",["桥东区","桥西区","南宫市","沙河市","邢台县","邢台市桥东区","临城县","临城镇","内丘县","内丘镇","柏乡县","柏乡镇","隆尧县","隆尧镇","任县","任城镇","南和县","和阳镇","宁晋县","凤凰镇","巨鹿县","巨鹿镇","新河县","新河镇","广宗县","广宗镇","平乡县","丰州镇","威县","洺州镇","清河县","葛仙庄镇","临西县","临西镇"]);
dsy.add("0_3_10",["丛台区","邯山区","复兴区","峰峰矿区","武安市","邯郸县","南堡乡东小屯村","临漳县","临漳镇","成安县","成安镇","大名县","大名镇","涉县","涉城镇","磁县","磁州镇","肥乡县","肥乡镇","永年县","临洺关镇","邱县","新马头镇","鸡泽县","鸡泽镇","广平县","广平镇","馆陶县","馆陶镇","魏县","魏城镇","曲周县","曲周镇"]);
dsy.add("0_3",["秦皇岛市","廊坊市","沧州市","邯郸市"]);
dsy.add("0_4_0",["杏花岭区","小店区","迎泽区","尖草坪区","万柏林区","晋源区","古交市","清徐县","清源镇","阳曲县","黄寨镇","娄烦县","娄烦镇"]);
dsy.add("0_4_1",["朔城区","平鲁区","山阴县","岱岳乡","应县","金城镇","右玉县","新城镇","怀仁县","云中镇"]);
dsy.add("0_4_2",["城区","矿区","南郊区","新荣区","阳高县","龙泉镇","天镇县","玉泉镇","广灵县","壶泉镇","灵丘县","武灵镇","浑源县","永安镇","左云县","云兴镇","大同县","西坪镇"]);
dsy.add("0_4_3",["城区","矿区","郊区","平定县","冠山镇","盂县","秀水镇"]);
dsy.add("0_4_4",["城区","郊区","潞城市","长治县","韩店镇","襄垣县","古韩镇","屯留县","麟绛镇","平顺县","青羊镇","黎城县","黎侯镇","壶关县","龙泉镇","长子县","丹朱镇","武乡县","丰州镇","沁县","定昌镇","沁源县","沁河镇"]);
dsy.add("0_4_5",["城区","高平市","泽州县","南村镇","沁水县","龙港镇","阳城县","凤城镇","陵川县","崇文镇"]);
dsy.add("0_4_6",["忻府区","原平市","定襄县","晋昌镇","五台县","台城镇","代县","上馆镇","繁峙县","繁城镇","宁武县","凤凰镇","静乐县","鹅城镇","神池县","龙泉镇","五寨县","砚城镇","岢岚县","岚漪镇","河曲县","文笔镇","保德县","东关镇","偏关县","新关镇"]);
dsy.add("0_4_7",["榆次区","介休市","榆社县","箕城镇","左权县","辽阳镇","和顺县","义兴镇","昔阳县","乐平镇","寿阳县","朝阳镇","太谷县","明星镇","祁县","昭余镇","平遥县","古陶镇","灵石县","翠峰镇"]);
dsy.add("0_4_8",["尧都区","侯马市","霍州市","曲沃县","乐昌镇","翼城县","唐兴镇","襄汾县","新城镇","洪洞县","大槐树镇","古县","岳阳镇","安泽县","府城镇","浮山县","天坛镇","吉县","吉昌镇","乡宁县","昌宁镇","蒲县","蒲城镇","大宁县","昕水镇","永和县","芝河镇","隰县","龙泉镇","汾西县","永安镇"]);
dsy.add("0_4_9",["离石区","孝义市","汾阳市","文水县","凤城镇","中阳县","宁乡镇","兴县","蔚汾镇","临县","临泉镇","方山县","圪洞镇","柳林县","柳林镇","岚县","东村镇","交口县","水头镇","交城县","天宁镇","石楼县","灵泉镇"]);
dsy.add("0_4_10",["盐湖区","永济市","河津市","芮城县","古魏镇","临猗县","猗氏镇","万荣县","解店镇","新绛县","龙兴镇","稷山县","稷峰镇","闻喜县","桐城镇","夏县","瑶峰镇","绛县","古绛镇","平陆县","圣人涧镇","垣曲县","新城镇"]);
dsy.add("0_4",["太原市"]);
dsy.add("0_5_0",["回民区","新城区","玉泉区","赛罕区","托克托县","双河镇","武川县","可可以力更镇","和林格尔县","城关镇","清水河县","城关镇","土默特左旗","察素齐镇"]);
dsy.add("0_5_1",["昆都仑区","东河区","青山区","石拐区","白云矿区","九原区","固阳县","金山镇","土默特右旗","萨拉齐镇","达尔罕茂明安联合旗","百灵庙镇"]);
dsy.add("0_5_2",["海勃湾区","海南区","乌达区"]);
dsy.add("0_5_3",["红山区","元宝山区","松山区","宁城县","天义镇","林西县","林西镇","阿鲁科尔沁旗","天山镇","巴林左旗","林东镇","巴林右旗","大板镇","克什克腾旗","经棚镇","翁牛特旗","乌丹镇","喀喇沁旗","锦山镇","敖汉旗","新惠镇"]);
dsy.add("0_5_4",["科尔沁区","霍林郭勒市","开鲁县","开鲁镇","库伦旗","库伦镇","奈曼旗","大沁他拉镇","扎鲁特旗","鲁北镇","科尔沁左翼中旗","保康镇","科尔沁左翼后旗","甘旗卡镇"]);
dsy.add("0_5_5",["海拉尔区","满洲里市","扎兰屯市","牙克石市","根河市","额尔古纳市","阿荣旗","那吉镇","新巴尔虎右旗","阿拉坦额莫勒镇","新巴尔虎左旗","阿穆古郎镇","陈巴尔虎旗","巴彦库仁镇","鄂伦春自治旗","阿里河镇","鄂温克族自治旗","巴彦托海镇","莫力达瓦达斡尔族自治旗","尼尔基镇"]);
dsy.add("0_5_6",["东胜区","达拉特旗","树林召镇","准格尔旗","薛家湾镇","鄂托克前旗","敖勒召其镇","鄂托克旗","乌兰镇","杭锦旗","锡尼镇","乌审旗","嘎鲁图镇","伊金霍洛旗","阿勒腾席热镇"]);
dsy.add("0_5_7",["集宁区","丰镇市","卓资县","卓资山镇","化德县","长顺镇","商都县","商都镇","兴和县","城关镇","凉城县","岱海镇","察哈尔右翼前旗","土贵乌拉镇","察哈尔右翼中旗","科布尔镇","察哈尔右翼后旗","白音察干镇","四子王旗","乌兰花镇"]);
dsy.add("0_5_8",["临河区","五原县","隆兴昌镇","磴口县","巴彦高勒镇","乌拉特前旗","乌拉山镇","乌拉特中旗","海流图镇","乌拉特后旗","巴音宝力格镇","杭锦后旗","陕坝镇"]);
dsy.add("0_5_9",["乌兰浩特市","阿尔山市","突泉县","突泉镇","科尔沁右翼前旗","大坝沟镇","科尔沁右翼中旗","巴彦呼硕镇","扎赉特旗","音德尔镇"]);
dsy.add("0_5_10",["锡林浩特市","二连浩特市","多伦县","多伦淖尔镇","阿巴嘎旗","别力古台镇","苏尼特左旗","满都拉图镇","苏尼特右旗","赛汉塔拉镇","东乌珠穆沁旗","乌里雅斯太镇","西乌珠穆沁旗","巴拉嘎尔郭勒镇","太仆寺旗","宝昌镇","镶黄旗","新宝拉格镇","正镶白旗","明安图镇","正蓝旗","上都镇"]);
dsy.add("0_5_11",["巴彦浩特镇","阿拉善右旗","额肯呼都格镇","额济纳旗","达来呼布镇"]);
dsy.add("0_5",["呼和浩特市"]);
dsy.add("0_6_0",["沈河区","和平区","大东区","皇姑区","铁西区","苏家屯区","东陵区","新城子区","于洪区","新民市","辽中县","辽中镇","康平县","康平镇","法库县","法库镇"]);
dsy.add("0_6_1",["双塔区","龙城区","北票市","凌源市","朝阳县","朝阳市双塔区","建平县","喀喇沁左翼蒙古族自治县","大城子镇"]);
dsy.add("0_6_2",["海州区","新邱区","太平区","清河门区","细河区","彰武县","彰武镇","阜新蒙古族自治县","阜新镇"]);
dsy.add("0_6_3",["银州区","清河区","调兵山市","开原市","铁岭县","铁岭市银州区","西丰县","西丰镇","昌图县","昌图镇"]);
dsy.add("0_6_4",["顺城区","新抚区","东洲区","望花区","抚顺县","抚顺市顺城区","新宾满族自治县","新宾镇","清原满族自治县","清原镇"]);
dsy.add("0_6_5",["平山区","溪湖区","明山区","南芬区","本溪满族自治县","小市镇","桓仁满族自治县","桓仁镇"]);
dsy.add("0_6_6",["白塔区","文圣区","宏伟区","弓长岭区","太子河区","灯塔市","辽阳县","首山镇"]);
dsy.add("0_6_7",["铁东区","铁西区","立山区","千山区","海城市","台安县","台安镇","岫岩满族自治县","岫岩镇"]);
dsy.add("0_6_8",["振兴区","元宝区","振安区","凤城市","东港市","宽甸满族自治县","宽甸镇"]);
dsy.add("0_6_9",["西岗区","中山区","沙河口区","甘井子区","旅顺口区","金州区","瓦房店市","普兰店市","庄河市","长海县","大长山岛镇"]);
dsy.add("0_6_10",["站前区","西市区","鲅鱼圈区","老边区","大石桥市","盖州市"]);
dsy.add("0_6_11",["兴隆台区","双台子区","大洼县","大洼镇","盘山县","盘锦市双台子区"]);
dsy.add("0_6_12",["太和区","古塔区","凌河区","凌海市","北宁市","黑山县","黑山镇","义县","义州镇"]);
dsy.add("0_6_13",["龙港区","连山区","南票区","兴城市","绥中县","绥中镇","建昌县","建昌镇"]);
dsy.add("0_6",["大连市"]);
dsy.add("0_7_0",["玄武区","白下区","秦淮区","建邺区","鼓楼区","下关区","浦口区","六合区","栖霞区","雨花台区","江宁区","溧水县","永阳镇","高淳县","淳溪镇"]);
dsy.add("0_7_1",["云龙区","鼓楼区","九里区","贾汪区","泉山区","邳州市","新沂市","铜山县","铜山镇","睢宁县","睢城镇","沛县","沛城镇","丰县","凤城镇"]);
dsy.add("0_7_2",["新浦区","连云区","海州区","赣榆县","青口镇","灌云县","伊山镇","东海县","牛山镇","灌南县","新安镇"]);
dsy.add("0_7_3",["宿城区","宿豫区","沭阳县","沭城镇","泗阳县","众兴镇","泗洪县","青阳镇"]);
dsy.add("0_7_4",["清河区","清浦区","楚州区","淮阴区","金湖县","黎城镇","盱眙县","盱城镇","洪泽县","高良涧镇","涟水县","涟城镇"]);
dsy.add("0_7_5",["亭湖区","盐都区","东台市","大丰市","射阳县","合德镇","阜宁县","阜城镇","滨海县","东坎镇","响水县","响水镇","建湖县","近湖镇"]);
dsy.add("0_7_6",["维扬区","广陵区","邗江区","仪征市","江都市","高邮市","宝应县","安宜镇"]);
dsy.add("0_7_7",["海陵区","高港区","靖江市","泰兴市","姜堰市","兴化市"]);
dsy.add("0_7_8",["崇川区","港闸区","海门市","启东市","通州市","如皋市","如东县","掘港镇","海安县","海安镇"]);
dsy.add("0_7_9",["京口区","润州区","丹徒区","扬中市","丹阳市","句容市"]);
dsy.add("0_7_10",["钟楼区","天宁区","戚墅堰区","新北区","武进区","金坛市","溧阳市"]);
dsy.add("0_7_11",["崇安区","南长区","北塘区","滨湖区","惠山区","锡山区","江阴市","宜兴市"]);
dsy.add("0_7_12",["金阊区","沧浪区","平江区","虎丘区","吴中区","相城区","吴江市","昆山市","太仓市","常熟市","张家港市"]);
dsy.add("0_7",["南京市","连云港市","宿迁市","淮安市","盐城市","扬州市","南通市","常州市","无锡市","苏州市","镇江市","徐州市"]);
dsy.add("0_8_0",["拱墅区","上城区","下城区","江干区","西湖区","滨江区","余杭区","萧山区","临安市","富阳市","建德市","桐庐县","淳安县","千岛湖镇"]);
dsy.add("0_8_1",["吴兴区","南浔区","长兴县","雉城镇","德清县","武康镇","安吉县","递铺镇"]);
dsy.add("0_8_2",["南湖区","秀洲区","平湖市","海宁市","桐乡市","嘉善县","魏塘镇","海盐县","武原镇"]);
dsy.add("0_8_3",["定海区","普陀区","岱山县","高亭镇","嵊泗县","菜园镇"]);
dsy.add("0_8_4",["海曙区","江东区","江北区","北仑区","镇海区","鄞州区","慈溪市","余姚市","奉化市","宁海县","象山县"]);
dsy.add("0_8_5",["越城区","诸暨市","上虞市","嵊州市","绍兴县","新昌县","城关镇"]);
dsy.add("0_8_6",["柯城区","衢江区","江山市","常山县","天马镇","开化县","城关镇","龙游县"]);
dsy.add("0_8_7",["婺城区","金东区","兰溪市","永康市","义乌市","东阳市","武义县","浦江县","磐安县","安文镇"]);
dsy.add("0_8_8",["椒江区","黄岩区","路桥区","临海市","温岭市","三门县","海游镇","天台县","仙居县","玉环县","珠港镇"]);
dsy.add("0_8_9",["鹿城区","龙湾区","瓯海区","瑞安市","乐清市","永嘉县","上塘镇","文成县","大峃镇","平阳县","昆阳镇","泰顺县","罗阳镇","洞头县","北岙镇","苍南县","灵溪镇"]);
dsy.add("0_8_10",["莲都区","龙泉市","缙云县","五云镇","青田县","鹤城镇","云和县","云和镇","遂昌县","妙高镇","松阳县","西屏镇","庆元县","松源镇","景宁畲族自治县","鹤溪镇"]);
dsy.add("0_8",["杭州市","湖州市","嘉兴市","宁波市","绍兴市","衢州市","金华市","台州市","温州市","慈溪"]);
dsy.add("0_9_0",["庐阳区","瑶海区","蜀山区","包河区","长丰县","水湖镇","肥东县","店埠镇","肥西县","上派镇"]);
dsy.add("0_9_1",["埇桥区","砀山县","砀城镇","萧县","龙城镇","灵璧县","灵城镇","泗县","泗城镇"]);
dsy.add("0_9_2",["相山区","杜集区","烈山区","濉溪县","濉溪镇"]);
dsy.add("0_9_3",["谯城区","涡阳县","城关镇","蒙城县","城关镇","利辛县","城关镇"]);
dsy.add("0_9_4",["颍州区","颍东区","颍泉区","界首市","临泉县","城关镇","太和县","城关镇","阜南县","城关镇","颍上县","慎城镇"]);
dsy.add("0_9_5",["蚌山区","龙子湖区","禹会区","淮上区","怀远县","城关镇","五河县","城关镇","固镇县","城关镇"]);
dsy.add("0_9_6",["田家庵区","大通区","谢家集区","八公山区","潘集区","凤台县","城关镇"]);
dsy.add("0_9_7",["琅区","南谯区","明光市","天长市","来安县","新安镇","全椒县","襄河镇","定远县","定城镇","凤阳县","府城镇"]);
dsy.add("0_9_8",["雨山区","花山区","金家庄区","当涂县","姑孰镇"]);
dsy.add("0_9_9",["镜湖区","弋江区","三山区","鸠江区","芜湖县","湾镇","繁昌县","繁阳镇","南陵县","籍山镇"]);
dsy.add("0_9_10",["铜官山区","狮子山区","郊区","铜陵县","五松镇"]);
dsy.add("0_9_11",["迎江区","大观区","宜秀区","桐城市","怀宁县","高河镇","枞阳县","枞阳镇","潜山县","梅城镇","太湖县","晋熙镇","宿松县","孚玉镇","望江县","雷阳镇","岳西县","天堂镇"]);
dsy.add("0_9_12",["屯溪区","黄山区","徽州区","歙县","徽城镇","休宁县","海阳镇","黟县","碧阳镇","祁门县","祁山镇"]);
dsy.add("0_9_13",["金安区","裕安区","寿县","寿春镇","霍邱县","城关镇","舒城县","城关镇","金寨县","梅山镇","霍山县","衡山镇"]);
dsy.add("0_9_14",["居巢区","庐江县","庐城镇","无为县","无城镇","含山县","环峰镇","和县","历阳镇"]);
dsy.add("0_9_15",["贵池区","东至县","尧渡镇","石台县","七里镇","青阳县","蓉城镇"]);
dsy.add("0_9_16",["宣州区","宁国市","郎溪县","建平镇","广德县","桃州镇","泾县","泾川镇","旌德县","旌阳镇","绩溪县","华阳镇"]);
dsy.add("0_9",["合肥市","宿州市","阜阳市","蚌埠市","淮南市","滁州市","马鞍山市","安庆市","池州市","黄山市","芜湖市"]);
dsy.add("0_10_0",["鼓楼区","台江区","仓山区","马尾区","晋安区","福清市","长乐市","闽侯县","连江县","凤城镇","罗源县","凤山镇","闽清县","梅城镇","永泰县","樟城镇","平潭县","潭城镇"]);
dsy.add("0_10_1",["延平区","邵武市","武夷山市","建瓯市","建阳市","顺昌县","浦城县","光泽县","杭川镇","松溪县","松源镇","政和县","熊山镇"]);
dsy.add("0_10_2",["城厢区","涵江区","荔城区","秀屿区","仙游县"]);
dsy.add("0_10_3",["梅列区","三元区","永安市","明溪县","雪峰镇","清流县","龙津镇","宁化县","翠江镇","大田县","均溪镇","尤溪县","城关镇","沙县","将乐县","古镛镇","泰宁县","杉城镇","建宁县","濉城镇"]);
dsy.add("0_10_4",["鲤城区","丰泽区","洛江区","泉港区","石狮市","晋江市","南安市","惠安县","螺城镇","安溪县","凤城镇","永春县","桃城镇","德化县","浔中镇","金门县","☆"]);
dsy.add("0_10_5",["思明区","海沧区","湖里区","集美区","同安区","翔安区"]);
dsy.add("0_10_6",["芗城区","龙文区","龙海市","云霄县","云陵镇","漳浦县","绥安镇","诏安县","南诏镇","长泰县","武安镇","东山县","西埔镇","南靖县","山城镇","平和县","小溪镇","华安县","华丰镇"]);
dsy.add("0_10_7",["新罗区","漳平市","长汀县","汀州镇","永定县","凤城镇","上杭县","临江镇","武平县","平川镇","连城县","莲峰镇"]);
dsy.add("0_10_8",["蕉城区","福安市","福鼎市","寿宁县","鳌阳镇","霞浦县","柘荣县","双城镇","屏南县","古峰镇","古田县","周宁县","狮城镇"]);
dsy.add("0_10",["福州市","南平市","厦门市","漳州市","龙岩市","宁德市","泉州市"]);
dsy.add("0_11_0",["东湖区","西湖区","青云谱区","湾里区","青山湖区","南昌县","莲塘镇","新建县","长堎镇","安义县","龙津镇","进贤县","民和镇"]);
dsy.add("0_11_1",["浔阳区","庐山区","瑞昌市","九江县","沙河街镇","武宁县","新宁镇","修水县","义宁镇","永修县","涂埠镇","德安县","蒲亭镇","星子县","南康镇","都昌县","都昌镇","湖口县","双钟镇","彭泽县","龙城镇"]);
dsy.add("0_11_2",["珠山区","昌江区","乐平市","浮梁县","浮梁镇"]);
dsy.add("0_11_3",["月湖区","贵溪市","余江县","邓埠镇"]);
dsy.add("0_11_4",["渝水区","分宜县","分宜镇"]);
dsy.add("0_11_5",["安源区","湘东区","莲花县","琴亭镇","上栗县","上栗镇","芦溪县","芦溪镇"]);
dsy.add("0_11_6",["章贡区","瑞金市","南康市","赣县","梅林镇","信丰县","嘉定镇","大余县","南安镇","上犹县","东山镇","崇义县","横水镇","安远县","欣山镇","龙南县","龙南镇","定南县","历市镇","全南县","城厢镇","宁都县","梅江镇","于都县","贡江镇","兴国县","潋江镇","会昌县","文武坝镇","寻乌县","长宁镇","石城县","琴江镇"]);
dsy.add("0_11_7",["信州区","德兴市","上饶县","旭日镇","广丰县","永丰镇","玉山县","冰溪镇","铅山县","河口镇","横峰县","岑阳镇","弋阳县","弋江镇","余干县","玉亭镇","鄱阳县","鄱阳镇","万年县","陈营镇","婺源县","紫阳镇"]);
dsy.add("0_11_8",["临川区","南城县","建昌镇","黎川县","日峰镇","南丰县","琴城镇","崇仁县","巴山镇","乐安县","鳌溪镇","宜黄县","凤冈镇","金溪县","秀谷镇","资溪县","鹤城镇","东乡县","孝岗镇","广昌县","旴江镇"]);
dsy.add("0_11_9",["袁州区","丰城市","樟树市","高安市","奉新县","冯川镇","万载县","上高县","宜丰县","新昌镇","靖安县","双溪镇","铜鼓县","永宁镇"]);
dsy.add("0_11_10",["吉州区","青原区","井冈山市","厦坪镇","吉安县","敦厚镇","吉水县","文峰镇","峡江县","水边镇","新干县","金川镇","永丰县","恩江镇","泰和县","澄江镇","遂川县","泉江镇","万安县","芙蓉镇","安福县","平都镇","永新县","禾川镇"]);
dsy.add("0_11",["南昌市","九江市","新余市","萍乡市","赣州市","上饶市","抚州市","吉安市"]);
dsy.add("0_12_0",["市中区","历下区","槐荫区","天桥区","历城区","长清区","章丘市","平阴县","平阴镇","济阳县","济阳镇","商河县"]);
dsy.add("0_12_1",["市南区","市北区","四方区","黄岛区","崂山区","城阳区","李沧区","胶州市","即墨市","平度市","胶南市","莱西市"]);
dsy.add("0_12_2",["东昌府区","临清市","阳谷县","莘县","茌平县","东阿县","冠县","冠城镇","高唐县"]);
dsy.add("0_12_3",["德城区","乐陵市","禹城市","陵县","陵城镇","平原县","夏津县","夏津镇","武城县","武城镇","齐河县","晏城镇","临邑县","宁津县","宁津镇","庆云县","庆云镇"]);
dsy.add("0_12_4",["东营区","河口区","垦利县","垦利镇","利津县","利津镇","广饶县","广饶镇"]);
dsy.add("0_12_5",["张店区","淄川区","博山区","临淄区","周村区","桓台县","索镇","高青县","田镇","沂源县","南麻镇"]);
dsy.add("0_12_6",["潍城区","寒亭区","坊子区","奎文区","安丘市","昌邑市","高密市","青州市","诸城市","寿光市","临朐县","昌乐县"]);
dsy.add("0_12_7",["莱山区","芝罘区","福山区","牟平区","栖霞市","海阳市","龙口市","莱阳市","莱州市","蓬莱市","招远市","长岛县","南长山镇"]);
dsy.add("0_12_8",["环翠区","荣成市","乳山市","文登市"]);
dsy.add("0_12_9",["东港区","岚山区","五莲县","洪凝镇","莒县","城阳镇"]);
dsy.add("0_12_10",["兰山区","罗庄区","河东区","郯城县","郯城镇","苍山县","卞庄镇","莒南县","十字路镇","沂水县","沂水镇","蒙阴县","蒙阴镇","平邑县","平邑镇","费县","费城镇","沂南县","界湖镇","临沭县","临沭镇"]);
dsy.add("0_12_11",["薛城区","市中区","峄城区","台儿庄区","山亭区","滕州市"]);
dsy.add("0_12_12",["市中区","任城区","曲阜市","兖州市","邹城市","微山县","鱼台县","谷亭镇","金乡县","金乡镇","嘉祥县","嘉祥镇","汶上县","汶上镇","泗水县","梁山县","梁山镇"]);
dsy.add("0_12_13",["泰山区","岱岳区","新泰市","肥城市","宁阳县","宁阳镇","东平县","东平镇"]);
dsy.add("0_12_14",["莱城区","钢城区"]);
dsy.add("0_12_15",["滨城区","惠民县","惠民镇","阳信县","阳信镇","无棣县","无棣镇","沾化县","富国镇","博兴县","博兴镇","邹平县"]);
dsy.add("0_12_16",["牡丹区","曹县","曹城镇","定陶县","定陶镇","成武县","成武镇","单县","单城镇","巨野县","巨野镇","郓城县","郓城镇","鄄城县","鄄城镇","东明县","城关镇"]);
dsy.add("0_12",["济南市","青岛市","烟台市","威海市","临沂市","济宁市","滨州市"]);
dsy.add("0_13_0",["江岸区","江汉区","硚口区","汉阳区","武昌区","青山区","洪山区","东西湖区","汉南区","蔡甸区","江夏区","黄陂区","新洲区"]);
dsy.add("0_13_1",["张湾区","茅箭区","丹江口市","郧县","城关镇","竹山县","城关镇","房县","城关镇","郧西县","城关镇","竹溪县","城关镇"]);
dsy.add("0_13_2",["襄城区","樊城区","襄阳区","老河口市","枣阳市","宜城市","南漳县","城关镇","谷城县","城关镇","保康县","城关镇"]);
dsy.add("0_13_3",["东宝区","掇刀区","钟祥市","沙洋县","沙洋镇","京山县","新市镇"]);
dsy.add("0_13_4",["孝南区","应城市","安陆市","汉川市","孝昌县","花园镇","大悟县","城关镇","云梦县","城关镇"]);
dsy.add("0_13_5",["黄州区","麻城市","武穴市","红安县","城关镇","罗田县","凤山镇","英山县","温泉镇","浠水县","清泉镇","蕲春县","漕河镇","黄梅县","黄梅镇","团风县","团风镇"]);
dsy.add("0_13_6",["鄂城区","梁子湖区","华容区"]);
dsy.add("0_13_7",["黄石港区","西塞山区","下陆区","铁山区","大冶市","阳新县","兴国镇"]);
dsy.add("0_13_8",["咸安区","赤壁市","嘉鱼县","鱼岳镇","通城县","隽水镇","崇阳县","天城镇","通山县","通羊镇"]);
dsy.add("0_13_9",["沙市区","荆州区","石首市","洪湖市","松滋市","江陵县","郝穴镇","公安县","斗湖堤镇","监利县","容城镇"]);
dsy.add("0_13_10",["西陵区","伍家岗区","点军区","猇亭区","夷陵区","枝江市","宜都市","当阳市","远安县","鸣凤镇","兴山县","古夫镇","秭归县","茅坪镇","长阳土家族自治县","龙舟坪镇","五峰土家族自治县","五峰镇"]);
dsy.add("0_13_11",["曾都区","广水市"]);
dsy.add("0_13_12",["仙桃市","天门市","潜江市","神农架林区","松柏镇"]);
dsy.add("0_13_13",["恩施市","利川市","建始县","业州镇","巴东县","信陵镇","宣恩县","珠山镇","咸丰县","高乐山镇","来凤县","翔凤镇","鹤峰县","容美镇"]);
dsy.add("0_13",["武汉市","黄冈市","黄石市","咸宁市","荆州市","宜昌市","恩施州"]);
dsy.add("0_14_0",["长沙市","岳麓区","芙蓉区","天心区","开福区","雨花区","浏阳市","长沙县","星沙镇","望城县","高塘岭镇","宁乡县","玉潭镇"]);
dsy.add("0_14_1",["永定区","武陵源区","慈利县","零阳镇","桑植县","澧源镇"]);
dsy.add("0_14_2",["武陵区","鼎城区","津市市","安乡县","城关镇","汉寿县","龙阳镇","澧县","澧阳镇","临澧县","安福镇","桃源县","漳江镇","石门县","楚江镇"]);
dsy.add("0_14_3",["赫山区","资阳区","沅江市","南县","南洲镇","桃江县","桃花江镇","安化县","东坪镇"]);
dsy.add("0_14_4",["岳阳楼区","君山区","云溪区","汨罗市","临湘市","岳阳县","荣家湾镇","华容县","城关镇","湘阴县","文星镇","平江县","汉昌镇"]);
dsy.add("0_14_5",["天元区","荷塘区","芦淞区","石峰区","醴陵市","株洲县","渌口镇","攸县","城关镇","茶陵县","城关镇","炎陵县","霞阳镇"]);
dsy.add("0_14_6",["岳塘区","雨湖区","湘乡市","韶山市","湘潭县","易俗河镇"]);
dsy.add("0_14_7",["雁峰区","珠晖区","石鼓区","蒸湘区","南岳区","常宁市","耒阳市","衡阳县","西渡镇","衡南县","云集镇","衡山县","开云镇","衡东县","城关镇","祁东县","洪桥镇"]);
dsy.add("0_14_8",["北湖区","苏仙区","资兴市","桂阳县","城关镇","永兴县","城关镇","宜章县","城关镇","嘉禾县","城关镇","临武县","城关镇","汝城县","城关镇","桂东县","城关镇","安仁县","城关镇"]);
dsy.add("0_14_9",["冷水滩区","零陵区","东安县","白牙市镇","道县","道江镇","宁远县","舜陵镇","江永县","潇浦镇","蓝山县","塔峰镇","新田县","龙泉镇","双牌县","泷泊镇","祁阳县","浯溪镇","江华瑶族自治县","沱江镇"]);
dsy.add("0_14_10",["双清区","大祥区","北塔区","武冈市","邵东县","两市镇","邵阳县","塘渡口镇","新邵县","酿溪镇","隆回县","桃洪镇","洞口县","洞口镇","绥宁县","长铺镇","新宁县","金石镇","城步苗族自治县","儒林镇"]);
dsy.add("0_14_11",["鹤城区","洪江市","沅陵县","沅陵镇","辰溪县","辰阳镇","溆浦县","卢峰镇","中方县","中方镇","会同县","林城镇","麻阳苗族自治县","高村镇","新晃侗族自治县","新晃镇","芷江侗族自治县","芷江镇","靖州苗族侗族自治县","渠阳镇","通道侗族自治县","双江镇"]);
dsy.add("0_14_12",["娄星区","冷水江市","涟源市","双峰县","永丰镇","新化县","上梅镇"]);
dsy.add("0_14_13",["吉首市","泸溪县","白沙镇","凤凰县","沱江镇","花垣县","花垣镇","保靖县","迁陵镇","古丈县","古阳镇","永顺县","灵溪镇","龙山县"]);
dsy.add("0_14",["湘潭市","衡阳市","邵阳市","怀化市","娄底市","湘西州"]);
dsy.add("0_15_0",["越秀区","荔湾区","海珠区","天河区","白云区","黄埔区","番禺区","花都区","南沙区","萝岗区","增城市","从化市"]);
dsy.add("0_15_1",["福田区","罗湖区","南山区","宝安区","龙岗区","盐田区"]);
dsy.add("0_15_2",["清城区","英德市","连州市","佛冈县","石角镇","阳山县","阳城镇","清新县","太和镇","连山壮族瑶族自治县","吉田镇","连南瑶族自治县","三江镇"]);
dsy.add("0_15_3",["浈江区","武江区","曲江区","乐昌市","南雄市","始兴县","太平镇","仁化县","仁化镇","翁源县","龙仙镇","新丰县","乳源瑶族自治县","乳城镇"]);
dsy.add("0_15_4",["源城区","紫金县","紫城镇","龙川县","老隆镇","连平县","元善镇","和平县","阳明镇","东源县","仙塘镇"]);
dsy.add("0_15_5",["梅江区","兴宁市","梅县","程江镇","大埔县","湖寮镇","丰顺县","汤坑镇","五华县","水寨镇","平远县","大柘镇","蕉岭县","蕉城镇"]);
dsy.add("0_15_6",["湘桥区","潮安县","庵埠镇","饶平县","黄冈镇"]);
dsy.add("0_15_7",["金平区","濠江区","龙湖区","潮阳区","潮南区","澄海区","南澳县","后宅镇"]);
dsy.add("0_15_8",["榕城区","普宁市","揭东县","曲溪镇","揭西县","河婆镇","惠来县","惠城镇"]);
dsy.add("0_15_9",["城区","陆丰市","海丰县","海城镇","陆河县","河田镇"]);
dsy.add("0_15_10",["惠城区","惠阳区","博罗县","罗阳镇","惠东县","龙门县"]);
dsy.add("0_15_12",["香洲区","斗门区","金湾区"]);
dsy.add("0_15_14",["江海区","蓬江区","新会区","恩平市","台山市","开平市","鹤山市"]);
dsy.add("0_15_15",["禅城区","南海区","顺德区","三水区","高明区"]);
dsy.add("0_15_16",["端州区","鼎湖区","高要市","四会市","广宁县","南街镇","怀集县","怀城镇","封开县","江口镇","德庆县"]);
dsy.add("0_15_17",["云城区","罗定市","云安县","六都镇","新兴县","新城镇","郁南县","都城镇"]);
dsy.add("0_15_18",["江城区","阳春市","阳西县","织镇","阳东县","东城镇"]);
dsy.add("0_15_19",["茂南区","茂港区","化州市","信宜市","高州市","电白县","水东镇"]);
dsy.add("0_15_20",["赤坎区","霞山区","坡头区","麻章区","吴川市","廉江市","雷州市","遂溪县","遂城镇","徐闻县","撤销广州市东山区","芳村区","设立广州市南沙区","萝岗区"]);
dsy.add("0_15",["广州市","深圳市","韶关市","河源市","梅州市","潮州市","汕头市","揭阳市","汕尾市","惠州市","东莞市","珠海市","中山市","江门市","佛山市","肇庆市","云浮市","茂名市","湛江市"]);
dsy.add("0_16_0",["青秀区","兴宁区","江南区","西乡塘区","良庆区","邕宁区","武鸣县","横县","宾阳县","上林县","隆安县","马山县"]);
dsy.add("0_16_1",["象山区","叠彩区","秀峰区","七星区","雁山区","阳朔县","阳朔镇","临桂县","临桂镇","灵川县","灵川镇","全州县","全州镇","兴安县","兴安镇","永福县","永福镇","灌阳县","灌阳镇","资源县","资源镇","平乐县","平乐镇","荔浦县","荔城镇","龙胜各族自治县","龙胜镇","恭城瑶族自治县","恭城镇"]);
dsy.add("0_16_2",["城中区","鱼峰区","柳南区","柳北区","柳江县","拉堡镇","柳城县","大埔镇","鹿寨县","鹿寨镇","融安县","长安镇","三江侗族自治县","古宜镇","融水苗族自治县","融水镇"]);
dsy.add("0_16_3",["万秀区","蝶山区","长洲区","岑溪市","苍梧县","龙圩镇","藤县","藤州镇","蒙山县","蒙山镇"]);
dsy.add("0_16_4",["港北区","港南区","覃塘区","桂平市","平南县","平南镇"]);
dsy.add("0_16_5",["玉州区","北流市","兴业县","石南镇","容县","容州镇","陆川县","陆城镇","博白县","博白镇"]);
dsy.add("0_16_6",["钦南区","钦北区","灵山县","灵城镇","浦北县","小江镇"]);
dsy.add("0_16_7",["海城区","银海区","铁山港区","合浦县","廉州镇"]);
dsy.add("0_16_8",["港口区","防城区","东兴市","上思县","思阳镇"]);
dsy.add("0_16_9",["江州区","凭祥市","扶绥县","新宁镇","大新县","桃城镇","天等县","天等镇","宁明县","城中镇","龙州县","龙州镇"]);
dsy.add("0_16_10",["右江区","田阳县","田州镇","田东县","平马镇","平果县","马头镇","德保县","城关镇","靖西县","新靖镇","那坡县","城厢镇","凌云县","泗城镇","乐业县","同乐镇","西林县","八达镇","田林县","乐里镇","隆林各族自治县","新州镇"]);
dsy.add("0_16_11",["金城江区","宜州市","南丹县","城关镇","天峨县","六排镇","凤山县","凤城镇","东兰县","东兰镇","巴马瑶族自治县","巴马镇","都安瑶族自治县","安阳镇","大化瑶族自治县","大化镇","罗城仫佬族自治县","东门镇","环江毛南族自治县","思恩镇"]);
dsy.add("0_16_12",["兴宾区","合山市","象州县","象州镇","武宣县","武宣镇","忻城县","城关镇","金秀瑶族自治县","金秀镇"]);
dsy.add("0_16_13",["八步区","昭平县","昭平镇","钟山县","钟山镇","富川瑶族自治县","富阳镇"]);
dsy.add("0_16",["南宁市","桂林市","柳州市","梧州市","贵港市","玉林市","钦州市","防城港市","百色市","来宾市"]);
dsy.add("0_17_0",["龙华区","秀英区","琼山区","美兰区"]);
dsy.add("0_17_2",["文昌市","琼海市","万宁市","五指山市","东方市","儋州市","临高县","临城镇","澄迈县","金江镇","定安县","定城镇","屯昌县","屯城镇","昌江黎族自治县","石碌镇","白沙黎族自治县","牙叉镇","琼中黎族苗族自治县","营根镇","陵水黎族自治县","椰林镇","保亭黎族苗族自治县","保城镇","乐东黎族自治县","抱由镇"]);
dsy.add("0_17",["海口市","琼海市"]);
dsy.add("0_18_0",["青羊区","锦江区","金牛区","武侯区","成华区","龙泉驿区","青白江区","新都区","温江区","都江堰市","彭州市","邛崃市","崇州市","金堂县","赵镇","双流县","郫县","郫筒镇","大邑县","晋原镇","蒲江县","鹤山镇","新津县","五津镇"]);
dsy.add("0_18_1",["市中区","元坝区","朝天区","旺苍县","东河镇","青川县","乔庄镇","剑阁县","下寺镇","苍溪县","陵江镇"]);
dsy.add("0_18_2",["涪城区","游仙区","江油市","三台县","潼川镇","盐亭县","云溪镇","安县","花荄镇","梓潼县","文昌镇","北川羌族自治县","曲山镇","平武县","龙安镇"]);
dsy.add("0_18_3",["旌阳区","什邡市","广汉市","绵竹市","罗江县","罗江镇","中江县","凯江镇"]);
dsy.add("0_18_4",["顺庆区","高坪区","嘉陵区","阆中市","南部县","南隆镇","营山县","朗池镇","蓬安县","周口镇","仪陇县","新政镇","西充县","晋城镇"]);
dsy.add("0_18_5",["广安区","华蓥市","岳池县","九龙镇","武胜县","沿口镇","邻水县","鼎屏镇"]);
dsy.add("0_18_6",["船山区","安居区","蓬溪县","赤城镇","射洪县","太和镇","大英县","蓬莱镇"]);
dsy.add("0_18_7",["市中区","东兴区","威远县","严陵镇","资中县","重龙镇","隆昌县","金鹅镇"]);
dsy.add("0_18_8",["市中区","沙湾区","五通桥区","金口河区","峨眉山市","犍为县","玉津镇","井研县","研城镇","夹江县","漹城镇","沐川县","沐溪镇","峨边彝族自治县","沙坪镇","马边彝族自治县","民建镇"]);
dsy.add("0_18_9",["自流井区","大安区","贡井区","沿滩区","荣县","旭阳镇","富顺县","富世镇"]);
dsy.add("0_18_10",["江阳区","纳溪区","龙马潭区","泸县","福集镇","合江县","合江镇","叙永县","叙永镇","古蔺县","古蔺镇"]);
dsy.add("0_18_11",["翠屏区","宜宾县","柏溪镇","南溪县","南溪镇","江安县","江安镇","长宁县","长宁镇","高县","庆符镇","筠连县","筠连镇","珙县","巡场镇","兴文县","中城镇","屏山县","屏山镇"]);
dsy.add("0_18_12",["东区","西区","仁和区","米易县","攀莲镇","盐边县","桐子林镇"]);
dsy.add("0_18_13",["巴州区","通江县","诺江镇","南江县","南江镇","平昌县","江口镇"]);
dsy.add("0_18_14",["通川区","万源市","达县","南外镇","宣汉县","东乡镇","开江县","新宁镇","大竹县","竹阳镇","渠县","渠江镇"]);
dsy.add("0_18_15",["雁江区","简阳市","乐至县","天池镇","安岳县","岳阳镇"]);
dsy.add("0_18_16",["东坡区","仁寿县","文林镇","彭山县","凤鸣镇","洪雅县","洪川镇","丹棱县","丹棱镇","青神县","城厢镇"]);
dsy.add("0_18_17",["雨城区","名山县","蒙阳镇","荥经县","严道镇","汉源县","富林镇","石棉县","新棉镇","天全县","城厢镇","芦山县","芦阳镇","宝兴县","穆坪镇"]);
dsy.add("0_18_18",["马尔康县","马尔康镇","汶川县","威州镇","理县","杂谷脑镇","茂县","凤仪镇","松潘县","进安镇","九寨沟县","永乐镇","金川县","金川镇","小金县","美兴镇","黑水县","芦花镇","壤塘县","壤柯镇","阿坝县","阿坝镇","若尔盖县","达扎寺镇","红原县","邛溪镇"]);
dsy.add("0_18_19",["康定县","炉城镇","泸定县","泸桥镇","丹巴县","章谷镇","九龙县","呷尔镇","雅江县","河口镇","道孚县","鲜水镇","炉霍县","新都镇","甘孜县","甘孜镇","新龙县","茹龙镇","德格县","更庆镇","白玉县","建设镇","石渠县","尼呷镇","色达县","色柯镇","理塘县","高城镇","巴塘县","夏邛镇","乡城县","桑披镇","稻城县","金珠镇","得荣县","松麦镇"]);
dsy.add("0_18_20",["西昌市","盐源县","盐井镇","德昌县","德州镇","会理县","城关镇","会东县","会东镇","宁南县","披砂镇","普格县","普基镇","布拖县","特木里镇","金阳县","天地坝镇","昭觉县","新城镇","喜德县","光明镇","冕宁县","城厢镇","越西县","越城镇","甘洛县","新市坝镇","美姑县","巴普镇","雷波县","锦城镇","木里藏族自治县","乔瓦镇"]);
dsy.add("0_18",["成都市","广元市","南充市","广安市","遂宁市","内江市","乐山市","自贡市","泸州市","攀枝花市","巴中市","资阳市","内江市","凉山彝族自治州"]);
dsy.add("0_19_0",["乌当区","南明区","云岩区","花溪区","白云区","小河区","清镇市","开阳县","城关镇","修文县","龙场镇","息烽县","永靖镇"]);
dsy.add("0_19_1",["钟山区","盘县","红果镇","六枝特区","平寨镇","水城县"]);
dsy.add("0_19_2",["红花岗区","汇川区","赤水市","仁怀市","遵义县","南白镇","桐梓县","娄山关镇","绥阳县","洋川镇","正安县","凤仪镇","凤冈县","龙泉镇","湄潭县","湄江镇","余庆县","白泥镇","习水县","东皇镇","道真仡佬族苗族自治县","玉溪镇","务川仡佬族苗族自治县","都濡镇"]);
dsy.add("0_19_3",["西秀区","平坝县","城关镇","普定县","城关镇","关岭布依族苗族自治县","关索镇","镇宁布依族苗族自治县","城关镇","紫云苗族布依族自治县","松山镇"]);
dsy.add("0_19_4",["毕节市","大方县","大方镇","黔西县","城关镇","金沙县","城关镇","织金县","城关镇","纳雍县","雍熙镇","赫章县","城关镇","威宁彝族回族苗族自治县","草海镇"]);
dsy.add("0_19_5",["铜仁市","江口县","双江镇","石阡县","汤山镇","思南县","思唐镇","德江县","青龙镇","玉屏侗族自治县","平溪镇","印江土家族苗族自治县","峨岭镇","沿河土家族自治县","和平镇","松桃苗族自治县","蓼皋镇","万山特区","万山镇"]);
dsy.add("0_19_6",["凯里市","黄平县","新州镇","施秉县","城关镇","三穗县","八弓镇","镇远县","阳镇","岑巩县","思旸镇","天柱县","凤城镇","锦屏县","三江镇","剑河县","革东镇","台江县","台拱镇","黎平县","德凤镇","榕江县","古州镇","从江县","丙妹镇","雷山县","丹江镇","麻江县","杏山镇","丹寨县","龙泉镇"]);
dsy.add("0_19_7",["都匀市","福泉市","荔波县","玉屏镇","贵定县","城关镇","瓮安县","雍阳镇","独山县","城关镇","平塘县","平湖镇","罗甸县","龙坪镇","长顺县","长寨镇","龙里县","龙山镇","惠水县","和平镇","三都水族自治县","三合镇"]);
dsy.add("0_19_8",["兴义市","兴仁县","城关镇","普安县","盘水镇","晴隆县","莲城镇","贞丰县","珉谷镇","望谟县","复兴镇","册亨县","者楼镇","安龙县","新安镇","剑河县人民政府驻地由柳川镇迁至革东镇"]);
dsy.add("0_19",["贵阳市","六盘水市","遵义市","安顺市"," 黔东南苗族侗族自治州","黔南布依族苗族自治州"]);
dsy.add("0_20_0",["盘龙区","五华区","官渡区","西山区","东川区","安宁市","呈贡县","龙城镇","晋宁县","昆阳镇","富民县","永定镇","宜良县","匡远镇","嵩明县","嵩阳镇","石林彝族自治县","鹿阜镇","禄劝彝族苗族自治县","屏山镇","寻甸回族彝族自治县","仁德镇"]);
dsy.add("0_20_1",["麒麟区","宣威市","马龙县","通泉镇","沾益县","西平镇","富源县","中安镇","罗平县","罗雄镇","师宗县","丹凤镇","陆良县","中枢镇","会泽县","金钟镇"]);
dsy.add("0_20_2",["红塔区","江川县","大街镇","澄江县","凤麓镇","通海县","秀山镇","华宁县","宁州镇","易门县","龙泉镇","峨山彝族自治县","双江镇","新平彝族傣族自治县","桂山镇","元江哈尼族彝族傣族自治县","澧江镇"]);
dsy.add("0_20_3",["隆阳区","施甸县","甸阳镇","腾冲县","腾越镇","龙陵县","龙山镇","昌宁县","田园镇"]);
dsy.add("0_20_4",["昭阳区","鲁甸县","文屏镇","巧家县","新华镇","盐津县","盐井镇","大关县","翠华镇","永善县","溪落渡镇","绥江县","中城镇","镇雄县","乌峰镇","彝良县","角奎镇","威信县","扎西镇","水富县","向家坝镇"]);
dsy.add("0_20_5",["古城区","永胜县","永北镇","华坪县","中心镇","玉龙纳西族自治县","黄山镇","宁蒗彝族自治县","大兴镇"]);
dsy.add("0_20_6",["翠云区","普洱哈尼族彝族自治县","宁洱镇","墨江哈尼族自治县","联珠镇","景东彝族自治县","锦屏镇","景谷傣族彝族自治县","威远镇","镇沅彝族哈尼族拉祜族自治县","恩乐镇","江城哈尼族彝族自治县","勐烈镇","孟连傣族拉祜族佤族自治县","娜允镇","澜沧拉祜族自治县","勐朗镇","西盟佤族自治县","勐梭镇"]);
dsy.add("0_20_7",["临翔区","凤庆县","凤山镇","云县","爱华镇","永德县","德党镇","镇康县","南伞镇","双江拉祜族佤族布朗族傣族自治县","勐勐镇","耿马傣族佤族自治县","耿马镇","沧源佤族自治县","勐董镇"]);
dsy.add("0_20_8",["潞西市","瑞丽市","梁河县","遮岛镇","盈江县","平原镇","陇川县","章凤镇"]);
dsy.add("0_20_9",["泸水县六库镇","泸水县","六库镇","福贡县","上帕镇","贡山独龙族怒族自治县","茨开镇","兰坪白族普米族自治县","金顶镇"]);
dsy.add("0_20_10",["香格里拉县","建塘镇","德钦县","升平镇","维西傈僳族自治县","保和镇"]);
dsy.add("0_20_11",["大理市","祥云县","祥城镇","宾川县","金牛镇","弥渡县","弥城镇","永平县","博南镇","云龙县","诺邓镇","洱源县","茈碧湖镇","剑川县","金华镇","鹤庆县","云鹤镇","漾濞彝族自治县","苍山西镇","南涧彝族自治县","南涧镇","巍山彝族回族自治县","南诏镇"]);
dsy.add("0_20_12",["楚雄市","双柏县","妥甸镇","牟定县","共和镇","南华县","龙川镇","姚安县","栋川镇","大姚县","金碧镇","永仁县","永定镇","元谋县","元马镇","武定县","狮山镇","禄丰县","金山镇"]);
dsy.add("0_20_13",["蒙自县","文澜镇","个旧市","开远市","绿春县","大兴镇","建水县","临安镇","石屏县","异龙镇","弥勒县","弥阳镇","泸西县","中枢镇","元阳县","南沙镇","红河县","迤萨镇","金平苗族瑶族傣族自治县","金河镇","河口瑶族自治县","河口镇","屏边苗族自治县","玉屏镇"]);
dsy.add("0_20_14",["文山县","开化镇","砚山县","江那镇","西畴县","西洒镇","麻栗坡县","麻栗镇","马关县","马白镇","丘北县","锦屏镇","广南县","莲城镇","富宁县","新华镇"]);
dsy.add("0_20_15",["景洪市","勐海县","勐海镇","勐腊县","勐腊镇"]);
dsy.add("0_20",["玉溪市","大理州","楚雄州","红河州","普洱市","昆明市"]);
dsy.add("0",["天津市","上海市","重庆市","河北省","山西省","内蒙古","辽宁省","江苏省","浙江省","安徽省","福建省","江西省","山东省","湖北省","湖南省","广东省","广西","海南省","四川省","贵州省","云南省"]);


var s=["s_province","s_city","s_county"];//三个select的name
var opt0 = ["省份","地级市","市、县级市"];//初始值
function _init_area(){  //初始化函数
	for(i=0;i<s.length-1;i++){
	  document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")");
	}
	change(0);
}