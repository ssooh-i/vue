export default {
    template: `
        <h1>SSAFY 도서 삭제</h1>
        <div>삭제중...</div>
    `,
    created() {
        axios.delete(`http://localhost:9999/vuews/book/${this.$route.query.isbn}`).then(({ data }) => {
            let msg = "삭제 처리시 문제가 발생했습니다";
            if (data == "success") {
                msg = "삭제가 완료되었습니다";
            }
            alert("삭제가 완료되었습니다.");
            this.$router.push("/list");
        });
    },
}