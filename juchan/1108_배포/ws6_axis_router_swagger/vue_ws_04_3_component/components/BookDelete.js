export default {
  template: /* html */ `
    <div>
        <h1>SSAFY 도서 삭제</h1>
        <div>삭제중...</div>
    </div>
    `,
  created() {
    // url에서 파라미터정보 얻기.
    const params = new URL(document.location).searchParams;
    axios.delete(`http://localhost:9999/vuews/book/${isbn}`).then((res) => {
      if (res.data == "success") {
        alert("삭제가 완료되었습니다.");
        this.$router.push("/list");
      } else {
        alert("삭제에 실패했습니다.");
      }
    });
  },
};
