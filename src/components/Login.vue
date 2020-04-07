<template>
  <div class="phone-verify-wrap">
    <section class="phone-verify">
      <div class="phone-input">
        <div class="label-text">手机号</div>
        <div class="input-box">
          <input
            class="phone-input-num"
            v-model="phone"
            placeholder="输入手机号">
        </div>
      </div>
      <div class="phone-input">
        <div class="label-text">密码</div>
        <div class="input-box">
          <input
            class="phone-input-code"
            type="password"
            v-model="password"
            placeholder="输入密码">
        </div>
      </div>
    </section>
    <div class="verify-button" @click="validate">登录</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        phone: "",
        password: "",
      };
    },
    methods: {
      // 提交验证
      validate() {
        if (!this.phone) {
          alert("请输入您的登录名");
          return;
        }
        this.$http.post("http://123.207.95.184:8888/api/v1/user/login", "{\"name\":\"安军\",\"password\":\"123456\"}")
          .then(res => {
            console.log("返回数据:" + res.data);
          })
          .catch(res => {
            console.log(res)
          });

      }
    }
  };
</script>

<style scoped>
  .phone-verify {
    width: 100%;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
  }

  .phone-input {
    display: flex;
    align-items: center;

    .label-text {
      width: 100px;
      text-align: center;
      justify-conent: center;
      font-size: 20px;
      color: #222;
    }

    .input-box {
      position: relative;
      flex: 1;

      .phone-input-num,
      .phone-input-code {
        width: 100%;
        font-size: 20px;
        color: #666;
        height: 80px;
        border: none;
      }

      .get-code {
        position: absolute;
        top: 15px;
        right: 20px;
        bottom: 15px;
        width: 130px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: rgba(236, 165, 70, 0.8);
        border-radius: 8px;
        font-size: 18px;
        color: #fff;
      }
    }

    &:not(:last-child) {
      .input-box {
        border-bottom: 1 dpx solid #e5e5e5;
      }
    }
  }

  .verify-button {
    display: block;
    margin: 40px 20px 0;
    height: 70px;
    line-height: 70px;
    border: none;
    background-image: linear-gradient(-90deg, #81c146 50%, #a6cd82 100%);
    border-radius: 100px;
    font-size: 26px;
    text-align: center;
    color: #fff;
  }
</style>
