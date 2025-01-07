<template>
  <div>
    <div class="header">
      <div class="promo">
        รับสิทธิ์ออกแบบฟรี! 50% ทันที เมื่อใช้บริการออกแบบภายใน <button>จองคิวตอนนี้</button>
      </div>
    </div>
    <div class="nav">
      <div class="logo">
        <img src="/logo.png" alt="Sunflower House Logo">
      </div>
      <div class="menu">
        <!-- <a href="#">Home</a> -->
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About Us</nuxt-link>
        <nuxt-link to="/service">Service</nuxt-link>
        <nuxt-link to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link to="/contact">Contact Us</nuxt-link>
      </div>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-line"></i></a>
        <a href="#"><i class="fas fa-phone"></i></a>
        <a href="#"><i class="fas fa-envelope"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap');

.header {
  background-color: #fff;
  padding: 10px 20px;
  text-align: center;
  /* border-bottom: 1px solid #ddd; */
  font-family: 'Athiti', sans-serif;
  z-index: 1000; /* Ensure the header has the highest z-index */
  position: relative;
}

.header .promo {
  font-size: 1.1rem;
  color: #333;
}

.header .promo button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent;
  z-index: 1001; /* Ensure the nav has a high z-index */
  position: relative;
}

.nav .logo {
  display: flex;
  align-items: center;
  margin-left: 150px;
}

.nav .logo img {
  height: 50px;
  margin-right: 10px;
}

.nav .menu {
  display: flex;
  gap: 20px;
  background: transparent;

}

.menu {
  display: flex;
  margin-left: auto;
  background: transparent;
  /* ทำให้ .menu ขยับไปทางขวาสุด */
}

.menu a {
  margin-left: 10px;
  /* เพิ่มระยะห่างระหว่างลิงก์ในเมนู */
}

.nav .menu a {
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
}

.social-icons {
  display: flex;
  margin-left: 40px;
  /* เพิ่มระยะห่างระหว่าง .menu กับ .social-icons */
  margin-right: 200px;
}

.social-icons a {
  margin-left: 15px;
  /* เพิ่มระยะห่างระหว่างไอคอนแต่ละตัว */
  color: #333;
  font-size: 18px;
}
</style>
