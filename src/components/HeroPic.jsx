import Pic1 from"../assets/hero1.png"
import Pic2 from"../assets/hero2.png"
import Pic3 from"../assets/hero3.png"
import Pic4 from"../assets/hero4.png"
import Pic5 from"../assets/hero5.png"





function HeroPic(){
return(
    <>
     <div class="images">
            <div class="two-pics">
                <div class="pic-one"><img src={Pic1} alt=""/></div>
                <img  className="pic-two"src={Pic2} alt=""/>
            </div>
            <div class="third-pic">
                <img src={Pic3} alt=""/>
            </div>
            <div class="forth-pic">
                <img src={Pic4} alt=""/>
            </div>
            <div class="pic-five">
                <img src={Pic5} alt=""/>
               
            </div>
        </div>
    </>
);
}
export default HeroPic;