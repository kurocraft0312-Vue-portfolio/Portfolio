<template>
  <div class="layout">
    <div class="container">
      <section class="page_title">
        <h1 class="page_title__text">夜鼠</h1>
        <p class="page_title__ruby">-ヨネズミ-</p>
      </section>
      <p class="page_descri">「夜」をテーマとしたホームページ/ツール開発を行っております。</p>
      <md-card class="card_section">
        <md-card-header class="card_section__frame">
          <md-card-media class="card_section__media">
            <img src="@/assets/img/career.jpg" alt="アイコン1">
          </md-card-media>
          <md-card-header-text>
            <div class="card_section__title">
              <a href="/" class="card_section__link">業務経歴を見る</a>
            </div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
      <md-button class="md-raised md-large__btn md-primary">
        <a href="/contact" class="md-raised__link"><md-icon class="md-raised__icon">email</md-icon>お問い合わせ</a>
      </md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
.layout {
  margin: 0 24px;
}
.container {
  margin: 40px auto;
  text-align: center;
  max-width: 64ch;
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
.md-raised__link {
  color: #ffffff!important;
  display: block;
  padding: 16px;
}
.md-raised__link:hover {
  text-decoration: none;
}
.md-raised__icon {
  margin-right: 8px;
}
</style>
