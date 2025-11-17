import './SideBar.css'
function SideBar() {

  return (
    <>
        <div class="sidebar">
            <ul>
                <li><span class="icon">🏠</span><span class="text">Home</span></li>
                <li><span class="icon">🔍</span><span class="text">Search</span></li>
                <li><span class="icon">📁</span><span class="text">Files</span></li>
                <li><span class="icon">⚙️</span><span class="text">Settings</span></li>
            </ul>
        </div>
    </>
  )
}

export default SideBar