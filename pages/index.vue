<template>
  <div>
    <div class="container">
      <section class="page_title">
        <h1 class="page_title__text">夜鼠</h1>
        <p class="page_title__ruby">-ヨネズミ-</p>
      </section>
      <p class="page_descri">「夜」をテーマとしたホームページ/ツール開発を行っております。</p>
      <md-card class="card_section">
        <md-card-header>
          <md-card-media>
            <img src="" alt="アイコン1">
          </md-card-media>
          <md-card-header-text>
            <div class="md-title">業務経歴を見る</div>
          </md-card-header-text>
        </md-card-header>
      </md-card>

      <!-- <v-btn
        elevation="1"
        href="/contact"
      >
        <v-icon>mdi-email</v-icon>
        お問い合わせ
      </v-btn> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
.container {
  margin: 40px auto;
  text-align: center;
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
  margin: 24px auto;
  width: 50%;
}
</style>
