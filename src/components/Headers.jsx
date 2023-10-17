const Headers = () => {
    const listsNav = [
        "Home",
        "About",
        "Contact",
        "Register",
        "Services",
    ];
    return (
        <header className="header">
            <div className="nav">
                {listsNav.map((item, index) => (
                        <a href="#" key={index}>{item}</a>
                ))}
            </div>
            <div className="search">
                <input type="text" placeholder="Search..." />
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-user"></i>
            </div>
        </header>
    );
}

export default Headers;
