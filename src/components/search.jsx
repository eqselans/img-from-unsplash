function SearchBox() {
    return (
        
        <form className="container input-group mt-2">
            <input type="text" placeholder="Aramak istediğiniz kelimeyi giriniz" className="container form-control" />
            <button className="btn btn-danger">Ara</button>
        </form>
    );
}

export default SearchBox;