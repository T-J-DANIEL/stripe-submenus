//this is the interactive menu that appears under the nav when mouseover it displays data depending on which nav button you mouseover
import { useState, useRef, useEffect } from "react"
import { useGlobalContext } from "./context"
const Submenu = () => {
  // we are destructuring page as we import it
  const {
    isSubmenuOpen,
    location,
    page: { page, links }
  } = useGlobalContext()
  const container = useRef(null)
  const [columns,setColumns] = useState('col-2')
  useEffect(() => {
      //return to default columns at first to limit bugs
      setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if(links.length===3){
        setColumns('col-3')
    }
    if(links.length>3){
        setColumns('col-4')
    }
  }, [location,links])
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      {/* we iterate over links but we need to account for number of columns */}
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
