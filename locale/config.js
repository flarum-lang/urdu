// source: https://unpkg.com/dayjs@v1.10.4/locale/ur.js
// see: https://github.com/iamkun/dayjs/blob/v1.10.4/src/locale/ur.js

!function(_,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("dayjs")):"function"==typeof define&&define.amd?define(["dayjs"],e):_.dayjs_locale_ur=e(_.dayjs)}(this,function(_){"use strict";_=_&&_.hasOwnProperty("default")?_.default:_;var e={name:"ur",weekdays:"اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),months:"جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"),weekStart:1,weekdaysShort:"اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),monthsShort:"جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"),weekdaysMin:"اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},relativeTime:{future:"%s بعد",past:"%s قبل",s:"چند سیکنڈ",m:"ایک منٹ",mm:"%d منٹ",h:"ایک گھنٹہ",hh:"%d گھنٹے",d:"ایک دن",dd:"%d دن",M:"ایک ماہ",MM:"%d ماہ",y:"ایک سال",yy:"%d سال"}};return _.locale(e,null,!0),e});

dayjs.locale('ur');
