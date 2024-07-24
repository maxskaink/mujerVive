import "../styles/Header.css";

export const Header = () => {
    return(
        <header className="header">
            <a href="/" className="header-logo">
                <img src="logo02.png" alt="logo" />
            </a>
            <h1 className="header-h1">DashBoard</h1>
        </header>
    );
}