//we import isSidebarOpen and closeSIdebar from the global context
//if is sidebaropen is true we have a class of sidebar wrapper and show else just sidebar wrapper
//inside the sidebar (mobile view nav)we use imported dataa for the required section to populate the extra data for each section
import sublinks from "./data"
//we iterate over sublinks to get data
import { useGlobalContext } from "./context"
const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext()
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          X
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                   {links.map((link,index)=>{
                     const {url,icon,label} = link
                     return <a key={index} href={url}>
                         {icon}
                         {label}
                     </a>
                   })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

// { //we have to double iterate to get the links because they are nested in the data file}
export default Sidebar
