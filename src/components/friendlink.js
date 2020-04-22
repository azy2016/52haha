import React from "react"
import Style from "./friendlink.module.css"

export default () => (
    <div className={Style.linksBox}>
        <div className={Style.links}>
        <p>友情链接</p>
        <div className={Style.aBox}>
            <a href="https://www.52beautys.com/" target="_blank">妹子图片</a>
            <a href="https://like-gif.com/" target="_blank">gif收藏夹</a>
            <a href="http://www.yumojingshi.com" target="_blank">抛光机</a>
            <a href="http://gjcblsn.cn" target="_blank">丝瓜视频苹果版app</a>
            <a href="https://www.51link.com/link-exchange?ruid=14086" target="_blank">交换友链</a>
            <a href="http://85wangzhe.cn" target="_blank">泉州空压机</a>
        </div>
        </div>
    </div>
)