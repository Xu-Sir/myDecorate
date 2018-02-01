(function(t) {
	var i = {
		12: 0.0031,
		24: 0.0031,
		36: 0.0031,
		48: 0.0031
	};
	var a = 10000,
		e = 12,
		l = '078',
		r = !0;

	t('#btn-profit').click(function() {
		n();
	});

	
	t('.lp-price-time a').on('click', function() {
		t(this).addClass('curr').siblings().removeClass('curr');
		e = t(this).attr('data-month')
	});
	
	
	function n() {
		var jkje = $('#lpPrice').val();
		//var rate = $("#lpPrice").val();
		var rate = 0.0031;
		if(jkje<10000){
			layer.tips('贷款金额输入不能小于10000！',$('#lpPrice'), {tips: [3, '#53a0e3'],time: 2000});
			$("#lpPrice").val('').focus();
			return
		}
		else {
				r = !0;
				a = t.trim($("#lpPrice").val())
		}
		if (parseFloat(jkje)>1000000) {
			layer.tips('贷款金额不能超过1000000',$('#lpPrice'), {tips: [3, '#53a0e3'],time: 2000});
			$("#lpPrice").val('').focus();
			return
		} else {
				r = !0;
				a = t.trim($("#lpPrice").val())
		}
//		t('#lpPrice').blur(function() {
//			if (t(this).val().length === 0) {
//				alert('请输入100的倍数，且在10,000到1000,000之间');
//				r = !1;
//				$("#lpPrice").val('').focus();
//				return
			//} else if (!/^\d+$/.test(t(this).val())) {
//				alert('请输入100的倍数，且在10,000到1000,000之间');
//				r = !1;
//				$("#lpPrice").val('').focus();
//				return
//			} else if (t(this).val() % 100 != 0 || t(this).val() < 100) {
//				alert('请输入100的倍数，且在10,000到1000,000之间');
//				r = !1;
//				$("#lpPrice").val('').focus();
//				return
//			} else if (t(this).val() < 10000 || t(this).val() > 1000000) {
//				alert('请输入100的倍数，且在20,000到1000,000之间');
//				r = !1;
//				$("#lpPrice").val('').focus();
//				return
//			} else {
//				r = !0;
//				a = t.trim(t(this).val())
//			}
//	    });
		
	//	if (rate<=0) {
//			layer.tips('贷款利率输入不正确！默认：0.0031',$('#rate'), {tips: [3, '#53a0e3'],time: 2000});
//			$("#rate").val('').focus();			
//			return;
//		}else{
//			rate = $("#rate").val();
//		}
//		if (parseFloat(rate) >=1) {
//			layer.tips('请输入正确的贷款利率，贷款利率不能超过100%！',$('#rate'), {tips: [3, '#53a0e3'],time: 2000});
//			$("#rate").val('').focus();
//			 return;
//		}else{
//			rate = $("#rate").val();
//		}
		
		if (!r) {
			alert('请输入100的倍数，且在10,000到1000,000之间');
			return
		};
		n.month_pay_total = a/e + a*rate;
		t('#pcLpCalculator').html(parseFloat(n.month_pay_total).toFixed(2));
	}
}($));