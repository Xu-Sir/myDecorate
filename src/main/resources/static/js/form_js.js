function formstyle(el) {
    function getClassNames(classStr,tagName){
        if (document.getElementsByClassName) {
            return document.getElementsByClassName(classStr)
        }else {
            var nodes = document.getElementsByTagName(tagName),ret = [];
            for(i = 0; i < nodes.length; i++) {
                if(hasClass(nodes[i],classStr)){
                    ret.push(nodes[i])
                }
            }
            return ret;
        }
    }
    function hasClass(tagStr,classStr){
        var arr=tagStr.className.split(/\s+/ );
        for (var i=0;i<arr.length;i++){
            if (arr[i]==classStr){
                return true ;
            }
        }
        return false ;
    }
    function bindEvent(elem,type,fn){
        if(elem.attachEvent){
            var typeRef = "_" + type;
            if(!elem[typeRef]){
                elem[typeRef] = [];
            }
            for(var i in elem[typeRef]){
                if(elem[typeRef][i] == fn){
                    return;
                }
            }
            elem[typeRef].push(fn);
            elem["on"+type] = function(){
                for(var i in this[typeRef]){
                    this[typeRef][i].apply(this,arguments);
                }
            }
        }else{
            elem.addEventListener(type,fn,false);
        }
    }
    function getNextElement(node){
        var NextElementNode;
        if(!node.nextElementSibling){
            NextElementNode = node.nextSibling;
            while(NextElementNode.nodeValue != null){
                NextElementNode = NextElementNode.nextSibling
            }
        }else{
            NextElementNode =node.nextElementSibling
        }
        return NextElementNode;
    }
    function getPrevElement(node){
        var PrevElementNode;
        if(!node.previousElementSibling){
            PrevElementNode = node.previousSibling;
            while(PrevElementNode.nodeValue != null){
                PrevElementNode = PrevElementNode.previousSibling
            }
        }else{
            PrevElementNode =node.previousElementSibling
        }
        return PrevElementNode;
    }

    (function () {
        if(el.radioName){
            var els=getClassNames(el.radioName,'INPUT');
            for(var z=0;z<els.length;z++){
                if(els[z].checked){
                    els[z].insertAdjacentHTML("beforeBegin", '<b class="'+el.radioName+'_style checked"></b>');
                }else{
                    els[z].insertAdjacentHTML("beforeBegin", '<b class="'+el.radioName+'_style"></b>');
                }
                els[z].style.display='none'
            }
            var els_b=getClassNames(el.radioName+'_style','B');
            function func() {
                if(!getNextElement(this).checked){
                    getNextElement(this).checked=true;
                    for(var x=0;x<els_b.length;x++) {
                        if(getNextElement(els_b[x]).name==getNextElement(this).name){
                            els_b[x].className=el.radioName+"_style";
                        }
                    }
                    this.className=el.radioName+"_style checked";
                }
            }
            for(var y=0;y<els_b.length;y++) {
                bindEvent(els_b[y],'click',func)
            }
        }
    })();
    (function () {
        if(el.checkboxName){
            var els=getClassNames(el.checkboxName,'INPUT');
            for(var z=0;z<els.length;z++){
                if(els[z].checked){
                    els[z].insertAdjacentHTML("beforeBegin", '<b class="'+el.checkboxName+'_style checked"></b>');
                }else{
                    els[z].insertAdjacentHTML("beforeBegin", '<b class="'+el.checkboxName+'_style"></b>');
                }
                els[z].style.display='none'
            }
            var els_b=getClassNames(el.checkboxName+'_style','B');
            function func() {
                if(!getNextElement(this).checked){
                    getNextElement(this).checked=true;
                    this.className=el.checkboxName+"_style checked";
                }else{
                    getNextElement(this).checked =false;
                    this.className=el.checkboxName+"_style";
                }
            }
            for(var y=0;y<els_b.length;y++) {
                bindEvent(els_b[y],'click',func);
            }
        }
    })();
    (function () {
        if(el.fileName){
            var els=getClassNames(el.fileName,'INPUT');
            for(var z=0;z<els.length;z++){
                els[z].insertAdjacentHTML("beforeBegin", '<b class="'+el.fileName+'_style"></b>');
                els[z].style.display='none'
            }
            var els_b=getClassNames(el.fileName+'_style','B');
            function func() {
                getNextElement(this).click();
            }
            function func2() {
                getPrevElement(this).innerHTML=this.value;
            }
            for(var y=0;y<els_b.length;y++) {
                bindEvent(els_b[y],'click',func);
                bindEvent(getNextElement(els_b[y]),'change',func2);
            }
        }
    })();
    (function () {
        if(el.selectName){
            var els=getClassNames(el.selectName,'SELECT');
            function func() {
                var hel=getNextElement(this);
                if(hel.style.display=='block'){
                    hel.style.display='none';
                    hel.parentNode.className= el.selectName+'style'+' ';
                }else{
                    hel.style.display='block';
                    hel.parentNode.className= el.selectName+'style'+' '+'on';
                }
            }

            for(var z=0;z<els.length;z++){
                els[z].style.display='none';
                els[z].insertAdjacentHTML("beforeBegin", '<div class="'+el.selectName+'style"></div>');
                var selectlist=document.createElement('ul');
                var selectval=document.createElement('b');
                selectlist.className=el.selectName+'_select_l';
                selectval.className=el.selectName+'_select_v';
                selectlist.style.display='none';
                for(var x=0;x<els[z].options.length;x++){
                    var selectlist_li=document.createElement('li');
                    selectlist_li.innerHTML=els[z].options[x].innerHTML;
                    selectlist.appendChild(selectlist_li);
                    if(els[z].options[x].selected){
                        selectval.innerHTML=els[z].options[x].innerHTML;
                    }
                }
                getPrevElement(els[z]).appendChild(selectval);
                getPrevElement(els[z]).appendChild(selectlist);
                bindEvent(selectval,'click',func);
                var oli=selectlist.childNodes;
                for(var i=0;i<oli.length;i++)
                {
                    (function(n){
                        bindEvent(oli[i],'click',function () {
                            var parent=this.parentNode;
                            parent.style.display='none';
                            getNextElement(parent.parentNode).options[n].selected=true;
                            getPrevElement(parent).innerHTML=getNextElement(parent.parentNode).options[n].innerHTML;
                            parent.parentNode.className=el.selectName+'style'+' ';
                        });
                    })(i)
                }

            }
        }
    })();
    return '';
};

/**
 * jQuery EnPlaceholder plug
 * EnPlaceholder是一个跨浏览器实现placeholder效果的jQuery插件
 * version 1.0
 * by Frans.Lee <dmon@foxmail.com>  http://www.ifrans.cn
 */
(function ($) {
    $.fn.extend({
        "placeholder":function (options) {
            options = $.extend({
                placeholderColor:'#ACA899',
                isUseSpan:false, //是否使用插入span标签模拟placeholder的方式,默认false,默认使用value模拟
                onInput:true  //使用标签模拟(isUseSpan为true)时，是否绑定onInput事件取代focus/blur事件
            }, options);

            $(this).each(function () {
                var _this = this;
                var supportPlaceholder = 'placeholder' in document.createElement('input');
                if (!supportPlaceholder) {
                    var defaultValue = $(_this).attr('placeholder');
                    var defaultColor = $(_this).css('color');
                    if (options.isUseSpan == false) {
                        $(_this).focus(function () {
                            var pattern = new RegExp("^" + defaultValue + "$|^$");
                            pattern.test($(_this).val()) && $(_this).val('').css('color', defaultColor);
                        }).blur(function () {
                                if ($(_this).val() == defaultValue) {
                                    $(_this).css('color', defaultColor);
                                } else if ($(_this).val().length == 0) {
                                    $(_this).val(defaultValue).css('color', options.placeholderColor)
                                }
                            }).trigger('blur');
                    } else {
                        var $imitate = $('<span class="wrap-placeholder" style="position:absolute; display:inline-block; overflow:hidden; color:'+options.placeholderColor+'; width:'+$(_this).outerWidth()+'px; height:'+$(_this).outerHeight()+'px;">' + defaultValue + '</span>');
                        $imitate.css({
                            'margin-left':$(_this).css('margin-left'),
                            'margin-top':$(_this).css('margin-top'),
                            'font-size':$(_this).css('font-size'),
                            'font-family':$(_this).css('font-family'),
                            'font-weight':$(_this).css('font-weight'),
                            'padding-left':parseInt($(_this).css('padding-left')) + 2 + 'px',
                            'line-height':_this.nodeName.toLowerCase() == 'textarea' ? $(_this).css('line-weight') : $(_this).outerHeight() + 'px',
                            'padding-top':_this.nodeName.toLowerCase() == 'textarea' ? parseInt($(_this).css('padding-top')) + 2 : 0
                        });
                        $(_this).before($imitate.click(function () {
                            $(_this).trigger('focus');
                        }));

                        $(_this).val().length != 0 && $imitate.hide();

                        if (options.onInput) {
                            //绑定oninput/onpropertychange事件
                            var inputChangeEvent = typeof(_this.oninput) == 'object' ? 'input' : 'propertychange';
                            $(_this).bind(inputChangeEvent, function () {
                                $imitate[0].style.display = $(_this).val().length != 0 ? 'none' : 'inline-block';
                            });
                        } else {
                            $(_this).focus(function () {
                                $imitate.hide();
                            }).blur(function () {
                                    /^$/.test($(_this).val()) && $imitate.show();
                                });
                        }
                    }
                }
            });
            return this;
        }
    });
})(jQuery);

/*
 //通过value模拟placeholder
	$('input').placeholder();

//通过插入元素模拟placeholder
	$('input').placeholder({isUseSpan:true});

* */
window.onload=function () {
	if($.browser.msie && ( $.browser.version == "7.0" || $.browser.version == "8.0"|| $.browser.version == "9.0")){
		$('input[type="text"]').placeholder({isUseSpan:true});
	}
}
