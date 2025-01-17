<template>
  <footer>
    <div class="bg-3">
      <div class="learn">
        <span
          >本網站僅供個人作品使用 |
          <router-link to="/login" href="#" class="fw-bolder">登入後台</router-link></span
        >
        <span>茶 © 2024 copyright</span>
      </div>
      <div class="contact">
        <span class="fs-5 Serif-TC nature-1 fw-bolder">聯絡我們</span>
        <span>地址 | 888台北市發發區發發路8號</span>
        <span>電話 | 02-12345678</span>
        <span>
          <a href="#" class="me-3"
            ><span class="d-none">FaceBook</span><i class="bi bi-facebook nature-1 h3"></i>
          </a>
          <a href="#"
            ><span class="d-none">Youtube</span><i class="bi bi-youtube nature-1 h3"></i
          ></a>
        </span>
      </div>
      <div class="map">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.589320821554!2d121.51448637525326!3d25.04800747780728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z5Y-w5YyX!5e0!3m2!1szh-TW!2stw!4v1725527326380!5m2!1szh-TW!2stw"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  div.bg-3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    div.learn {
      padding: 1rem;
      span {
        display: block;
        margin: 0.5rem;
        a {
          text-decoration: none;
          color: #212529;
          transition: color 0.5s ease;
        }
        a:hover {
          color: #1a4d2e;
        }
      }
    }
    div.contact {
      padding: 1rem;
      span {
        display: block;
        margin: 0.5rem;
        i:hover {
          color: #88ab8e;
        }
      }
    }
    div.map {
      padding: 0.5rem;
      iframe {
        height: 100%;
      }
    }
  }
}
</style>

<script>
export default {};
</script>
