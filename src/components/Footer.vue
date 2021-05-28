<template>
  <div class="footer">
    <div class="footer__telephone">
      <p>+7(727) 269-54-54</p>
      <p>+7(708)480-78-00</p>
    </div>
    <p>© M&C 2021</p>
    <div class="footer__images">
      <img src="../assets/images/Instagram.svg" />
      <img src="../assets/images/Telegram.svg" />
      <img src="../assets/images/VK.svg" />
    </div>
  </div>
</template>
<style scoped>
.footer {
  padding: 25px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  bottom: 0;
  left: 0;
  background: #fff8f4;
}
.footer__images > img {
  margin-left: 5px;
  width: 40px;
}
.footer__images > img:first-child {
  margin-left: 0;
}
@media (max-width: 1023px) {
  .footer {
    padding: 15px 10px;
  }
  p {
    font-size: 12px;
  }
  .footer__images > img {
    margin-left: 4px;
    width: 30px;
  }
}
@media (max-width: 426px) {
  .footer__images > img {
    margin-left: 3px;
    width: 30px;
  }
}
</style>
