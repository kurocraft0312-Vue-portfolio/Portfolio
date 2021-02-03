<template>
  <div>
    <div class="container">
      <md-card class="card-sec">
        <md-card-header class="card-sec__frame">
          <md-card-header-text>
            <section class="card-frame">
              <h2 class="md-title career-title">コーポレートサイトの構築・作成</h2>
              <time class="md-times">2020/01~2021/03</time>
              <p class="md-descri">会社が企業活動を宣伝するために必要な</p>
            </section>
            <div class="tag-lists">
              <span class="tag-skill">PHP</span>
            </div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
    </div>
  </div>
</template>
<style scoped>
.card-sec {
  background-color: #303030;
  border-radius: 4px;
}
.career-title {
  font-weight: bold;
}
.md-descri {
  display: block;
  margin: 8px 0;
}
.tag-skill {
  background-color: #E0E0E0;
  border-radius: 4px;
  color: #2F3F4F;
  font-size: 20%;
  font-weight: bold;
  padding: 4px;
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
