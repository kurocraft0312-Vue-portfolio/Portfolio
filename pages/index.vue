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
      <md-button class="md-raised md-large__btn neon-btn">
        <a href="/contact" class="md-raised__link"><md-icon class="md-raised__icon">email</md-icon>お問い合わせ</a>
      </md-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Index',
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
