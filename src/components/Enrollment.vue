<template>
  <div class="enrollment">
    <h1 class="title text_red text-center enrollment__title">Зачисление</h1>
    <div class="enrollment__container">
      <p
        class="text-center enrollment__block"
        v-for="enroll in enrollment"
        :key="enroll.id"
      >
        {{ enroll }}
      </p>
    </div>
    <img
      src="../assets/images/Team.png"
      class="image-max-size enrollment__image"
    />
    <button class="button enrollment__button">Присоединяйтесь</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enrollment: [
        "Для поступления в M&C Camp необходимо пройти вступительную работу. Это контест, в котором около 20 задач разного уровня. По результатам контеста проходит зачисление в уровни.",
        "В первый день лагеря планируется перепроверка уровня участников и распределение по группам.",
        "Мы оставляем за собой право в течение лагеря перевести ученика в группу выше/ниже уровня в зависимости от его результатов обучения.",
      ],
    };
  },
};
</script>

<style scoped>
.enrollment {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 120px 20px 0;
}
.enrollment__container {
  margin: 0 100px;
}
.enrollment__title {
  margin-bottom: 30px;
}
.enrollment__block {
  margin: 0 30px 5px;
}
.enrollment__image {
  margin-top: 40px;
  width: 70%;
}
.enrollment__button {
  margin-top: 40px;
}
.enrollment__button:hover {
  color: #d90000;
  background: #bdf8f3;
  transition: 0.4s;
}
@media (max-width: 1023px) {
  .enrollment {
    margin: 60px 10px 0;
  }
  .enrollment__container {
    margin: 0 50px;
  }
  .enrollment__title {
    margin-bottom: 15px;
  }
  .enrollment__block {
    margin: 0 20px 5px;
  }
  p {
    font-size: 14px;
  }
  .enrollment__image {
    margin-top: 25px;
  }
  .enrollment__button {
    margin-top: 25px;
  }
}
@media (max-width: 426px) {
  .enrollment {
    margin: 50px 0 0;
  }
  .enrollment__title {
    margin-bottom: 15px;
  }
  .enrollment__block {
    margin: 0 0 3px;
  }
  p {
    font-size: 11px;
  }
  .enrollment__image {
    margin-top: 15px;
  }
  .enrollment__button {
    margin-top: 15px;
  }
}
</style>
