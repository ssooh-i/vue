export default {
    template: `
        <div class="regist">
            <h1 class="underline">SSAFY 도서 수정</h1>
            <div class="regist_form">
            <label for="isbn">도서번호</label>
            <input type="text" id="isbn" name="isbn"  v-model="isbn" ref="isbn"/><br />
            <label for="title">도서명</label>
            <input type="text" id="title" name="title" v-model="title" ref="title"/><br />
            <label for="author">저자</label>
            <input type="text" id="author" name="author" v-model="author" ref="author"/><br />
            <label for="price">가격</label>
            <input type="number" id="price" name="price" v-model="price" ref="price"/><br />
            <label for="content">설명</label>
            <br />
            <textarea id="content" name="content" v-model="content" ref="content" cols="35" rows="5"></textarea><br />
            <button @click="checkValue">수정</button>
            <button @click="moveList">목록</button>
            </div>
        </div>
    `,
    data() {
        return {
            isbn: "",
            title: "",
            author: "",
            price: "",
            content: ""
        };
    },
    created(){
    const params = new URL(document.location).searchParams;
    // localStorage에서 booklist로 저장된 도서 목록을 얻어온 후 JSON객체로 parsing한다.
    const booklist = JSON.parse(localStorage.getItem("booklist"));
    for(let obj of booklist.books){
        if(params.get('isbn') == obj.isbn){
        this.isbn=obj.isbn;
        this.title=obj.title;
        this.author=obj.author;
        this.price=obj.price;
        this.content=obj.content;
        break;
        }
    }
    },
    methods: {
        checkValue(){
            // 사용자 입력값 체크하기
            // isbn, 제목, 저자, 가격, 설명이 없을 경우 각 항목에 맞는 메세지를 출력
            let err = true;
            let msg = "";
            console.log(!this.isbn);
            !this.isbn && ((msg = "isbn 입력해주세요"), (err = false), this.$refs.isbn.focus());
            err && !this.title && ((msg = "제목 입력해주세요"), (err = false), this.$refs.title.focus());
            err && !this.author && ((msg = "저자 입력해주세요"), (err = false), this.$refs.author.focus());
            err && !this.price && ((msg = "가격 입력해주세요"), (err = false), this.$refs.price.focus());
            err && !this.content && ((msg = "내용 입력해주세요"), (err = false), this.$refs.content.focus());

            if (!err) alert(msg);
            // 만약, 내용이 다 입력되어 있다면 registBook 호출
            else this.modifyBook();
        },
        modifyBook(){
            const params=new URL(document.location).searchParams;
            const booklist=JSON.parse(localStorage.getItem("booklist"));

            for(let i=0; i<booklist.books.length; i++){
                if(booklist.books[i].isbn == params.get('isbn')){
                        booklist.books[i]={
                        isbn:this.isbn,
                        title:this.title,
                        author:this.author,
                        price:this.price,
                        content:this.content
                    };
                    break;
                    }
                }

            // 로컬스트리지 저장
            localStorage.setItem("booklist", JSON.stringify(booklist));
            alert("수정이 완료되었습니다");
            location.href="./list.html"
        },
        moveList(){
            location.href="list.html";
        }
    },
}