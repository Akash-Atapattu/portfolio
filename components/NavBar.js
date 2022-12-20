import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/">
            <a className="navbar-brand">My Site</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link href="/about">
                <a className="nav-link">About</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/projects">
                <a className="nav-link">Projects</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/links">
                <a className="nav-link">Links</a>
                </Link>
            </li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;