import './App.css';
import Message from './components/Message'
import Darkmode from './components/Darkmode';
// import Fieldset from './components/fieldset';
import Login from './components/Login';
// import MaiBox from './components/MailBox';
// import Soft from './components/soft';

function App() {
  return (
    <div className="App">
      <Darkmode />
      {/* <Fieldset /> */}
      {/* <Login /> */}
      {/* <MaiBox /> */}
      {/* <Message /> */}
      {/* <>
        <Soft name="dhruv" >
          <p>A web developer</p></Soft>
        <Soft name="ruchit" />
        <Soft name="vruti" />
        <Soft name="sid" />

      </> */}
    </div>
  )
  // const blog = [
  //   {name: "XYZ", profession: "architech", url: "https://picsum.photos/id/1/5616/3744" },
  //   {name: "PQR", profession: "technology", url: "https://picsum.photos/id/10/2500/1667" },
  //   {name: "ABC", profession: "A.I.", url: "https://picsum.photos/id/100/2500/1656" }
  // ]
  // return (
  //   <>
  //     <Message blog_detail={blog} />

  //   </>
  // )
}

export default App;
