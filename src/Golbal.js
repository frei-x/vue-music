//location.hostname  不带端口号
//location.host带端口号
// 下面的请求地址不能写死http://localhost:8091,否则其他设备无法请求.
const Golbal  = {
    host:`http://${location.hostname}:8091`,
    api:{
        //推荐歌单
        recommendSheet:'/personalized',
        //热门歌单:
        hotSheet:'/playlist/hot',
        //排行榜摘要
        topSheet:'/toplist/detail',
        //歌单详情 参数 +歌单id
        sheetDetail:'/playlist/detail?id='
    }
}
// 为api的url加上host
for(let item of Object.keys(Golbal.api)){
    Golbal.api[item] = Golbal.host + Golbal.api[item];
}
export default Golbal;
