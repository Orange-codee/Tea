<template>
  <div class="container mt-4 mb-4 px-5">
    <div class="row">
      <!-- eslint-disable max-len -->
      <div class="col-md-3 col-12 gutter-0">
        <ul class="list-group writing-list-group bg-3 rounded-0">
          <li class="list-group-item bg-3 rounded-0 border-0">
            <a
              href="#"
              @click.prevent="selectListItems('茶歷史')"
              class="writing-list-group-item fs-5 Serif-TC fw-bolder nature-1 text-decoration-none"
              :class="{ 'a-active': listItem === '茶歷史' }"
              >茶歷史</a
            >
          </li>
          <li class="list-group-item bg-3 rounded-0 border-0">
            <a
              href="#"
              @click.prevent="selectListItems('茶活動')"
              class="writing-list-group-item fs-5 Serif-TC fw-bolder nature-1 text-decoration-none"
              :class="{ 'a-active': listItem === '茶活動' }"
              >茶活動</a
            >
          </li>
        </ul>
      </div>

      <div class="col-md-9 col-12 bg-1">
        <article v-if="listItem === '茶歷史'" class="py-3 px-5">
          <h3 class="Serif-TC fw-bolder nature-1 mb-3">茶歷史</h3>
          <p class="indent-2">
            茶文化發源於中國，至少從三國、兩晉、南北朝起，中國已有喝茶的風氣，於唐代達到鼎盛，並傳播到周邊如日本等地。
          </p>
          <p class="indent-2">
            茶的起源已不可考，根據陸羽《茶經》的記載「茶之為飲，發乎神農氏」，而中國飲茶起源於神農的說法也因民間傳說而衍生出不同的觀點。《神農百草經》有「神農嘗百草，日遇七十二毒，得荼而解之。」之說，當為茶葉藥用之始。另傳說神農氏在樹下燒水休息，一陣微風拂過樹梢，幾片翠綠的茶樹葉隨風飄落在燒開的水中，神農氏飲用後發現茶水變得清香甘甜，飲後更覺神清氣爽，精力充沛。茶從此便常為中國人飲用了。雖然中國古代神話傳說無法驗證茶在中國的確實起源，但學者們普遍認為，早在公元前三世紀之前，茶在中國就已經非常盛行了。
          </p>
          <p class="indent-2">
            十七世紀茶被帶進歐洲，當時荷蘭及葡萄牙兩個國家都與中國有著海上貿易，他們起初是進行絲綢、綿緞和香料貿易，不久又開始了茶葉貿易，隨後傳遍世界。布拉干薩的凱瑟琳嫁給英格蘭國王查理二世，帶動整個英國貴族社會的飲茶習慣。
          </p>
          <p class="indent-2">
            而現代社會中，飲茶可以抗衰老、排毒、減肥、美顏、助眠，更可防癌，品茶更是緩解現代人壓力的一大管道。
          </p>
          <img src="@/img/history.jpg" class="img-fluid objfit" alt="茶歷史" />
        </article>
        <article v-if="listItem === '茶活動'" class="py-3 px-5">
          <h3 class="Serif-TC fw-bolder nature-1 mb-3">茶活動</h3>
          <!-- 1 -->
          <div class="card mb-3 rounded-0 h-100 w-100">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="@/img/activity1.jpg"
                  class="img-fluid rounded-0 objfit h-100"
                  style="min-height: 200px"
                  alt="國際茶日"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div
                    class="d-flex flex-row flex-wrap justify-content-between align-items-baseline"
                  >
                    <h4 class="card-title Serif-TC brown-1 fw-bolder">521國際茶日</h4>
                    <span class="fs-6 nature-1 Serif-TC fw-bolder">優惠</span>
                  </div>

                  <hr class="my-2" />
                  <p class="card-text">
                    聯合國於2019年宣布每年的5月21日為國際茶日。5/21-5/23
                    限定組合75折起，優惠代碼：0521tea。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="card mb-3 rounded-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="@/img/activity2-1.jpg"
                  class="img-fluid rounded-0 objfit h-100"
                  style="min-height: 200px"
                  alt="國際茶日"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div
                    class="d-flex flex-row flex-wrap justify-content-between align-items-baseline"
                  >
                    <h4 class="card-title Serif-TC brown-1 fw-bolder">春季品茶盛會</h4>
                    <span class="fs-6 nature-1 Serif-TC fw-bolder">活動</span>
                  </div>

                  <hr class="my-2" />
                  <p class="card-text">
                    在春和景明的季節，前往茶園探索不同風味的茶葉並體驗了解其製作過程。歡迎來電詢問預約。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="card mb-3 rounded-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="@/img/activity3.jpg"
                  class="img-fluid rounded-0 objfit h-100"
                  style="min-height: 200px"
                  alt="國際茶日"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div
                    class="d-flex flex-row flex-wrap justify-content-between align-items-baseline"
                  >
                    <h4 class="card-title Serif-TC brown-1 fw-bolder">新春禮盒上市</h4>
                    <span class="fs-6 nature-1 Serif-TC fw-bolder">新品</span>
                  </div>

                  <hr class="my-2" />
                  <p class="card-text">
                    新年到，品好茶。精選多種茶葉，以精緻包裝送貨到府。是您新春送禮的最佳選擇。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      listItem: '茶歷史',
    };
  },
  methods: {
    selectListItems(item) {
      this.listItem = item;
      console.log(this.listItem);
    },
  },
};
</script>
