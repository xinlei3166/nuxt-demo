<template>
  <div class="login">
    <a-form class="form" layout="horizontal">
      <a-form-item label="用户" :label-col="labelCol" :wrapper-col="wrapperCol" class="form-item" >
        <a-input placeholder="请输入用户名"/>
      </a-form-item>
      <a-form-item label="密码" :label-col="labelCol" :wrapper-col="wrapperCol" class="form-item">
        <a-input placeholder="请输入密码"/>
      </a-form-item>
      <a-form-item :wrapperCol="{ 'span': 14, 'offset': 4 }" class="form-item">
        <a-button type="primary">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  export default {
    name: 'index',
    layout: 'base',
    data () {
      return {
        title: '登录',
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'login', name: 'login', content: '登录' },
        ],
      }
    },
  }
</script>

<style lang="less" scoped>
  @import '~@/style/theme.less';

  .form {
    margin: 48px auto 0;
    padding: 40px 16px 2px;
    width: 500px;
    box-shadow: @box-shadow-base;
  }

  .form-item {
    input {
      width: 300px;
    }
  }
</style>
