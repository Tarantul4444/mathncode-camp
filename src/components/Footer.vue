<template>
  <div class="footer">
    <div class="footer__telephone">
      <p>+7(727) 269-54-54</p>
      <p>+7(708)480-78-00</p>
    </div>
    <p>© M&C 2021</p>
    <div class="footer__images">
      <a
        target="_blank"
        href="https://instagram.com/mathncode?utm_medium=copy_link"
        ><img src="../assets/images/Instagram.svg"
      /></a>
      <a target="_blank" href="https://t.me/mathncode"
        ><img src="../assets/images/Telegram.svg"
      /></a>
      <a target="_blank" href="https://vk.com/mathncode"
        ><img src="../assets/images/VK.svg"
      /></a>
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
img {
  margin-left: 5px;
  width: 40px;
}
.footer__images > img:first-child {
  margin-left: 0;
}
@media (max-width: 2561px) and (min-width: 2151px) {
  .footer {
    padding: 50px 40px;
  }
  img {
    margin-left: 15px;
    width: 120px;
  }
}
@media (max-width: 2151px) and (min-width: 1751px) {
  .footer {
    padding: 35px 25px;
  }
  img {
    margin-left: 8px;
    width: 80px;
  }
}
@media (max-width: 1751px) and (min-width: 1451px) {
  .footer {
    padding: 30px 20px;
  }
  img {
    width: 60px;
  }
}
@media (max-width: 1023px) {
  .footer {
    padding: 15px 10px;
  }
  p {
    font-size: 12px;
  }
  img {
    margin-left: 4px;
    width: 30px;
  }
}
@media (max-width: 426px) {
  img {
    margin-left: 3px;
  }
}
</style>
