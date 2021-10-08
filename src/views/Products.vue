<template>
  <div class="product">
    <!-- <ul class="product-fullpage-indicator">
      <li
        v-for="(item, index) in products"
        :key="item.id"
        class="product-fullpage-indicator-item"
        :class="{ active: activeIndex === index }"
        @click="activeIndex = index"
      >
        <img :src="item.logo" alt />
      </li>
    </ul> -->
    <!-- <transition :duration="duration" :name="transitionName"> -->
      <!-- ... the buttons ... -->
      <div
        :key="index"
        class="view-wrapper"
        v-if="!loading"
        v-for="(item, index) in products"
        :style="`backgroundImage:url(${item.cover})`"
      >
        <div class="content">
          <div class="logo">
            <img :src="item.logo" width="100%" height="100%" alt />
          </div>
          <h2>{{ item.title }}</h2>
          <div class="description">{{ item.description }}</div>
          <div class="subDescription">{{ item.subDescription }}</div>
          <div class="link">
            更多信息，请访问：
            <br />
            <span @click="jump( item.link )" style="cursor: pointer;">{{ item.link }}</span>
          </div>
        </div>
      </div>
    <!-- </transition> -->
  </div>
</template>
<script>
// import '../rem.js'
export default {
  name: "product",
  data() {
    return {
      products: [
        {
          cover:require('../../public/student.jpg'),
          description:
            "健康书院学生端为老年群体提供在线教育课程、养生讲堂等咨询",
          id: 1,
          link: "https://all.bnuz.edu.cn/old/student",
          logo:require('../../public/student_logo.png'),
          name: "student",
          subDescription: "",
          title: "健康书院学生端"
        },
        {
          cover:require('../../public/student.jpg'),
          description: "为更多教育工作者提供线上平台，为更多老年群体服务",
          id: 2,
          link: "https://all.bnuz.edu.cn/old/teacher",
          logo:require('../../public/teacher_logo.png'),
          name: "student",
          subDescription: "",
          title: "健康书院教师端"
        },
        {
          cover:require('../../public/student.jpg'),
          description:
            "健康书院平台中后台管理系统，提供教育资源、订单资金管理等功能",
          id: 3,
          link: "https://all.bnuz.edu.cn/old/admin",
          logo:require('../../public/admin_logo.png'),
          name: "student",
          subDescription: "",
          title: "健康书院管理员端"
        }
      ],
      activeIndex: 0,
      transitionName: "",
      scrolling: false,
      duration: 1000,
      loading: false
    };
  },
  watch: {
    activeIndex(newIndex, oldIndex) {
      if (this.scrolling) {
        return;
      }
      if (this.$route.params.id) {
        delete this.$route.params.id;
        return;
      }

      this.transitionName = newIndex < oldIndex ? "move-down" : "move-up";
    }
  },
  // created() {
  //   this.loading = true;
  //   const loading = this.$loading({
  //     position: { top: 60 }
  //   });
  //   this.loading = false;
  //   loading.close();
  // },
  mounted() {
    window.addEventListener("mousewheel", this.mousewheelHandler);
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.mousewheelHandler);
  },
  computed: {
    item() {
      return this.products[this.activeIndex] || {};
    }
  },
  methods: {
    mousewheelHandler(e) {
      if (this.scrolling) {
        return;
      }
      this.scrolling = true;
      if (e.wheelDelta > 0) {
        this.transitionName = "move-down";
        this.activeIndex =
          this.activeIndex === 0
            ? this.products.length - 1
            : this.activeIndex - 1;
      } else {
        this.transitionName = "move-up";
        this.activeIndex = (this.activeIndex + 1) % this.products.length;
      }
      setTimeout(() => {
        this.scrolling = false;
      }, this.duration);
    },
    jump(url){
      window.open(url)
    }
  }
};
</script>
<style lang="less" scoped>
.move-up-leave-active,
.move-up-enter-active,
.move-down-leave-active,
.move-down-enter-active {
  transition: all 0.7s;
  transition-timing-function: cubic-bezier(0.66, 0, 0.34, 1);
}
.move-up-leave-to,
.move-up-enter,
.move-down-leave-to,
.move-down-enter {
  opacity: 0;
}

.move-up-leave-to,
.move-down-enter {
  transform: translateY(-100%);
}
.move-down-leave-to,
.move-up-enter {
  transform: translateY(100%);
}
.cqt {
  width: 100%;
}
.product {
  // position: fixed;
  position: absolute;
  z-index: -1;
  top: 60px;
  right: 0;
  left: 0;
  bottom: 0;
  min-height: 500px;
  min-width: 700px;
  &-fullpage-indicator {
    position: absolute;
    z-index: 333;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);

    &-item {
      margin: 22px 0;
      width: 5vh;
      height: 5vh;
      min-height: 30px;
      min-width: 30px;
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 50%;
      overflow: hidden;

      &:hover,
      &.active {
        transform: scale(1.3);

        box-shadow: 0 0 14px 0 @box-shadow-dark-color;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .view-wrapper {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    height: 100vh;
    width: 100%;
    // padding-top: 100px;
    padding-left: 100px;

    .content {
      width: 300px;
      transform: translateY(-50%);
      position: relative;
      top: 50%;
      // text-align: center;
      .logo {
        width: 80px;
        height: 80px;
      }
      h2 {
        margin: 30px 0;
      }
      .description,
      .subDescription {
        color: #aaa;
        line-height: 1.4;
      }
      .link {
        margin-top: 40px;
        span {
          color: @main-color;
        }
      }
    }
  }
}
</style>
