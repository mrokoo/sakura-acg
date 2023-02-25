<script setup lang="ts"></script>

<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar__logo">
        <img
          src="https://note-image-1302477034.cos.ap-chengdu.myqcloud.com/pic/202302161326538.png"
          alt="logo"
          style="width: 118px; height: 60px"
        />
      </div>
      <div class="navbar__menu">
        <ul>
          <li class="navbar__menu__item">
            <a href="">首页</a>
          </li>
          <li class="navbar__menu__item">
            <a href=""
              >一本
              <span><ion-icon name="chevron-down-outline"></ion-icon></span
            ></a>
            <ul class="navbar__menu__submenu">
              <li><a href="">每日一本</a></li>
              <li><a href="">精彩推荐</a></li>
            </ul>
          </li>
          <li class="navbar__menu__item">
            <a href=""
              >一图
              <span><ion-icon name="chevron-down-outline"></ion-icon></span
            ></a>
            <ul class="navbar__menu__submenu">
              <li><a href="">每日一图</a></li>
              <li><a href="">插画集鉴赏</a></li>
              <li><a href="">Pixiv画师鉴赏</a></li>
            </ul>
          </li>
          <li class="navbar__menu__item">
            <a href=""
              >一剧
              <span><ion-icon name="chevron-down-outline"></ion-icon></span
            ></a>
            <ul class="navbar__menu__submenu">
              <li><a href="">每周一剧</a></li>
              <li><a href="">里番推荐</a></li>
            </ul>
          </li>
          <li class="navbar__menu__item">
            <a href=""
              >GAMES
              <span><ion-icon name="chevron-down-outline"></ion-icon></span
            ></a>
            <ul class="navbar__menu__submenu">
              <li><a href="">GalGame推荐</a></li>
            </ul>
          </li>
          <li class="navbar__menu__item">
            <a href=""
              >一声
              <span><ion-icon name="chevron-down-outline"></ion-icon></span
            ></a>
            <ul class="navbar__menu__submenu">
              <li><a href="">同人音声</a></li>
            </ul>
          </li>
          <li class="navbar__menu__item">
            <a href=""
              >一事
              <span><ion-icon name="chevron-down-outline"></ion-icon></span
            ></a>
            <ul class="navbar__menu__submenu">
              <li><a href="">维护记录</a></li>
              <li><a href="">站内纠错计划</a></li>
              <li><a href="">TG频道</a></li>
              <li><a href="">TG群组</a></li>
            </ul>
          </li>
          <li class="navbar__menu__item">
            <a href="">社区BETA</a>
          </li>
        </ul>
      </div>
      <div class="navbar__tool">
        <a href="" class="navbar__tool__item">
          <ion-icon name="menu-outline"></ion-icon>
        </a>
        <a href="" class="navbar__tool__item">
          <ion-icon name="color-palette-outline"></ion-icon>
        </a>
        <a href="" class="navbar__tool__item">
          <ion-icon name="search-outline"></ion-icon>
        </a>
        <a href="" class="navbar__tool__item"> 登录 </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  font-size: 15px;
  width: 100%;
  background-color: var(--navbar-bg-color);
  color: var(--navbar-text-color);
}

.navbar a {
  display: inline-block;
  padding: 0.75em 1em;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.navbar__menu__item {
  position: relative;
}

.navbar__menu__item > a {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.navbar__menu__item > a > span {
  opacity: 0.7;
  transition: all 0.3s linear;
}

.navbar__menu__item > a:hover > span {
  transform: rotate(180deg);
  transition: all 0.3s linear 0.1s;
}

.navbar__menu > ul {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.navbar__menu__submenu {
  position: absolute;
  top: 60%;
  width: 200px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  z-index: 1;

  background-color: var(--navbar-bg-color);
  border-radius: 10px;
  transition: all 0.3s ease-out;
}

.navbar__menu__item > a:hover + .navbar__menu__submenu,
.navbar__menu__submenu:hover,
.navbar__menu__submenu > a:hover {
  top: 100%;
  visibility: visible;
  opacity: 1;
  transition: all 0.3s ease-in;
}

.navbar__tool {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
}

.navbar__tool > .navbar__tool__item {
  padding: 0;
  margin: 0 0.5em;
}

.navbar__tool__item > ion-icon {
  font-size: 1.75em;
}

.navbar__tool__item:last-child {
  padding: 0.5em 0.75em;
  background: red;
  width: 35px;
  border-radius: 15px;
  text-align: center;
}

.navbar__tool__item:first-child {
  display: none;
}

ion-icon {
  --ionicon-stroke-width: 40px;
}


@media (max-width: 890px) {
  .navbar__menu {
    display: none;
  }

  .navbar__menu > ul {
    flex-direction: column;
  }

  .navbar__tool__item:first-child {
    display: inline-block;
  }
}
</style>
