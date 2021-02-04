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
          <div class="production-purposes">
            <span class="production-purposes__title">制作目的：</span>
            <span class="production-purposes__descri">自己紹介用のサイトが古くて更新したかったから、ついでに新しく作り直しました。</span>
          </div>
          <div class="time-periods">
            <span class="time-period__title">制作にかかった期間：</span>
            <span class="time-period__day">10日</span>
          </div>
          <div class="system-types">
            <span class="system-title">種類：</span>
            <span class="system-type">HP制作</span>
            <!-- <span class="system-type">{{carrercard.systemtype}}</span> -->
          </div>
          <div class="tag-lists">
            <span class="tag-title">技術：</span>
            <span class="tag-skill">Nuxt.js</span>
            <!-- <span class="tag-skill" v-for="taglist in taglists" :key="taglist.key">{{taglist.skill}}</span> -->
          </div>
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
