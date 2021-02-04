<template>
  <div>
    <md-button class="md-raised md-large__btn neon-btn">
      <a href="/contact" class="md-raised__link"><md-icon class="md-raised__icon">email</md-icon>お問い合わせ</a>
    </md-button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
<style scoped>
.md-large__btn {
  height: 100%;
}
.neon-btn {
  background-color: #303030!important;
}
.neon-btn:hover {
  background-color: #e62f8b!important;
  box-shadow: 0 0 10px #e62f8b, 0 0 40px #e62f8b, 0 0 80px #e62f8b;
  color: #ffffff;
}
.md-raised__link {
  color: #ffffff!important;
  display: block;
  padding: 16px;
}
.md-raised__link:hover {
  text-decoration: none;
}
.md-raised__icon {
  color: #ffffff!important;
  margin-right: 8px;
}
</style>
