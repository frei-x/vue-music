const Golbal  = {
    host:'http://localhost:8091',
    api:{
        //推荐歌单
        recommendSheet:'/personalized',
        //热门歌单:
        hotSheet:'/playlist/hot',
        //排行榜摘要
        topSheet:'/toplist/detail'
        //歌单详情

    }
}
// 为api的url加上host
for(let item of Object.keys(Golbal.api)){
    Golbal.api[item] = Golbal.host + Golbal.api[item];
}
export default Golbal;
