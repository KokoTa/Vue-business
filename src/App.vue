<template>
  <div id="app">
    <div class="app-header">
      <div class="app-head-inenr">
        <img src="./assets/logo.png">
        <div class="head-nav">
          <ul class="nav-list">
            <li><a href="#" @click="openDialog('isSignUP')">登录</a></li>
            <li class="nav-pile">|</li>
            <li><a href="#" @click="openDialog('isLogIn')">注册</a></li>
            <li class="nav-pile">|</li>
            <li><a href="#" @click="openDialog('isAbout')">关于</a></li>
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
    <my-dialog :show-dialog="isSignUP" @close-dialog="closeDialog('isSignUP')">
      <signUp></signUp>
    </my-dialog>
    <my-dialog :show-dialog="isLogIn" @close-dialog="closeDialog('isLogIn')">
      <logIn></logIn>
    </my-dialog>
    <my-dialog :show-dialog="isAbout" @close-dialog="closeDialog('isAbout')">
      <about></about>
    </my-dialog>
  </div>
</template>

<script>
  import myDialog from '@/components/myDialog';
  import signUp from '@/components/base/signUp';
  import logIn from '@/components/base/logIn';
  import about from '@/components/base/about';

  export default {
    name: 'app',
    components: {
      myDialog,
      signUp,
      logIn,
      about
    },
    data () {
      return {
        isSignUP: false,
        isLogIn: false,
        isAbout: false
      }
    },
    methods: {
      openDialog (value) {
        this[value] = true;
      },
      closeDialog (value) {
        this[value] = false;
      }
    }
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
