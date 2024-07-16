import GetPic from"../assets/geintouch.png"
function Get(){
return(
    <>
    <div id="Get-in-touch">
    <div class="div">
    <div class="pic">
        <img src={GetPic} alt=""/>
    </div>
    <div class="text">
        <h1>Get In Touch With Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Qui pariatur impedit non?</p>
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="your phone number"/>
        <input type="email" placeholder="your email"/>
        <input class="massage" type="text" placeholder="your massage"/>
        <button>Submit</button>

    </div>
</div>

   </div>
    </>
);
}
export default Get;