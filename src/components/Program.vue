<template>
  <div class="program">
    <h1 class="title text_red text-center">Программа обучения</h1>
    <div class="program__container">
      <img
        class="image-max-size program__image"
        src="../assets/images/Rocket.png"
      />
      <div class="program__info" v-for="program in programs" :key="program.id">
        <p>
          <span class="title_small">{{ program.level }}</span
          >{{ program.text }}
        </p>
      </div>
      <p class="text-center program__description">
        В случае необходимости, мы можем сформировать половинные группы,
        например 0.5, 1.5, 2.5 и т.д. В них будут темы из ниже и выше уровней.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      programs: [
        {
          level: "1 УРОВЕНЬ",
          text:
            " – рекурсия, сложность алгоритмов, битовые операции, перебор, сортировки, бин поиск, динамическое программирование, теория графов, жадные алгоритмы, комбинаторика, теория чисел.",
        },
        {
          level: "2 УРОВЕНЬ",
          text:
            " – сканирующая прямая, дерево отрезков, динамическое программирование (по подотрезкам, по подмножествам, по поддеревьям), графы (мосты, точки сочленения, компоненты сильной связности, Дейкстра, Флойд, Форд-Беллман, СНМ + Краскал), строки (хеши, КМП, Z-функция), геометрия, жадные алгоритмы, комбинаторика, теория чисел.",
        },
        {
          level: "3 УРОВЕНЬ",
          text:
            " – структуры данных (дерево отрезков, декартово дерево, sqrt-декомпозиция, МО), графы (паросочетания, LCA), динамическое программирование (по профилю, по ломанному профилю), матрицы, жадные алгоритмы, строки (хеши, бор, Ахо-Корасик)",
        },
        {
          level: "4 УРОВЕНЬ",
          text:
            " – потоки, персистентное ДО, Convex Hull Trick, Divide and Conquer, Dynamic Optimization, HLD, Centroid Decomposition, жадные алгоритмы и т.д.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.program__container {
  margin-top: 50px;
}
.program__info {
  margin-top: 28px;
}
.program__image {
  float: right;
  shape-outside: url("../assets/images/Rocket.png");
  max-width: 50%;
  width: 490px;
}
.program__description {
  margin: 28px 150px 0;
}
@media (max-width: 2561px) and (min-width: 2151px) {
  .program__container {
    margin-top: 120px;
  }
  .program__info {
    margin-top: 70px;
  }
  .program__image {
    width: 1000px;
  }
  .program__description {
    margin: 70px 200px 0;
  }
}
@media (max-width: 2151px) and (min-width: 1751px) {
  .program__container {
    margin-top: 80px;
  }
  .program__info {
    margin-top: 40px;
  }
  .program__image {
    width: 700px;
  }
  .program__description {
    margin: 40px 150px 0;
  }
}
@media (max-width: 1023px) {
  .program__container {
    margin-top: 25px;
  }
  .program__info {
    margin-top: 14px;
  }
  .program__description {
    margin: 14px 75px 0;
  }
}
@media (max-width: 631px) {
  .program__image {
    display: none;
  }
}
@media (max-width: 426px) {
  .program__description {
    width: 100%;
    margin: 15px 0 0;
  }
  .program__image {
    display: none;
  }
}
</style>
