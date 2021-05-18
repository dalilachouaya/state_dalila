import React  from "react";
import "./styles.css";
import { style } from "typestyle";
import { IconContext } from "react-icons";
import { FaTwitter,FaRegCommentDots,FaRegHeart,FaRegShareSquare, FaRetweet} from "react-icons/fa";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Person : {
        fullName: `Dalila CHOUAYA`,
        bio: `Gender: Female , Age: 28 years old , Interests: Learning , Farming , Sleeping ...`,
        imgSrc:
        `https://static.wixstatic.com/media/9f02a6_59b694d299ea44ebb28de17bce013a01~mv2.png/v1/fill/w_560,h_520,al_c,lg_1,q_85/9f02a6_59b694d299ea44ebb28de17bce013a01~mv2.webp`,
        profession: `Profession: Student in Go MyCode Academy`,
      
      },
      count:0,
      show: false ,
      like: true ,
      
    };
  }
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  componentDidMount() {
    this.timerID = setInterval(
      () => this.incrementer(),
      1000
    );
  }
  incrementer() {
    this.setState({
    count: this.state.count + 1 
    });
  }
  changeColor(){
    this.setState({like: !this.state.like});
}
    render() {
      let likeOrNot = this.state.like ? "disliked" : "liked";
    const styleBtn = style({
      backgroundColor: "#ff0844",
      textAlign:'center',
      border: "none",
      color: "white",
      padding: "12px 30px",
      cursor: "pointer",
      fontSize: "20px",
      $nest: {
        "&:hover": {
          backgroundImage: "linear-gradient(to top, #ff0844 0%, #ffb199 100%)"
        }
      }
    });
    return (
      <>
        {this.state.show && (
          <div className="tweet">  
          <div className="fdt"> 
          <div> 
              <img
              src={this.state.Person.imgSrc}
              alt="myPhoto"
              style={{ height: "100px", borderRadius: "20px" ,marginTop:"20px"}}
            />
            </div>   
            <div className="msg" style={{ margin:"0px 20px"}}>
            <div >
            <span style={{fontWeight: "bold"}}
            >{this.state.Person.fullName}</span> <span style={{paddingLeft: "0.3em" , color:"#8899a6"}} > {this.state.count}s ago </span>
            </div>
            <div style={{paddingLeft: "0.3em" }}><span>{this.state.Person.bio}</span>
            <br/><span>{this.state.Person.profession}</span></div>
            </div>
            </div>
            <br/>
            <IconContext.Provider value={{ color: "#aab8c2",marginLeft: "2px",marginTop:"10px",size:"1.6rem"}}>
              <FaRegCommentDots style={{marginLeft:"150px"}}/>
              <FaRetweet style={{marginLeft:"40px"}}/>
              <FaRegHeart style={{marginLeft:"40px"}} className={likeOrNot}
                        onClick={this.changeColor.bind(this)} />
              <FaRegShareSquare style={{marginLeft:"40px"}}/>
            </IconContext.Provider>
          </div>
        )}
        <button onClick={this.handleShowPerson} className={styleBtn} >
          <FaTwitter  style={{size:"48px", color:"blue"}}/>
        </button>

      </>
    );
  }
}

export default App;
