import NavbarItems from "./NavbarItems.jsx";

const itemsNavbar = [
    {
        src:"../images/dashboard_icon.png",
        textItem:"Dashboard",
        href:"/",
        isLink: true
    },
    {
        src:"../images/assets_icon.png",
        textItem:"Assets",
        href:"/",
        isLink: true
    },
    {
        src:"../images/booking_icon.png",
        textItem:"Booking",
        href:"/cars",
        isLink: true
    },
    {
        src:"../images/dashboard_icon.png",
        href:"/",
        textItem:"Sell Cars",
        isLink: true
    },
    {
        src:"../images/dashboard_icon.png",
        href:"/",
        textItem:"Services",
        isLink: true
    }
]


function Navbar()
{
    return (
        <aside className="sidebar">
            <h1>
                <img src="../images/logo_site.png" className="img-icon"/>
                caradver
            </h1>
            <ul>
                {itemsNavbar.map((item, index) => (
                    <NavbarItems
                        key={index}
                        src={item.src}
                        text={item.textItem}
                        isLink={item.isLink}
                        href={item.href}
                    />
                ))}
            </ul>
            <div className="logout">
                <p>
                    {/*<img src="../images/setting_icon.png" className="img-icon"/>*/}
                    <a>Settings</a>
                </p>
                <p>
                    {/*<img src="../images/logout_icon.png" className="img-icon"/>*/}
                    <a>Log out</a>
                </p>
            </div>
        </aside>
    )
}

export default Navbar;