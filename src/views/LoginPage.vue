<template>
  <div class="wrapper">
    <div class="auth-pages">
      <div class="auth-left">
        <h2>Returning Customer</h2>
        <div class="spacer"></div>
        <form action="">
          <input type="email" id="email" name="email" value="" placeholder="Email" required autofocus>
          <input type="password" id="password" name="password" value="" placeholder="Password" required>
          <div class="login-container">
            <button type="submit" class="auth-button">Login</button>
            <label>
              <input type="checkbox" name="remember"> Remember Me
            </label>
          </div>
          <div class="spacer"></div>
          <a href="">
            Forgot Your Password?
          </a>
        </form>
      </div>
      <div class="auth-right">
        <h2>New Customer</h2>
        <div class="spacer"></div>
        <p><strong>Save time now.</strong></p>
<!--        <p>You don't need an account to checkout.</p>-->
<!--        <div class="spacer"></div>-->
<!--        <a href="" class="auth-button-hollow">Continue as Guest</a>-->
<!--        <div class="spacer"></div>-->
        &nbsp
        <div class="spacer"></div>
<!--        <p><strong>Save time later.</strong></p>-->
        <p>Create an account for fast checkout and easy access to order history.</p>
        <div class="spacer"></div>
        <router-link :to="{name: 'Register'}" class="auth-button-hollow">Create Account</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginPage"
  }
</script>

<style scoped>

</style>