<!--
此文件为开发者工具生成，生成时间: 2024/11/18下午5:52:55
使用方法：
在 D:\1study\uni-app\heima-shop\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\1study\uni-app\heima-shop\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view is="pages/index/components/CustomNavbar">
      <view class="navbar CustomNavbar--navbar" style="padding-top: 20px">
        <view class="logo CustomNavbar--logo">
          <image class="logo-image CustomNavbar--logo-image sk-image"></image>
          <text class="logo-text CustomNavbar--logo-text sk-transparent sk-text-3-5714-2 sk-text"
            >新鲜 · 亲民 · 快捷</text
          >
        </view>
        <view class="search CustomNavbar--search">
          <text
            class="icon-search CustomNavbar--icon-search sk-transparent sk-text-14-2857-245 sk-text sk-pseudo sk-pseudo-circle"
            >搜索商品</text
          >
          <text class="icon-scan CustomNavbar--icon-scan sk-pseudo sk-pseudo-circle"></text>
        </view>
      </view>
    </view>
    <scroll-view refresher-enabled="true" scroll-y="true">
      <view is="components/XtxSwiper">
        <view class="carousel XtxSwiper--carousel">
          <swiper circular="true" interval="3000" current="0" autoplay="false">
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
              </navigator>
            </swiper-item>
          </swiper>
          <view class="indicator XtxSwiper--indicator">
            <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
          </view>
        </view>
      </view>
      <view is="pages/index/components/CategoryPanel">
        <view class="category CategoryPanel--category">
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-826 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-807 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-478 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-610 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-980 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-332 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-164 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-291 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-566 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item CategoryPanel--category-item" hover-class="none">
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-73 sk-text"
              >居家</text
            >
          </navigator>
        </view>
      </view>
      <view is="pages/index/components/HotPanel">
        <view class="panel HotPanel--panel hot HotPanel--hot">
          <view class="item HotPanel--item">
            <view class="title HotPanel--title">
              <text
                class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-744 sk-text"
                >特惠推荐</text
              >
              <text
                class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-42 sk-text"
                >精选全攻略</text
              >
            </view>
            <navigator class="cards HotPanel--cards" hover-class="none">
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanel--item">
            <view class="title HotPanel--title">
              <text
                class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-243 sk-text"
                >爆款推荐</text
              >
              <text
                class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-201 sk-text"
                >最受欢迎</text
              >
            </view>
            <navigator class="cards HotPanel--cards" hover-class="none">
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanel--item">
            <view class="title HotPanel--title">
              <text
                class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-494 sk-text"
                >一站买全</text
              >
              <text
                class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-906 sk-text"
                >精心优选</text
              >
            </view>
            <navigator class="cards HotPanel--cards" hover-class="none">
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanel--item">
            <view class="title HotPanel--title">
              <text
                class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-873 sk-text"
                >新鲜好物</text
              >
              <text
                class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-180 sk-text"
                >生活加分项</text
              >
            </view>
            <navigator class="cards HotPanel--cards" hover-class="none">
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
