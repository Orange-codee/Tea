<template>
  <div class="container mt-5">
    <h2 class="nature-1 Serif-TC fw-bolder">活動資訊</h2>
    <div class="row mt-2">
      <div class="d-flex justify-content-center align-items-stretch flex-row flex-wrap">
        <!-- 1 -->
        <div
          class="card m-1 rounded-0"
          style="width: 22rem"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img
            src="../img/activity1.jpg"
            style="height: 300px"
            class="card-img-top rounded-0 objfit"
            alt="國際茶日"
          />
          <div class="card-body">
            <span class="message bg-2">優惠</span>
            <h3 class="card-title Serif-TC brown-1 fw-bolder">521國際茶日</h3>
            <hr />
            <p class="card-text">
              聯合國於2019年宣布每年的5月21日為國際茶日。5/21-5/23
              限定組合75折起，優惠代碼：0521tea。
              <br />
            </p>
          </div>
        </div>
        <!-- 2 -->
        <div
          class="card m-1 rounded-0"
          style="width: 22rem"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <img
            src="../img/activity2-1.jpg"
            style="height: 300px"
            class="card-img-top rounded-0 objfit"
            alt="春季品茶盛會"
          />
          <div class="card-body">
            <span class="message bg-2">活動</span>
            <h3 class="card-title Serif-TC brown-1 fw-bolder">春季品茶盛會</h3>
            <hr />
            <p class="card-text">
              在春和景明的季節，前往茶園探索不同風味的茶葉並體驗了解其製作過程。歡迎來電詢問預約。
            </p>
          </div>
        </div>
        <!-- 3 -->
        <div
          class="card m-1 rounded-0"
          style="width: 22rem"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <img
            src="../img/activity3.jpg"
            style="height: 300px"
            class="card-img-top rounded-0 objfit"
            alt="..."
          />
          <div class="card-body">
            <span class="message bg-2">新品</span>
            <h3 class="card-title Serif-TC brown-1 fw-bolder">新春禮盒上市</h3>
            <hr />
            <p class="card-text">
              新年到，品好茶。精選多種台灣精品茶葉，以精緻包裝送貨到府。是您新春送禮的最佳選擇。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* .card img {
  max-width: 100%;
  height: auto;
} */
.card a {
  padding: 0;
}
.card hr {
  border: 1px solid #1a4d2e;
}
.card-body {
  position: relative;
}
.card .message {
  color: white;
  font-size: 1.25rem;
  padding: 0.3rem;
  position: absolute;
  top: -25px;
}
.card h3 {
  margin-top: 0.5rem;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
