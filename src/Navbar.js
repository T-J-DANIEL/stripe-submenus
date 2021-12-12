//we are using the context custom hhok to import  'openSidebar, openSubmenu, closeSubmenu'
//we have a button for mobile nav this is condiitonally renedered with clases
//note the 'sidebar' is the alternate mobile nav-menu pop-up accessed via hamburger button (this uses the opensidebar to open onclick)
//we have a the nav wich ic a containre for wverything it has a handle submenu fiunction attached to mouse over
//a nav header with log o and option al hamburger wrapped in nav cnter
//nav center holds nav header and main nav with a signup button
//the main nav has mouse over events for each nav button that results in displaysubmenu function
import logo from "./images/logo.svg"
import { useGlobalContext } from "./context"
const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  const displaySubmenu = (e) => {
      //grab the text of what you hover over
    const page = e.target.textContent
    //we then get the location of this button using getboundingclientrect this gives pixel postions (console.log tempBtn to see this )
    const tempBtn = e.target.getBoundingClientRect()
    //to get the middle we sum left and right and divide by two
    const center = (tempBtn.left + tempBtn.right)/2
    const bottom = tempBtn.bottom - 3
    // we are using these locations to postion our submenu under what we are hovering
    //we then send the name of what we are hovering (page) aswell as its postion data to our opensubmneu function
    openSubmenu(page,{center, bottom})
  }
  const handleSubmenu = (e) =>{
    //if event target has class of linkbutton then dont close submenu otherwise close it
    if(!e.target.classList.contains('link-btn')){
        closeSubmenu()
    }
    //note this is why we shift the submenu 3px onto the button so that we dont have a 'gap' that cancels the mouseover state
  }
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            =
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
