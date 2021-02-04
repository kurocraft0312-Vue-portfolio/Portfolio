<template>
  <div>
    <div class="container">
      <md-tabs md-alignment="fixed">
        <md-tab md-label="すべて"></md-tab>
        <md-tab md-label="HP"></md-tab>
        <md-tab md-label="ツール"></md-tab>
      </md-tabs>
      <md-card class="card-sec">
        <md-card-media>
          <img src="https://placehold.jp/600x339.png" alt="画像の説明">
        </md-card-media>
        <md-card-header class="card-sec__frame">
          <md-card-header-text>
            <div class="md-title">Portfolio</div>
          </md-card-header-text>
          <md-card-content class="md-card__con">
            <p class="md-desri">夜鼠の個人活動をまとめた活動記録用サイトです。</p>
          </md-card-content>
        </md-card-header>
      </md-card>
    </div>
  </div>
</template>
<style scoped>
.card-sec__frame {
  display: block;
}
.md-card__con {
  margin: 16px 0;
  padding: 0;
}
.md-desri {
  color: #000000;
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {

    }
  }
})
</script>
