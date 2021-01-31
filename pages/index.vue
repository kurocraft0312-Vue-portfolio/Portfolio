<template>
  <div class="mt-2">
    <v-container
      class="layout_center"
    >
      <h1 class="page_title">夜鼠</h1>
      <p class="page_title__ruby">-ヨネズミ-</p>
      <p class="page_descri">「夜」をテーマとしたホームページ/ツール開発を行っております。</p>

      <v-card
        elevation="1"
        class="ma-2"
      >
        <v-list-item
        >
          <v-img></v-img>
        </v-list-item>
      </v-card>

      <v-btn
        elevation="1"
        href="/contact"
      >
        <v-icon>mdi-email</v-icon>
        お問い合わせ
      </v-btn>

    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.layout_center {
  text-align: center;
}
.page_title__ruby {
  font-size: .8rem;
}
</style>
