<template>
  <div class="page-container">
    <HeaderComponent class="header-section" />
    <div class="banner bg-overlay bg-overlay-400 bg-dark" style="background-image:url(/banner/servicebn.png); height: 70vh; background-position: bottom;">
      <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="text-center">
          <h1 class="text-white">Contact</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
              <li class="breadcrumb-item"><a href="/" class="text-white">Home</a></li>
              <li class="breadcrumb-item active text-white" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div class="content-container">

    </div>
    <FooterComponent class="footer-section" />
  </div>
</template>

<script>
import HeaderComponent from '~/components/Header.vue';
import FooterComponent from '~/components/Footer.vue';

export default {
  name: 'contact',
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
  font-family: 'Athiti', sans-serif;
  /* Ensure the same font is used throughout the website */
}

.header-section {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
  background: transparent;
  /* Remove background */
}

.footer-section {
  position: relative;
  z-index: 3;
  background: transparent; /* ตั้งให้โปร่งใส */
  margin-top: auto; /* ให้ footer อยู่ล่างสุดของ container */
  bottom: 0;
  width: 100%;
  padding: 20px; /* Add padding to ensure visibility */
  color: white; /* Ensure text is visible */
}

.banner {
  width: 100%;
  height: 70vh; /* Adjust height to make the banner taller */
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute; /* Change to absolute */
  top: 0; /* Position at the top */
  z-index: 2; /* Ensure it is behind the header */
}

.content-container {
  width: 100%;
  padding: 20px; /* Add padding to ensure content is not hidden */
  flex: 1; /* Ensure content container takes available space */
  margin-top: 70vh; /* Add margin to push content below the banner */
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* Adjust alignment */
  flex-direction: column;
  min-height: 50vh; /* Adjust height to ensure content is visible */
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer-section {
  position: relative; /* Changed from absolute */
  z-index: 3;
  background: #333; /* Set background color */
  margin-top: auto;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: white;
}

</style>

