<template>
  <section class="login">
    <div class="form">
      <!--login form start-->
      <form class="login-form" v-if="isLogin">
        <i class="fas fa-user-circle"></i>
        <input
          class="user-input"
          type="text"
          name=""
          placeholder="Email"
          required
          v-model="email"
        />
        <input
          class="user-input"
          type="password"
          placeholder="Password"
          required
          v-model="password"
        />
        <div class="options-01">
          <label class="remember-me"
            ><input type="checkbox" name="" />{{ $t("remember") }}</label
          >
        </div>
        <input class="btn" @click="submit" value="LOGIN" />
        <div class="options-02">
          <p>
            {{ $t("registired") }}
            <a @click="isLogin = false">{{ $t("account") }}</a>
          </p>
        </div>
      </form>
      <!--login form end-->
      <!--signup form start-->
      <form class="signup-form" v-if="!isLogin">
        <i class="fas fa-user-plus"></i>
        <input
          class="user-input"
          type="text"
          name=""
          placeholder="Name"
          required
          v-model="name"
        />
        <input
          class="user-input"
          type="email"
          name=""
          placeholder="Email Address"
          required
          v-model="email"
        />
        <input
          class="user-input"
          type="password"
          name=""
          placeholder="Password"
          required
          v-model="password"
        />
        <select v-model="role">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <input class="btn" @click="submit" value="SIGN UP" />
        <div class="options-02">
          <p>
            {{ $t("already") }}
            <a @click="isLogin = true">{{ $t("signin") }}</a>
          </p>
        </div>
      </form>
      <!--signup form end-->

      <br />
      <br />
    </div>
  </section>

  <!--form area end-->
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      role: "",
      isLogin: true,
    };
  },
  computed: {
    ...mapState("account", ["user"]),
  },
  methods: {
    ...mapActions("account", ["login", "register"]),
    async submit() {
      try {
        if (this.isLogin)
          await this.login({ email: this.email, password: this.password });
        else {
          await this.register({
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role,
          });
          this.isLogin = true;
        }
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    if (this.user) this.$router.push("/");
  },
};
</script>

<style>
.login {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  overflow: none;
}

.form {
  z-index: 1;
  position: absolute;
  width: 320px;
  text-align: center;
}

.form i {
  z-index: 1;
  color: #ccc;
  font-size: 65px;
  margin-bottom: 30px;
}

.form .user-input {
  width: 320px;
  height: 55px;
  margin-bottom: 30px;
  outline: none;
  border: none;
  background: black;
  color: white;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  transition: 0.5s;
  transition-property: border-left, border-right, box-shadow;
}

.form .user-input:hover,
.form .user-input:focus,
.form .user-input:active {
  border-left: solid 8px #4285f4;
  border-right: solid 8px #4285f4;
  box-shadow: 0 0 100px rgba(66, 133, 244, 0.8);
}

.form .options-01 {
  margin-bottom: 50px;
}

.form .options-01 input {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}

.form .options-01 .remember-me {
  color: #bbb;
  font-size: 14px;
  display: flex;
  align-items: center;
  float: left;
  cursor: pointer;
}

.form .options-01 a {
  color: #888;
  font-size: 14px;
  font-style: italic;
  float: right;
}

.form .btn {
  outline: none;
  border: none;
  width: 320px;
  height: 55px;
  background: #4285f4;
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  transition-property: border-left, border-right, box-shadow;
}

.form .btn:hover {
  border-left: solid 8px rgba(255, 255, 255, 0.5);
  border-right: solid 8px rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 100px rgba(66, 133, 244, 0.8);
}

.form .options-02 {
  color: #bbb;
  font-size: 14px;
  margin-top: 30px;
}

.form .options-02 a {
  color: #4285f4;
}
.b-btn {
  color: white;
}
.b-btn.patreon i {
  color: orange;
}
.b-btn:hover {
  text-decoration: underline;
}
.b-btn i {
  font-size: 20px;
  color: yellow;
  margin-top: 2rem;
}
/* Responsive CSS */

@media screen and (max-width: 500px) {
  .form {
    width: 95%;
  }

  .form .user-input {
    width: 100%;
  }

  .form .btn {
    width: 100%;
  }
}
</style>
