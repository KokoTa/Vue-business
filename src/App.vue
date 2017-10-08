<template>
  <div id="app">
    <div class="app-header">
      <div class="app-head-inenr">
        <img src="./assets/logo.png">
        <div class="head-nav">
          <ul class="nav-list">
            <li><a href="#">登录</a></li>
            <li class="nav-pile">|</li>
            <li><a href="#">注册</a></li>
            <li class="nav-pile">|</li>
            <li><a href="#">关于</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>&copy 2017 by KokoTa</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  html, body  {
    background: #eee;
  }

  .app-header {
    height: 5rem;
    min-width: 1200px;
    background: black;
    img {
      position: absolute;
      border-radius: 50%;
      margin: 1rem;
      margin-left: 50px;
    }
    .app-head-inenr {
      width: 1200px;
      margin: 0 auto;
      .head-nav {
        float: right;
        padding: 0 1rem;
        li {
          float: left;
          line-height: 5rem;
          a {
            text-decoration: none;
            color: white;
          }
        }
        .nav-pile {
          padding: 0 1rem;
        }
      }
    }
  }

  .app-content {
    
  }

  .app-footer {
    text-align: center;
    line-height: 5rem;
    min-width: 1200px;
    background: #ccc;
    clear: both;
  }
</style>
