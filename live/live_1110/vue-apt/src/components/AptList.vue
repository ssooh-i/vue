<template>
<!-- 컴포넌트는 무조건 루트컨테이너 1개를 가지고 있어야한다 -->

  <div>
    <h2>아파트 목록</h2>
    <input type = "number" v-model="lawdCd">
    <input type = "number" v-model="dealYmd">
    <button @click="getAptList">아파트 목록 얻기</button>
    <table>
      <colgroup>
        <col style="width : 10%"/>
        <col style="width : 30%"/>
        <col style="width : 20%"/>
        <col style="width : 10%"/>
        <col style="width : 30%"/>
      </colgroup>
      <tr>
        <td>일련번호</td>
        <td>아파트 명</td>
        <td>법정동</td>
        <td>층</td>
        <td>매매 가격</td>
      </tr>
      <tbody>
        <apt-list-item v-for="(apt, index) in apts" :key="index" :apt="apt">

        </apt-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import AptListItem from "@/components/AptListItem";

//컴포넌트 생성시 무조건 이름부터 저장해놓기
export default {
  name : "AptList",
  components :{
    AptListItem
  },
  data(){
    return{
      // lawdCd : "11110",
      // dealYmd: "202207",
      lawdCd : "",
      dealYmd: "",
      apts: [],
    };
  },
  methods: {
    getAptList(){
    // const serviceKey = "eAMFRh6s%2F29k5D1uRIhgqkyDubAgSOUilF0ugXthzDyOeFD%2FQd3VUZiykBnUtFWnNS%2FyegnXq9Yn2ksetEQgsg%3D%3D";
    // const url = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&LAWD_CD=${this.lawdCd}&DEAL_YMD=${this.dealYmd}`;
    
    const url = `http://localhost:9999/vue/map/aptlist/${this.lawdCd}/${this.dealYmd}`;
    axios.get(url).then((response)=> (this.apts = response.data.response.body.items.item));
  },
  }
  // created(){
  //   const serviceKey = "eAMFRh6s%2F29k5D1uRIhgqkyDubAgSOUilF0ugXthzDyOeFD%2FQd3VUZiykBnUtFWnNS%2FyegnXq9Yn2ksetEQgsg%3D%3D";
  //   const url = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&LAWD_CD=${this.lawdCd}&DEAL_YMD=${this.dealYmd}`;
    
  //   axios.get(url).then((response)=> (this.apts = response.data.response.body.items.item));
  // },

};
</script>

<style>
td {
  border-bottom: 1px solid black;
}
</style>