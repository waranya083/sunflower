<template>
  <div>
    <HeaderComponent />
    <div class="banner bg-overlay bg-overlay-400 bg-dark" style="background-image:url(/banner/aboutbn.png); height: 100vh; background-position: bottom;">
      <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="text-center">
          <h1 class="text-white">About Us</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
              <li class="breadcrumb-item"><a href="#" class="text-white">Home</a></li>
              <li class="breadcrumb-item active text-white" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>


<script>
import HeaderComponent from '~/components/Header.vue';
import FooterComponent from '~/components/Footer.vue';

export default {
  name: 'about',
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
/* Add any additional scoped styles here */
.header{
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
  background: transparent;
  /* Remove background */
}

.footer-content {
  position: relative;
  z-index: 3;
  /* ตั้งค่า z-index ให้สูงกว่าแบนเนอร์ */
}

.banner {
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: flex-end;  /* เนื้อหาอยู่ล่างสุด */
  align-items: center;
  position: absolute;
  bottom: 0;
}


.bg-overlay {
  position: relative;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

