<template>
  <div>
    <div class="container">
      <md-card class="card-sec">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">今取り組んでいること</div>
            <ul class="dev-lists">
              <li class="dev-list">CMS開発</li>
              <li class="dev-list">Chrome拡張機能開発</li>
              <li class="dev-list">ソースコードエディタの開発</li>
              <li class="dev-list">Reddit/Twitter用クライアント・ツールの開発</li>
            </ul>
          </md-card-header-text>
        </md-card-header>
      </md-card>
      <Contactbtn />
    </div>
  </div>
</template>
<style scoped>
.card-sec {
  background-color: #303030;
  border-radius: 4px;
  word-break: break-all;
}
.md-title {
  color: #ffffff;
  font-weight: bold;
}
.dev-lists {
  color: #ffffff;
  margin: 16px 0;
  list-style: none;
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
