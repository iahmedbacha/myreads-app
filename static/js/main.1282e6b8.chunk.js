(this["webpackJsonpmyreads-app"]=this["webpackJsonpmyreads-app"]||[]).push([[0],{25:function(e,n,t){e.exports=t(37)},35:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(11),l=t(20),c=t.n(l),h=t(24),s=t(4),i=t(5),u=t(7),d=t(6),f=t(8),k=t(10),b=t(23),m=t(17),p="https://reactnd-books-api.udacity.com",O=localStorage.token;O||(localStorage.token=Math.random().toString(36).substr(-8),O=localStorage.token);var v={Accept:"application/json",Authorization:O},g=function(e,n){return fetch("".concat(p,"/books/").concat(e.id),{method:"PUT",headers:Object(m.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:n})}).then((function(e){return e.json()}))},S=function(e){return fetch("".concat(p,"/search"),{method:"POST",headers:Object(m.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.books}))},C=function(e){var n=e.title;return o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,n))},B=function(e){var n=e.title;return o.a.createElement("h2",{className:"bookshelf-title"},n)},E=function(e){var n=e.thumbnail;return o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'.concat(n,'")')}})};E.defaultProps={thumbnail:""};var y=E,j=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).handleBookShelfOnChange=function(e){(0,t.props.handleBookShelfOnChange)(e.target.value)},t}return Object(f.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.props.shelf;return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:this.handleBookShelfOnChange,defaultValue:e},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))}}]),n}(a.Component),I=function(e){var n=e.thumbnail,t=e.handleBookShelfOnChange,a=e.shelf;return o.a.createElement("div",{className:"book-top"},o.a.createElement(y,{thumbnail:n}),o.a.createElement(j,{handleBookShelfOnChange:t,shelf:a}))};I.defaultProps={thumbnail:""};var N=I,R=function(e){var n=e.title;return o.a.createElement("div",{className:"book-title"},n)},w=function(e){var n=e.authors;return o.a.createElement("div",{className:"book-authors"},n.join(", "))};w.defaultProps={authors:[]};var V=w,A=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).handleBookShelfOnChange=function(e){var n=t.props;(0,n.handleBookShelfOnChange)(n.book,e)},t}return Object(f.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.props.book;return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement(N,{thumbnail:e.imageLinks&&e.imageLinks.thumbnail,handleBookShelfOnChange:this.handleBookShelfOnChange,shelf:e.shelf}),o.a.createElement(R,{title:e.title}),o.a.createElement(V,{authors:e.authors})))}}]),n}(a.Component),T=function(e){var n=e.books;return o.a.createElement("ol",{className:"books-grid"},n.map((function(n){return o.a.createElement(A,{key:n.id,book:n,handleBookShelfOnChange:e.handleBookShelfOnChange})})))},P=function(e){var n=e.books,t=e.handleBookShelfOnChange;return o.a.createElement(T,{books:n,handleBookShelfOnChange:t})},J=function(e){var n=e.title,t=e.books,a=e.handleBookShelfOnChange;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement(B,{title:n}),o.a.createElement(P,{books:t,handleBookShelfOnChange:a}))},M=function(e){var n=e.handleBookShelfOnChange,t=e.books;return o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(J,{title:"Currently Reading",handleBookShelfOnChange:n,books:t.filter((function(e){return"currentlyReading"===e.shelf}))}),o.a.createElement(J,{title:"Want to Read",handleBookShelfOnChange:n,books:t.filter((function(e){return"wantToRead"===e.shelf}))}),o.a.createElement(J,{title:"Read",handleBookShelfOnChange:n,books:t.filter((function(e){return"read"===e.shelf}))})))},x=function(){return o.a.createElement("div",{className:"open-search"},o.a.createElement(r.b,{to:"/search"},o.a.createElement("button",{type:"button"},"Add a book")))},L=function(e){var n=e.title,t=e.books,a=e.handleBookShelfOnChange;return o.a.createElement("div",{className:"list-books"},o.a.createElement(C,{title:n}),o.a.createElement(M,{books:t,handleBookShelfOnChange:a}),o.a.createElement(x,null))},W=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).handleCloseSearch=function(){(0,t.props.handleCloseSearch)()},t}return Object(f.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(r.b,{to:"/"},o.a.createElement("button",{type:"button",className:"close-search",onClick:this.handleCloseSearch},"Close"))}}]),n}(a.Component),q=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).handleSearchBooksInputOnChange=function(e){(0,t.props.handleSearchBooksInputOnChange)(e.target.value)},t}return Object(f.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.props.searchBooksInputValue;return o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:e,onChange:this.handleSearchBooksInputOnChange}))}}]),n}(a.Component),z=function(e){var n=e.handleCloseSearch,t=e.searchBooksInputValue,a=e.handleSearchBooksInputOnChange;return o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(W,{handleCloseSearch:n}),o.a.createElement(q,{searchBooksInputValue:t,handleSearchBooksInputOnChange:a}))},D=function(e){var n=e.books,t=e.handleBookShelfOnChange;return o.a.createElement("div",{className:"search-books-results"},o.a.createElement(T,{books:n,handleBookShelfOnChange:t}))},U=function(e){var n=e.handleCloseSearch,t=e.searchBooksInputValue,a=e.handleSearchBooksInputOnChange,r=e.books,l=e.handleBookShelfOnChange;return o.a.createElement("div",{className:"search-books"},o.a.createElement(z,{handleCloseSearch:n,searchBooksInputValue:t,handleSearchBooksInputOnChange:a}),o.a.createElement(D,{books:r,handleBookShelfOnChange:l}))},F=(t(35),function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).state={books:[],searchBooksInputValue:"",searchBooks:[]},t.searchBooks=Object(b.a)(300,(function(e){S(e).then((function(e){Array.isArray(e)?t.setState((function(n){return{searchBooks:e.map((function(e){if(n.books.filter((function(n){return n.id===e.id})).length>0)return n.books.filter((function(n){return n.id===e.id}))[0];var t=e;return t.shelf="none",t}))}})):t.setState({searchBooks:[]})}))})),t.handleCloseSearch=function(){t.setState({searchBooksInputValue:"",searchBooks:[]})},t.handleBookShelfOnChange=function(e,n){g(e,n).then((function(a){(a[n]&&a[n].includes(e.id)||"none"===n&&!a.currentlyReading.includes(e.id)&&!a.wantToRead.includes(e.id)&&!a.read.includes(e.id))&&t.setState((function(t){if("none"===n)return{books:t.books.filter((function(n){return n.id!==e.id}))};if(t.books.filter((function(n){return n.id===e.id})).length>0)return{books:t.books.map((function(t){var a=t;return a.id===e.id&&(a.shelf=n),a}))};var a=e;return a.shelf=n,{books:[].concat(Object(h.a)(t.books),[a])}}))}))},t.handleSearchBooksInputOnChange=function(e){t.setState({searchBooksInputValue:e}),""!==e?t.searchBooks(e):t.setState({searchBooks:[]})},t}return Object(f.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(p,"/books"),{headers:v}).then((function(e){return e.json()})).then((function(e){return e.books})).then((function(n){e.setState({books:n})}))}},{key:"render",value:function(){var e=this.state,n=e.books,t=e.searchBooks,a=e.searchBooksInputValue;return o.a.createElement("div",{className:"app"},o.a.createElement(k.a,{exact:!0,path:"/"},o.a.createElement(L,{title:"MyReads",books:n,handleOpenSearch:this.handleOpenSearch,handleBookShelfOnChange:this.handleBookShelfOnChange})),o.a.createElement(k.a,{path:"/search"},o.a.createElement(U,{handleCloseSearch:this.handleCloseSearch,books:t,searchBooksInputValue:a,handleSearchBooksInputOnChange:this.handleSearchBooksInputOnChange,handleBookShelfOnChange:this.handleBookShelfOnChange})))}}]),n}(o.a.Component));t(36);c.a.render(o.a.createElement(r.a,null,o.a.createElement(F,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1282e6b8.chunk.js.map