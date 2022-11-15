export default {
    template: `
        <h1>SSAFY 도서 삭제</h1>
        <div>삭제중...</div>
    `,
    created() {
        const params = new URL(document.location).searchParams;
        const booklist = JSON.parse(localStorage.getItem("booklist"));

        booklist.books=booklist.books.filter((book) => {
            return book.isbn != params.get('isbn');
        });
        localStorage.setItem("booklist", JSON.stringify(booklist));
        alert("삭제가 완료되었습니다.");
        location.href = "./list.html";
    },
}