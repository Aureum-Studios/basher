<template>
  <card type="user">
    <p class="card-text">
    </p>
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <a href="#">
        <img class="avatar" src="img/avatar.png" alt="...">
        <h5 class="title">{{user.fullName}}</h5>
      </a>
      <p class="description">
        {{user.title}}
      </p>
    </div>
    <p></p>
    <p class="card-description">
      {{user.description}}
    </p>
    <div slot="footer" class="button-container">
      <base-button icon round class="btn-facebook">
        <a href="https://www.facebook.com/osniel.quintana">
          <i class="fab fa-facebook"></i>
        </a>
      </base-button>
      <base-button icon round class="btn-linkedin">
        <a href="https://www.linkedin.com/in/osniel-quintana">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </base-button>
      <base-button icon round class="btn-skype">
        <a href="https://join.skype.com/invite/B7kqMgeXkhlk">
          <i class="fab fa-skype"></i>
        </a>
      </base-button>
      <base-button icon round class="btn-github">
        <a href="https://github.com/croxx219">
          <i class="fab fa-github-alt"></i>
        </a>
      </base-button>
    </div>
  </card>
</template>
<script>
  export default {
    props: {
      user: {
        type: Object,
        default: () => {
          return {};
        }
      }
    }
  }
</script>
<style>
</style>
