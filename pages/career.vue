<template>
  <div>
    <div class="container">
      <md-card class="card-sec" v-for="carrercard in carrercards" :key="carrercard.key">
        <md-card-header class="card-sec__frame">
          <md-card-header-text>
            <section class="card-frame">
              <h2 class="md-title career-title">{{carrercard.title}}</h2>
              <time class="md-times">{{carrercard.time}}</time>
              <p class="md-descri">{{carrercard.desc}}</p>
            </section>
            <div class="system-types">
              <span class="system-title">種類：</span>
              <span class="system-type">{{carrercard.systemtype}}</span>
            </div>
            <div class="tag-lists">
              <span class="tag-title">技術：</span>
              <span class="tag-skill" v-for="taglist in taglists" :key="taglist.key">{{taglist.skill}}</span>
            </div>
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
.career-title {
  font-weight: bold;
}
.md-descri {
  display: block;
  margin: 8px 0;
}
.system-types,
.tag-lists {
  margin: 8px 0;
}
.system-title,
.tag-title {
  color: #ffffff;
  font-weight: bold;
}
.system-type,
.tag-skill {
  background-color: #E0E0E0;
  border-radius: 4px;
  color: #2F3F4F;
  font-size: 20%;
  font-weight: bold;
  margin: 0 4px;
  padding: 4px;
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      carrercards: [
        {
          title: '企業活動宣伝用サイトの構築・作成',
          time: '2020/01~2021/03',
          desc: '会社が企業活動を宣伝するために必要なWEBサイトを作成しました。',
          systemtype: 'HP制作'
        },
        {
          title: '教育事業会社様の自社メディアの改修・機能開発',
          time: '2019/11~2020/11',
          desc: '自社で取り扱っていた教育系のWEBメディア他5サイトの運営と運営に必要なページの改善・改修・機能開発などを行いました。',
          systemtype: 'HP制作'
        }
      ],
      taglists: [
        {
          skill: 'PHP'
        },
        {
          skill: 'HTML5'
        },
        {
          skill: 'CSS3'
        },
        {
          skill: 'jQuery'
        },
        {
          skill: 'MySQL'
        }
      ]
    }
  }
})
</script>
