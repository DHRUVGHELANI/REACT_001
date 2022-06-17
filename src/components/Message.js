// import Author from "./Author";

// function Message(props) {
//     return (
//         <>

//             {
//                 props.blog_detail.map((value, index) => {
//                     return (
//                         <>
//                             <div className="card">
//                                 <img src={value.url} alt="Avatar" style={{ width: "100%" }} />
//                                 <div className="container">
//                                     <h4><b>{value.name}</b></h4>
//                                     <p>{value.profession}</p>
//                                 </div>
//                             </div>
//                             <Author author_name={value.name} author_profession={value.profession} />
//                         </>

//                     )
//                 })
//             }
//         </>
//     );
// }

// export default Message;


function Message(props) {
    return (
        <>
            <h1>{props.msg}</h1>
        </>
    );
}

export default Message;