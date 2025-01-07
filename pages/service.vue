<template>
  <div>
    <HeaderComponent />
    <div>
      <h1>About page</h1>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '~/components/Header.vue';
import FooterComponent from '~/components/Footer.vue';

export default {
  name: 'service',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap');

body,
h1,
h2,
h3,
p,
a,
span,
button {
  font-family: 'Athiti', 'IBM Plex Sans Thai', sans-serif;
  /* Ensure the same font is used throughout the website */
}

/* Add any additional scoped styles here */
</style>

