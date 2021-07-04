<template>
  <div class="wrapper">
    <!-- header部分 -->
    <header>
      <p>商家列表</p>
    </header>

    <!-- 商家列表部分 -->
    <ul class="business">
      <li
        v-for="business in businessArr"
        :key="business.businessId"
        onclick="location.href='businessInfo.html'"
      >
        <div class="business-img">
          <img :src="business.businessImg" />
          <div class="business-img-quantity" v-show="business.quantity > 0">
            {{ business.quantity }}
          </div>
        </div>
        <div class="business-info">
          <h3>{{ business.businessName }}</h3>
          <p>
            &#165;{{ business.starPrice }}起送 | &#165;{{
              business.deliveryPrice
            }}配送
          </p>
          <p>{{ business.businessExplain }}</p>
        </div>
      </li>
    </ul>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  data() {
    return {
      orderTypeId: this.$route.query.orderTypeId,
      businessArr: [],
    };
  },
  created() {
    let user = JSON.parse(sessionStorage.getItem("user"));

    this.$axios
      .post("business/listBusinessByOrderTypeId", {
        orderTypeId: this.orderTypeId,
      })
      .then((response) => {
        let arr = response.data;
        for (let business of arr) {
          business.quantity = 0;
        }
        this.businessArr = arr;

        if (user != "") {
          //去购物车表中查询用户是否在某些商家中订购了某些食品
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    Footer,
  },
};
</script>

<style scoped>
/****************** 总容器 ******************/
.wrapper {
  width: 100%;
  height: 100%;
}

/****************** header部分 ******************/
.wrapper header {
  width: 100%;
  height: 12vw;
  background-color: #0097ff;
  color: #fff;
  font-size: 4.8vw;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
}

/****************** 商家列表部分 ******************/
.wrapper .business {
  width: 100%;
  margin-top: 12vw;
  margin-bottom: 14vw;
}
.wrapper .business li {
  width: 100%;
  box-sizing: border-box;
  padding: 2.5vw;
  border-bottom: solid 1px #ddd;
  user-select: none;
  cursor: pointer;

  display: flex;
  align-items: center;
}
.wrapper .business li .business-img {
  /*这里设置为相当定位，成为business-img-quantity元素的父元素*/
  position: relative;
}
.wrapper .business li .business-img img {
  width: 20vw;
  height: 20vw;
}
.wrapper .business li .business-img .business-img-quantity {
  width: 5vw;
  height: 5vw;
  background-color: red;
  color: #fff;
  font-size: 3.6vw;
  border-radius: 2.5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  /*设置成绝对定位，不占文档流空间*/
  position: absolute;
  right: -1.5vw;
  top: -1.5vw;
}
.wrapper .business li .business-info {
  margin-left: 3vw;
}
.wrapper .business li .business-info h3 {
  font-size: 3.8vw;
  color: #555;
}
.wrapper .business li .business-info p {
  font-size: 3vw;
  color: #888;
  margin-top: 2vw;
}
</style>