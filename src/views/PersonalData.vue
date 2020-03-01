<template xmlns="http://www.w3.org/1999/html">
  <section class="col-md-9">
    <div class="wrapper">
      <h3>Personal Data</h3>
      <div class="form-group input-group">
        <input name="name" type="text" id="user_name" class="form-control" placeholder="Name"/>
        <input name="surname" type="text" id="user_surname" class="form-control" placeholder="Surname"/>
        <input name="patronymic" type="text" id="user_patronymic" class="form-control" placeholder="Patronymic"/>
      </div>
      <div class="form-group">
        <label for="user_email">Ваш e-mail</label>
        <input id="user_email" type="text" name="email" class="form-control" value="mufalmeva@mail.ru" disabled/>
      </div>
      <div class="form-group">
        <span>Password</span>
        <button class="btn btn--grey" name="password" id="user_password">Change password</button>
      </div>
      <div class="form-group">
        <label for="user_telephone">Telephone</label>
        <input type="text" name="telephone" id="user_telephone" class="form-control" placeholder="+7 (951) 542-83-30"/>
      </div>
      <div class="form-group">
        <label>Day of birth</label>
        <input class="form-control" id="user_birthday" name="birthday" type="date"/>
      </div>
      <div class="form-group">
        <label>Gender</label>
        <div class="form-check">
          <input id="male" type="radio" class="form-check-input" name="gender" value="male" checked/>
          <label for="male" class="form-check-label">Male</label>
        </div>
        <div class="form-check">
          <input id="female" type="radio" class="form-check-input" name="gender" value="female"/>
          <label class="form-check-label" for="female">Female</label>
        </div>
      </div>
      <div class="form-group text-center">
        <button class="btn btn--grey" name="save_changes" id="save_changes">Save changes</button>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: "PersonalData"
  }
</script>

<style scoped>

</style>