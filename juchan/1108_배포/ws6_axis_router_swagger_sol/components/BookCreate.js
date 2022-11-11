export default {
    template: `
        <div class="regist">
            <h1 class="underline">SSAFY 도서 등록</h1>
            <div class="regist_form">
                <label for="isbn">도서번호</label>
                <input type="text" id="isbn" name="isbn" v-model="isbn" ref="isbn"/><br />
                <label for="title">도서명</label>
                <input type="text" id="title" name="title" v-model="title" ref="title"/><br />
                <label for="author">저자</label>
                <input type="text" id="author" name="author" v-model="author" ref="author" /><br />
                <label for="price">가격</label>
                <input type="number" id="price" name="price" v-model="price" ref="price"/><br />
                <label for="content">설명</label>
                <br />
                <textarea id="content" name="content" v-model="content" ref="content" cols="35" rows="5"></textarea><br />
                <button @click="checkValue">등록</button>
                <button @click="moveList">목록</button>
            </div>
        </div>`,
        data(){
            return{
                isbn:"",
                title:"",
                author:"",
                price:"",
                content:""
            };
        },
        methods:{
            //입력값을 체크한다
            checkValue(){
                let err=true;
                let msg="";

                !this.isbn && ((msg="isbn을 입력해 주세요"), (err=false),this.$refs.isbn.focus());
                err && !this.title && ((msg="제목을 입력해 주세요"), (err=false),this.$refs.title.focus());
                err && !this.author && ((msg="저자을 입력해 주세요"), (err=false),this.$refs.author.focus());
                err && !this.price && ((msg="가격을 입력해 주세요"), (err=false),this.$refs.price.focus());
                err && !this.content && ((msg="내용을 입력해 주세요"), (err=false),this.$refs.content.focus());

                if(!err) alert(msg);
                else this.registBook();
            },

            registBook() {
                // axios의 post를 이용하여 서버와 비동기 통신
                axios
                    .post("http://localhost:9999/vuews/book", {
                        isbn:this.isbn,
                        title: this.title,
                        author: this.author,
                        price: this.price,
                        content: this.content
                    })
                    .then(( data ) => {        // or  ( { data })
                        let msg = "등록 처리시 문제가 발생했습니다.";
                        if (data.data === "success") {    // or  if (data === "success") { 
                            msg = "등록이 완료되었습니다.";
                        }
                        alert(msg);
                        this.moveList()
                    });  
            },

            moveList() {
                this.$router.push("/list");
            }
        }
};