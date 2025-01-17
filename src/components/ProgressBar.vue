<template>
  <div class="my-5">
    <ul class="progressbar list-unstyled d-flex justify-content-between">
      <li class="active">查看購物明細</li>
      <li>填寫訂單資料</li>
      <li>確認訂單完成</li>
    </ul>
  </div>
</template>

<style lang="scss">
.progressbar {
  counter-reset: num;
  li {
    width: 33.3%;
    text-align: center;
    position: relative;
    //數字
    &::before {
      counter-increment: num;
      content: counter(num);
      border: 2px solid #ddd;
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      margin: 0 auto 10px auto;
      line-height: 25px;
      background-color: white;
      font-size: 14px;
      font-weight: bold;
    }
    // 後方線條
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #ddd;
      top: 15px;
      left: -50%;
      z-index: -9;
    }
    // 去除最前方的線
    &:first-child {
      &:after {
        content: none;
      }
    }
  }
}
.progressbar li.active {
  color: #1a4d2e;
  &:before {
    border-color: #1a4d2e;
    color: #1a4d2e;
  }
}
.progressbar li.active + li:after {
  background-color: #1a4d2e;
}
</style>
