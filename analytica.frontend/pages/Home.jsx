import './Home.css'
function Home() {

  return (
    <>
    <div class="hero">
        <div class="overlay"></div>

        <div class="content">
            <h1>Find What You Need</h1>

            <div class="search-box">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home