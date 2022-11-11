<template>
  <!-- 하나의 root element 필요 -->
  <div>
    <h2>아파트 목록</h2>
    <select v-model="firstCode" @change="getGugun(firstCode)">
      <option value="" selecte="true">시/도 선택</option>
      <option v-for="(sido, index) in sidos" :key="index" :value="sido.sidoCode">
        {{ sido.sidoName }}
      </option>
    </select>
    <select v-model="lawdCd">
      <option value="" selected>구/군 선택</option>
      <option v-for="(gugun, index) in guguns" :key="index" :value="gugun.gugunCode">
        {{ gugun.gugunName }}
      </option>
    </select>
    <input type="text" v-model="dealYmd" />
    <button @click="getAptList">아파트목록열기</button>
    <table>
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 30%" />
        <col style="width: 20%" />
        <col style="width: 10%" />
        <col style="width: 30%" />
      </colgroup>
      <tr>
        <td>일련번호</td>
        <td>아파트명</td>
        <td>법정동</td>
        <td>층</td>
        <td>매매가격</td>
      </tr>
      <tbody>
        <apt-list-item v-for="(apt, index) in apts" :key="index" :apt="apt"></apt-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import AptListItem from "@/components/AptListItem";

export default {
  // 1. 무조권 이름 먼저 작성 요 이름으로 다른곳에서 쓰는 거. 가능하면 파일이름이랑 같은걸로
  name: "AptList",
  components: {
    AptListItem,
  },
  data() {
    return {
      firstCode: "",
      lawdCd: "",
      dealYmd: "",
      apts: [],
      sidos: [],
      guguns: [],
    };
  },
  methods: {
    getAptList() {
      console.log(this.lawdCd);
      // 서버에서 데이터 얻어와서 apts 에 넣기
      // const serviceKey =
      //   "as4CEzEwJfan6%2FhRd87aaIf1QFVHdbdhvMhzGp6ZQUYwoOV20hGtWR657Yz6S8pA9C0oFJcy7L5nVfLmuhz8FA%3D%3D";
      // const url = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&LAWD_CD=${this.lawdCd}&DEAL_YMD=${this.dealYmd}`;
      const url = `http://localhost:9999/vue/map/aptlist/${this.lawdCd}/${this.dealYmd}`;
      axios.get(url).then((response) => {
        console.log(response);
        console.log(response.data.response.body.items.item);
        this.apts = response.data.response.body.items.item;
      });
    },
    getGugun(firstCode) {
      console.log(firstCode);
      if (firstCode != "") {
        axios.get(`http://localhost:9999/vue/map/gugun?sido=${firstCode}`).then((res) => {
          console.log(res);
          const list = res.data;
          this.guguns = list;
        });
      } else {
        this.guguns = [];
      }
    },
  },
  created() {
    axios.get(`http://localhost:9999/vue/map/sido`).then((res) => {
      const list = res.data;
      this.sidos = list;
    });
  },
};
</script>

<style>
td {
  font-weight: bold;
  border-bottom: 2px solid black;
}
</style>
