function getUrlParameter(name, url) {
    if (url) {
        url = url + "";
        var regstr = "/(\\?|\\&)" + name + "=([^\\&]+)/";
        var reg = eval(regstr);
        var result = url.match(reg);
        if (result && result[2]) {
            return result[2];
        }
    } else {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
}

function showMoney(val) {
    var money = Number(val);
    money = parseInt(money * 100) / 100;
    return formatCurrency(money);
}

function changeMoney(n) {
    var fraction = ['角', '分'];
    var digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
}

function formatCurrency(num) {
    if (num) {
        //将num中的$,去掉，将num变成一个纯粹的数据格式字符串
        num = num.toString().replace(/\$|\,/g, '');
        //如果num不是数字，则将num置0，并返回
        if ('' == num || isNaN(num)) {
            return 'Not a Number ! ';
        }
        //如果num是负数，则获取她的符号
        var sign = num.indexOf("-") > 0 ? '-' : '';
        //如果存在小数点，则获取数字的小数部分
        var cents = num.indexOf(".") > 0 ? num.substr(num.indexOf(".")) : '';
        cents = cents.length > 1 ? cents : '';//注意：这里如果是使用change方法不断的调用，小数是输入不了的
        //获取数字的整数数部分
        num = num.indexOf(".") > 0 ? num.substring(0, (num.indexOf("."))) : num;
        //如果没有小数点，整数部分不能以0开头
        if ('' == cents) {
            if (num.length > 1 && '0' == num.substr(0, 1)) {
                return 'Not a Number ! ';
            }
        }
        //如果有小数点，且整数的部分的长度大于1，则整数部分不能以0开头
        else {
            if (num.length > 1 && '0' == num.substr(0, 1)) {
                return 'Not a Number ! ';
            }
        }
        //针对整数部分进行格式化处理，这是此方法的核心，也是稍难理解的一个地方，逆向的来思考或者采用简单的事例来实现就容易多了
        /*
          也可以这样想象，现在有一串数字字符串在你面前，如果让你给他家千分位的逗号的话，你是怎么来思考和操作的?
          字符串长度为0/1/2/3时都不用添加
          字符串长度大于3的时候，从右往左数，有三位字符就加一个逗号，然后继续往前数，直到不到往前数少于三位字符为止
         */
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
            num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        }
        //将数据（符号、整数部分、小数部分）整体组合返回
        return (sign + num + cents);
    } else {
        return 0
    }
}

function encrypt(type, val) {
    //1手机
    if (type === 1) {
        return val.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
    }
    //2身份证
    if (type === 2) {
        if (val.length === 15) {
            return val.replace(/^(.{3})(?:\d+)(.{3})$/, '$1*********$2');
        } else {
            return val.replace(/^(.{3})(?:\d+)(.{3})$/, "$1************$2");
        }
    }
    //3银行卡
    if (type === 3) {
        return val.replace(/^(.{4})(?:\d+)(.{3})$/, "$1 **** **** **** $2");
    }
    if (type === 4) {
        return val.substr(0, 1) + new Array(val.length).join('*');
    }
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,         // 月份
        "d+": this.getDate(),          // 日
        "h+": this.getHours(),          // 小时
        "m+": this.getMinutes(),         // 分
        "s+": this.getSeconds(),         // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds()       // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};