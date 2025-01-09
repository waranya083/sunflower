<template>
  <div class="page-container">
    <HeaderComponent class="header-section" />
    <div class="banner bg-overlay bg-overlay-400 bg-dark"
      style="background-image:url('/banner/servicebn.png'); height: 70vh; background-position: bottom;">
      <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="text-center">
          <h1 class="text-white">รับออกแบบตกแต่งภายในบ้าน</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
              <li class="breadcrumb-item"><a href="/" class="text-white">Home</a></li>
              <li class="breadcrumb-item active text-white" aria-current="page"><a href="/service"
                  class="text-white">Service</a></li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div class="content-container">
      <section v-if="services && services.length">
        <div v-for="(service, index) in services" :key="index">
          <div class="d-flex justify-content-start align-items-center about-section">
            <div class="text-left p-3 about-content">
              <div class="d-flex align-items-center mb-2">
                <div class="yellow-dot"></div>
                <h2 class="text-bold mb-2 about-heading">{{ service.title }}</h2>
              </div>
              <p class="mb-3 about-text">
                {{ service.short_detail }}
              </p>
              <a href="#" class="btn btn-primary rounded-pill about-btn">Read More</a>
            </div>
            <div class="about-image" v-if="service.image && service.image.length">
              <img :src="service.image[0]" alt="Livingroom" class="img-fluid">
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="d-flex justify-content-center">
          <a href="#" class="btn btn-primary rounded-pill work-btn">ดูผลงาน</a>
        </div>
      </section>

    </div>
    <FooterComponent class="footer-section" />
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
  },
  data() {
    return {
      serviceCategories: [],
      services: [],
    };
  },
  async asyncData({ $axios }) {
    const serviceCategoryId = 113; // กำหนดค่า service_category_id เป็น 113

    try {
      const response = await $axios.get('/service', {
        params: { service_category_id: serviceCategoryId },
      });

      // กรองข้อมูลในฝั่งไคลเอนต์
      const filteredServices = response.data.service.filter(service => service.service_category_id === serviceCategoryId);

      return {
        services: Array.isArray(filteredServices) ? filteredServices : [],
      };
    } catch (error) {
      console.error('Error fetching services:', error);
      return {
        services: [],
      };
    }
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
}

.header-section {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
  background: transparent;
}

.footer-section {
  position: relative;
  z-index: 3;
  background: transparent;
  margin-top: auto;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: white;
}

.banner {
  width: 100%;
  height: 70vh;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 0;
  z-index: 2;
}

.content-container {
  width: 100%;
  flex: 1;
  margin-top: 80vh;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer-section {
  position: relative;
  z-index: 3;
  background: #333;
  margin-top: auto;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: white;
}

.about-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  /* Add margin to create space between sections */
}

.about-image {
  max-width: 100%;
  margin-left: auto;
  margin-right: 0;
  /* Ensure the image is aligned to the right edge */
}

.about-content {
  max-width: 50%;
  margin-left: 10%;
  /* Add margin-top to create space between content and image */
}

.about-btn {
  background-color: #ededed;
  border: none;
  color: #333;
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Athiti', 'IBM Plex Sans Thai', sans-serif;
  /* Use the same font as the rest of the website */
  margin-top: 20px;
  /* Reduce margin-top to make button closer to text */
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: inline-block;
  text-align: left;
  cursor: pointer;
}

.about-btn:hover {
  background-color: #333;
  color: white;
  transform: scale(1.05);
}

/* Added styles for yellow dot */
.yellow-dot {
  width: 10px;
  height: 10px;
  background-color: rgb(249, 204, 56);
  border-radius: 50%;
  margin-right: 10px;
}

.about-text {
  font-size: 1.2rem;
  line-height: 1.2;
  margin-top: 10px;
  margin-bottom: 10px;
  /* Reduce margin-bottom to make text closer to button */
}

.work-btn {
  background-color: #333;
  color: #fff;
  padding: 10px 40px;
  font-size: 1.1rem;
  font-family: 'Athiti', 'IBM Plex Sans Thai', sans-serif;
  margin-top: 0px;
  margin-bottom: 40px;
  /* Add margin-bottom to move the button away from the bottom edge */
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  position: relative;
  width: 140px;
  /* Reduce the width of the button */
  border: none;
  /* Remove the border */
}

.work-btn::after {
  content: '→';
  position: absolute;
  right: 20px;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.work-btn:hover {
  background-color: #333;
  transform: scale(1.05);
}

.work-btn:hover::after {
  transform: translateX(5px);
}
.frame {
  border-radius: 150px 0 0 0; /* ปรับค่านี้เพื่อให้เฉพาะมุมซ้ายบนโค้ง */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

}
.frame-2 {
  border-radius: 0% 0% 0% 150px; /* ปรับค่านี้เพื่อให้เฉพาะมุมซ้ายบนโค้ง */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frame img {
  width: 750px; /* Reduce the width to make the image smaller */
  height: 350px; /* Adjust the height accordingly */
  object-fit: cover;
}
.frame-2 img {
  width: 750px; /* Reduce the width to make the image smaller */
  height: 350px; /* Adjust the height accordingly */
  object-fit: cover;
}
</style>
