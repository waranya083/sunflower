<template>
  <div class="page-container">
    <HeaderComponent class="header-section" />
    <div class="banner bg-overlay bg-overlay-400 bg-dark"
      style="background-image:url(/banner/aboutbn.png); height: 70vh; background-position: bottom;">
      <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="text-center">
          <h1 class="text-white">About Us</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
              <li class="breadcrumb-item"><a href="/" class="text-white">Home</a></li>
              <li class="breadcrumb-item active text-white" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div class="content-container">
      <section class="section-spacing">
        <div class="container-fluid">
          <div class="d-flex justify-content-start align-items-center about-section">
            <div class="text-left p-3 about-content">
              <div class="d-flex align-items-center mb-2">
                <div class="yellow-dot"></div>
                <h2 class="text-bold mb-2 about-heading">About us</h2>
              </div>
              <p class="mb-3 about-text">
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
              </p>
              <div class="about-image">
                <img src="/picture.png" alt="About Us Image" class="img-fluid rounded">
                <img src="/picture.png" alt="About Us Image" class="img-fluid rounded">
                <img src="/picture.png" alt="About Us Image" class="img-fluid rounded">
                <img src="/picture.png" alt="About Us Image" class="img-fluid rounded">
              </div>
              <p class="mb-3 about-text">
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="full-width-section section-spacing">
        <div class="container-fluid">
          <div class="d-flex align-items-center mission-section">
            <div class="text-left p-3 mission-content">
              <div class="d-flex align-items-center mb-2">
                <div class="yellow-dot mr-2"></div>
                <h2 class="text-bold mb-2 about-heading"">Meet the Team</h2>
              </div>
              <p class=" mb-3 about-text"> Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
                  quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Donec sed odio dui. </p>
              </div>
              <div class="mission-images">
                <div class="circle-image"> <img src="/picture.png" alt="Image 1" class="img-fluid rounded-circle">
                  <p class="image-caption">
                  <h4>Jackie Sanders</h4>
                  </p>
                  <p>CEO</p>
                </div>
                <div class="circle-image"> <img src="/picture.png" alt="Image 2" class="img-fluid rounded-circle">
                  <p class="image-caption">
                  <h4>Cory Zamora</h4>
                  </p>
                  <p>Marketing Specialist</p>
                </div>

              </div>
            </div>
          </div>
      </section>
      <section class="section-spacing">
        <div class="container-fluid">
          <div class="d-flex align-items-center Company-section">
            <div class="text-left p-3 Company-content">
              <div class="d-flex align-items-center mb-2">
                <div class="yellow-dot mr-2"></div>
                <h2 class="text-bold mb-2 about-heading">Company Facts</h2>
              </div>
              <p class="mb-3 about-text"> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec sed odio dui. </p>
            </div>
          </div>
          <div class="chart-section">
            <div class="gauge-chart"> <img src="/gauge1.png" alt="Gauge Chart 1" class="img-fluid rounded-circle">
              <p class="chart-caption">60% New Visitors</p>
            </div>
            <div class="gauge-chart"> <img src="/gauge2.png" alt="Gauge Chart 2" class="img-fluid rounded-circle">
              <p class="chart-caption">80% New Visitors</p>
            </div>
            <div class="gauge-chart"> <img src="/gauge3.png" alt="Gauge Chart 3" class="img-fluid rounded-circle">
              <p class="chart-caption">75% New Visitors</p>
            </div>
            <div class="gauge-chart"> <img src="/gauge4.png" alt="Gauge Chart 4" class="img-fluid rounded-circle">
              <p class="chart-caption">90% New Visitors</p>
            </div>
          </div>
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
  background: transparent;
  /* ตั้งให้โปร่งใส */
  margin-top: auto;
  /* ให้ footer อยู่ล่างสุดของ container */
  bottom: 0;
  width: 100%;
  padding: 20px;
  /* Add padding to ensure visibility */
  color: white;
  /* Ensure text is visible */
}

.banner {
  width: 100%;
  height: 70vh;
  /* Adjust height to make the banner taller */
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  /* Change to absolute */
  top: 0;
  /* Position at the top */
  z-index: 2;
  /* Ensure it is behind the header */
}

.content-container {
  width: 100%;
  padding: 20px;
  /* Add padding to ensure content is not hidden */
  flex: 1;
  /* Ensure content container takes available space */
  margin-top: 70vh;
  /* Add margin to push content below the banner */
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Adjust alignment */
  flex-direction: column;
  min-height: 50vh;
  /* Adjust height to ensure content is visible */
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer-section {
  position: relative;
  /* Changed from absolute */
  z-index: 3;
  background: #333;
  /* Set background color */
  margin-top: auto;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: white;
}

.about-section {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  /* Move the "About us" section down slightly */
}

.about-content {
  flex: 1;
}

.about-image {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  /* Allow horizontal scrolling */
  overflow-y: hidden;
  /* Prevent vertical scrolling */
  -webkit-overflow-scrolling: touch;
  /* Enable smooth scrolling on touch devices */
  scrollbar-width: none;
  /* Hide scrollbar in Firefox */
  -ms-overflow-style: none;
  /* Hide scrollbar in IE and Edge */
  white-space: nowrap;
  /* Ensure images are in a single line */
}

.about-image img {
  display: inline-block;
  /* Ensure images are inline */
  max-width: 48%;
  height: auto;
  margin-right: 10px;
  /* Add margin between images */
  border-radius: 5px;
  /* Add border radius to images */
  transition: transform 0.2s;
  /* Add transition for hover effect */
}

.about-image img:hover {
  transform: scale(1.02);
  /* Scale up image on hover */
}

.container-fluid {
  max-width: 1200px;
  margin: 0 auto;
  /* Center the container */
}

.section-spacing {
  padding: 60px 0;
  width: 100%;
}

.about-section {
  border-radius: 8px;
  padding: 20px;
}

.yellow-dot {
  width: 10px;
  height: 10px;
  background-color: yellow;
  border-radius: 50%;
}

.about-heading {
  font-weight: bold;
  color: #333;
}

.about-text {
  color: #666;
  font-size: 1.2rem;
}

.mission-content {
  flex: 1;
  max-width: 100%;
  width: 100%;
  /* Add this line to make it full-width */
}

.mission-images {
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  flex: 1;
  max-width: 50%;
}

.circle-image {
  text-align: center;
  margin-bottom: 10px;
  width: 50%;
}

.circle-image img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.image-caption {
  margin-top: 5px;
  color: #666;
  font-size: 14px;
}

.container-fluid .mission-section {
  max-width: 100%;

}

.mission-section {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  /* Move the "Our Mission" section down slightly */
  background-color: #F5F5F5;
  /* Change background color */
  width: 100vw;
  /* Full viewport width */
  justify-content: space-between;
  position: relative;
  /* Ensure it stays within the container */
  left: 50%;
  /* Adjust positioning */
  transform: translateX(-50%);
  /* Center the section */
}

.full-width-section {
  width: 100vw;
  /* Full viewport width */
  background-color: #F5F5F5;
  /* Background color */
  position: relative;
  /* Ensure it stays within the container */
  left: 50%;
  /* Adjust positioning */
  transform: translateX(-50%);
  /* Center the section */
}

.Company-section {
  border-radius: 8px;
  padding: 20px;
}

.yellow-dot {
  width: 10px;
  height: 10px;
  background-color: yellow;
  border-radius: 50%;
}

.about-heading {
  font-weight: bold;
  color: #333;
}

.about-text {
  color: #666;
}

.chart-section {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.gauge-chart {
  text-align: center;
}

.gauge-chart img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.chart-caption {
  margin-top: 5px;
  color: #666;
  font-size: 14px;
}
</style>
