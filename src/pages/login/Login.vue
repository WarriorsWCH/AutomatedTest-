<template>
  <div class="bg-img">
    <div class="login">
      <h2 class="title">自动化管理平台</h2>
      <Form ref="form" :model="form" :rules="rule">
        <FormItem prop="user">
          <Input prefix="ios-contact" type="text" v-model="form.user" 
          placeholder="请输入用户名..." size="large" autofocus/>
        </FormItem>
        <FormItem prop="password">
          <Input prefix="ios-lock" type="password" v-model="form.password" 
          placeholder="请输入密码..." size="large"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('form')" long>登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        user: "",
        password: ""
      },
      rule: {
        user: [
          {
            required: true,
            message: "用户名不能为空！",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空！",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码不能小于6位！",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          // this.$Message.success("请填写正确的用户名或者密码!");
          this.$router.push('/home');
        } else {
          this.$Message.error("请填写正确的用户名或者密码!");
        }
      });
    }
  }
};
</script>

<style scoped>
.bg-img {
  width: 100%;
  height: 100%;
  background: url(../../assets/img/bg.jpg) no-repeat;
  position: relative;
}
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  border-radius: 4px;
  background: #fff;
  padding: 20px;
}
.title{
  font-size: 26px;
  color: #2b85e4;
  margin-bottom: 25px;
  font-weight: 700;
}
</style>
