// import React from "react";
// import  ReactDOM  from "react-dom/client";

// // wrap your jsx

// // function Greeting(){
// //     return <h1>Hello Manoj </h1>;
// // }

// // const myFirstElement = <h1>Hello React!</h1>

// const Greeting = () =>{
//     return (
//         <>
//         <div>
//             <h1>Hello Manoj</h1>
//             <ul>
//                 <li>
//                     <a href="#">Hello world</a>
//                 </li>
//             </ul>
//             <img src=" " alt="image"/>

//         </div>
//         </>
//     )
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Greeting />);

// import React from "react";
// import  ReactDOM  from "react-dom/client";

// const Person = () =>{
//     return <h1>Manoj</h1>;
// };

// const Messsage = () =>{
//     return <p>this is my messsage</p>;
// };

// const Greeting = () =>{
//     return (
//         <div>
//             <Person/>
//             <Messsage/>
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Greeting />);

// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import "./index.css";

// const Image = () =>{
//     return (<>
//     <img src="https://cdn.waterstones.com/bookjackets/large/9780/5713/9780571368709.jpg" alt="image"/>
//     </>);
// }

// // const Author = () => <h1>Claire Keegan</h1>;
// const BookName  = () => <h2 style={{color:"#617d98"}}>Small Things Like These </h2>;


// const Book = () =>{

//     const authorName = "Claire Keegan ";

//     return (
//         <article className="book">             
//         <Image/>
//         <h1>{authorName}</h1>
//         <h1>{authorName.toUpperCase()}</h1>
//         <BookName/>
//         </article>
        
//     );
// }

// const BookList = () =>{
//     return (
//         <sectionct className="bookList">
//             <Book/>
//             <Book/>
//             <Book/>
//         </sectionct>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BookList />);

// Props

// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import "./index.css";

// const authorName = "Hannah Kaner";
// const title = "Godkiller - Godkiller Book 1";
// const img = "https://cdn.waterstones.com/bookjackets/large/9780/0085/9780008521462.jpg";

// const firstBook = {
//     author : "Quentin Tarantino",
//     title : "Cinema Speculation",
//     img : "https://m.media-amazon.com/images/I/511DfMFswTL._SX498_BO1,204,203,200_.jpg"
// }

// function BookList() {

//     return (
//         <sectionct className="bookList">
//              <Book 
//              author = {firstBook.author}
//              title = {firstBook.title}
//              img = {firstBook.img}
//              />     
//              <Book 
//              author = "John Zubrzycki"
//              title = "The Shortest History of India"
//              img = "https://m.media-amazon.com/images/I/51AYluNQ8qL._SX324_BO1,204,203,200_.jpg"
//              />     
//         </sectionct>
//     );

// const Book = (props) =>{

//     const {title, author, img} = props;
//     return(
//         <article className="book">
//             <img src={img} alt=""/>
//             <h1>{title}</h1>
//             <h2>{author}</h2>
//         </article>
//     );
// }
// const Book = ({title, author, img}) =>{

//     // const {title, author, img} = props;
//     return(
//         <article className="book">
//             <img src={img} alt=""/>
//             <h1>{title}</h1>
//             <h2>{author}</h2>
//         </article>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BookList />);

// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import "./index.css";

// const names = ["manoj", "bob", "suzi"];

// const newNames = names.map((name) =>{
//     return <h1>{name}</h1>;
// })

// function BookList(){
//     return <section>{newNames}</section>
// }

// const books = [
//     {
//         id:1,
//         title : "Cinema Speculation",
//         author : "Quentin Tarantino",
//         img : "https://m.media-amazon.com/images/I/511DfMFswTL._SX498_BO1,204,203,200_.jpg"
//     },
//     {
//         id:2,
//         title : "The Shortest History of India",
//         author : "John Zubrzycki",
//         img : "https://m.media-amazon.com/images/I/51AYluNQ8qL._SX324_BO1,204,203,200_.jpg"
//     },
//     {
//         id:3,
//         title : "Godkiller - Godkiller Book 1",
//         author : "Hannah Kaner",
//         img : "https://cdn.waterstones.com/bookjackets/large/9780/0085/9780008521462.jpg"
//     },
// ];

// function BookList(){
//     return(
//         <section className="bookList">
//             {books.map((book) =>{
//                 const {title, author, img, id} = book;
//                 return <Book key={id} book={book}/>
//             })}
//         </section>
//     );
// }

// const Book = (props) =>{
//     const {title, author, img} = props.book;
//     return (
//         <article className="book">
//             <img src={img} alt="////" />
//             <h1>{title}</h1>
//             <h1>{author}</h1>
//         </article>
//     );
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BookList />);


import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css";


const books = [
    {
        id:1,
        title : "Cinema Speculation",
        author : "Quentin Tarantino",
        img : "https://m.media-amazon.com/images/I/511DfMFswTL._SX498_BO1,204,203,200_.jpg"
    },
    {
        id:2,
        title : "The Shortest History of India",
        author : "John Zubrzycki",
        img : "https://m.media-amazon.com/images/I/51AYluNQ8qL._SX324_BO1,204,203,200_.jpg"
    },
    {
        id:3,
        title : "Godkiller - Godkiller Book 1",
        author : "Hannah Kaner",
        img : "https://cdn.waterstones.com/bookjackets/large/9780/0085/9780008521462.jpg"
    },
];





    function BookList(){
        return(
            <section className="bookList">
                {books.map((book) =>{
                    const {title, author, img, id} = book;
                    return <Book key={id} book={book}/>
                })}
            </section>
        );
    }
    
    const Book = (props) =>{
        const {title, author, img} = props.book;

        
    const eventHandler = () =>{
        console.log(title);
    }
        return (
            <article className="book">
                <img src={img} alt="////" />
                <h1 onClick={eventHandler}>{title}</h1>
                <h1>{author}</h1>
            </article>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<BookList />);