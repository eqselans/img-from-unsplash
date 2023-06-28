import './footer.css'

function Footer() {
    return (
        <footer className="py-3 text-center text-light fixed-bottom w-100 bg-transparent">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <span className="lead">
                            Tüm hakları saklıdır. &copy; 2023 
                         </span>
                        <span className="github ps-2">
                                <a href="https://github.com/eqselans" className="fab fa-github"target="_blank" rel="noreferrer"></a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;