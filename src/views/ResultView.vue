<template>
  <div class="result-view">
    <div class="result-view">
      <div class="h-50 d-flex fd-column ai-center border-bottom pb-resp-80">
        <div class="result-view__container w-100 ta-center">
            <div class="result-view__title mt-resp-80">
              Результаты опроса
            </div>
            <div class="result-view__total">
              <span>78%</span> | 100%
            </div>
            <div class="result-view__congratulations">
              Поздравляю! <br> Вы прошли курс о Богах скандинавской мифологии <br> Ваш рейтинг: <span>СИЛАЧ</span>
            </div>
          </div>
        </div>
      <div class="h-50 d-flex fd-column ai-center ta-center mt-resp-80 ">
        <div class="result-view__container w-100">
          <div class="result-view__title">
            Над сайтом работали:
          </div>
          <div class="d-flex ai-center jc-between w-100">
            <div class="d-flex fd-column ai-center ta-center">
              <div class="result-view__member-image">
                <img src="../assets/images/result/kuriyama.jpg" alt="image">
              </div>
              <div class="result-view__member-name">
                Андрей Голубев
              </div>
              <div class="d-flex ai-center">
                <div class="result-view__social">
                  <img src="../assets/icons/instagram.svg" alt="image">
                </div>
                <div class="result-view__social">
                  <img src="../assets/icons/telegram.svg" alt="image">
                </div>
                <div class="result-view__social">
                  <img src="../assets/icons/github.svg" alt="image">
                </div>
              </div>
            </div>
            <div class="d-flex fd-column ai-center ta-center">
              <div class="result-view__member-image">
                <img src="../assets/images/result/komi.jpg" alt="image">
              </div>
              <p class="result-view__member-name">
                Александр Никифоров
              </p>
              <div class="d-flex ai-center">
                <div class="result-view__social">
                  <img src="../assets/icons/instagram.svg" alt="image">
                </div>
                <div class="result-view__social">
                  <img src="../assets/icons/telegram.svg" alt="image">
                </div>
                <div class="result-view__social">
                  <img src="../assets/icons/github.svg" alt="image">
                </div>
              </div>
            </div>
            <div class="d-flex fd-column ai-center ta-center">
              <div class="result-view__member-image">
                <img src="../assets/images/result/Komi-san-2.png" alt="image">
              </div>
              <p class="result-view__member-name">
                Евгений Голуб
              </p>
              <div class="d-flex ai-center">
                <div class="result-view__social">
                  <img src="../assets/icons/instagram.svg" alt="image">
                </div>
                <div class="result-view__social">
                  <img src="../assets/icons/telegram.svg" alt="image">
                </div>
                <div class="result-view__social">
                  <img src="../assets/icons/behance.svg" alt="image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.result-view {
  position: relative;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__title {
    font-weight: 600;
    font-size: 42px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: #FFFFFF;

    &:first-child {
      margin-bottom: 58px;
    }
    &:last-child {
      margin-bottom: 48px;
    }
  }

  &__total {
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FEFEFE;
    margin-bottom: 50px;

    span {
      color: #6FCF97;
    }
  }

  &__congratulations {
    font-weight: 700;
    font-size: 26px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FEFEFE;

    span {
      color: #6FCF97;
    }
  }

  &__member {
    text-align: center;
    display: flex;

    &-image {
      width: 180px;
      height: 220px;
      margin-bottom: 28px;

      img {
        border-radius: 16px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-name {
      font-weight: 700;
      font-size: 26px;
      line-height: 130%;
      letter-spacing: 0.05em;
      color: #FFFFFF;
      margin-bottom: 30px;
    }
  }

  &__social {
    &:not(:last-child) {
      margin-right: 36px;
    }
  }
}
</style>
