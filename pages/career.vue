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
            <div class="tag-lists">
              <span class="tag-skill" v-for="taglist in taglists" :key="taglist.key">{{taglist.skill}}</span>
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
          title: 'コーポレートサイトの構築・作成',
          time: '2020/01~2021/03',
          desc: '会社が企業活動を宣伝するために必要な'
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
