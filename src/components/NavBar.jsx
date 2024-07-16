import NowallsLogo from"../assets/NoWallsLogo.png"
function NavBar(){
return(
    <>
    <nav>
    <div class="logo">
            <img src={NowallsLogo}alt=""/>
        </div>
        <ul>
            <li><a href="">Services</a></li>
            <li><a href="">Subscribe</a></li>
            <li><a href="" class="active">Contact Us</a></li>
        </ul>
    </nav>
    </>
);
}
export default NavBar;