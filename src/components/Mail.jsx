import MailPic from"../assets/mail-listing.png"
function Mail(){
    return(
        <>
         <section id="mail">
<div class="main">
    <div class="text">
        <h1>
            Lorem, ipsum dolor sit amet co <br/>adipisicing elit. 
        </h1>
        <button>Subscribe To Mail listing</button>
    </div>

<div class="pic">
    <img src={MailPic} alt=""/>
</div>
</div>
   </section>
        </>
    )
}
export default Mail;