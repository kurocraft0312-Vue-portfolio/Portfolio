<template>
  <div class="layout">
    <div class="container c_container">
      <section class="page_title">
        <h1 class="page_title__text">夜鼠</h1>
        <p class="page_title__ruby">-ヨネズミ-</p>
      </section>
      <p class="page_descri">「夜」をテーマとしたホームページ/ツール開発を行っております。</p>
      <md-card class="card_section" v-for="card in cards" :key="card.key">
        <md-card-header class="card_section__frame">
          <md-card-media class="card_section__media">
            <img :src="card.image" :alt="card.alt">
          </md-card-media>
          <md-card-header-text>
            <div class="card_section__title">
              <a :href="card.link" class="card_section__link">{{card.contents}}</a>
            </div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
      <Contactbtn />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Contactbtn from '../components/Contactbtn.vue'
export default Vue.extend({
  name: 'Index',
  components: {
    Contactbtn
  },
  data() {
    return {
      cards: [
        {
          image: require('@/assets/img/career.jpg'),
          alt: '業務経歴',
          link: '/career',
          contents: '業務経歴'
        },
        {
          image: require('@/assets/img/dev.jpg'),
          alt: '開発事例',
          link: '/dev',
          contents: '開発事例'
        },
        {
          image: require('@/assets/img/money.jpg'),
          alt: '料金表',
          link: '/price',
          contents: '料金表'
        },
        {
          image: require('@/assets/img/human.jpg'),
          alt: '開発者について',
          link: '/about',
          contents: '開発者について'
        }
      ]
    }
  }
})
</script>

<style scoped>
.c_container {
  text-align: center;
}
.layout {
  margin: 0 24px;
  overflow: hidden;
}
.page_title {
  display: block;
  margin: 24px auto;
}
.page_title__text {
  font-size: 2.4rem;
}
.page_title__ruby {
  font-size: .8rem;
}
.card_section {
  background-color: #303030;
  border-radius: 4px;
  margin: 24px auto;
}
.card_section__frame {
  align-items: center;
}
.card_section__media {
  margin: 0;
}
.card_section__title {
  font-size: 1rem;
}
.card_section__link {
  color: #ffffff!important;
  text-decoration: none;
}
</style>
