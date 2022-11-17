<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Header -->
    <header id="header">
      <div class="inner">
        <!-- Logo -->
        <a href="링크" class="logo">
          <span class="symbol"><img src="#" alt="" /></span><span class="title">Shell we Homt?</span>
          <!-- <div>아이콘 제작자 <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon">www.flaticon.com</a></div>-->
        </a>

        <!-- Nav -->
        <nav>
          <ul>
            <li><a href="#menu">Menu</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Menu -->
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">CHART</a>
        </li>
      </ul>
    </nav>

    <!-- Main -->
    <div id="main">
      <div class="inner">
        <header>
          <h1>아래의 운동 3가지 중에서 선택하여 운동 자세를 <br />교정 받을 수 있습니다.</h1>
          <p>마우스를 올리면 간단 설명을 볼 수 있습니다.</p>
        </header>
        <section class="tiles">
          <article class="style5">
            <span class="image">
              <img src="@/assets/logo.png" alt="" />
            </span>
            <a href="">
              <!--스쿼트 교육화면 창 링크 -->
              <h2>SQUAT</h2>
              <div class="content">
                <p>
                  스쿼트는 코어 근육, 인대 및 결합조직을<br />강화시키며, 몸의 균형 감각을 <br />발달시키는 운동입니다.
                </p>
              </div>
            </a>
          </article>
          <article class="style6">
            <span class="image">
              <img src="@/assets/logo.png" alt="" />
            </span>
            <a href="#">
              <!--푸쉬업 교육화면 창 링크 -->
              <h2>SHOULDER-PRESS</h2>
              <div class="content">
                <p>
                  숄더 프레스는 어깨 근육(삼각근)의 <br />
                  전면과 측면 부위를 발달시키는 <br />
                  운동입니다.
                </p>
              </div>
            </a>
          </article>
          <article class="style2">
            <span class="image">
              <img src="@/assets/logo.png" alt="" />
            </span>
            <a href="">
              <!--런지 교육화면 창 링크 -->
              <h2>SIDE-LUNGE</h2>
              <div class="content">
                <p>
                  사이드 런지는 하체 근육(허벅 다리)을<br />
                  발달시키며 유산소 운동의 효과도<br />
                  불러오는 운동입니다.
                </p>
              </div>
            </a>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
