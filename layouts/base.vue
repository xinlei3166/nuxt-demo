<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <ul class="menu">
          <li class="menu-item"><nuxt-link to="/">首页</nuxt-link></li>
          <li class="menu-item">教程</li>
          <li class="menu-item">API</li>
          <li class="menu-item">示例</li>
          <li class="menu-item">常见问题</li>
        </ul>
      </nav>
      <div class="login-wrap">
        <nuxt-link to="/login" class="login">登录</nuxt-link>
        <a class="register">注册</a>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<style lang="less" scoped>
  @import '~@/style/theme.less';

  .header {
    height: 64px;
    box-shadow: 0 2px 8px #f0f1f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 100px;
    .menu {
      display: flex;
      align-items: center;
      .menu-item {
        margin: 0 20px;
        font-weight: 500;
      }
    }
  }

  .login-wrap {
    margin-right: 64px;
    .register {
      margin-left: 8px;
    }
  }

  .login {
    color: #1890ff;
  }

  a {
    text-decoration: none;
    color: @text-color;
    &:hover {
      color: #1890ff;
    }
  }
</style>
