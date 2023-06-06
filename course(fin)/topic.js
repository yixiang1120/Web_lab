let topic = [
    "尚未開學",
    "期初社大",
    "國定假日",
    "第一次社課-歌唱教學",
    "第二次社課-創作教學",
    "第三次社課-樂器教學",
];

var startDate = new Date();
function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setMonthAndDay(2, 14);
