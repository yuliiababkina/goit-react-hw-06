import s from "./SearchBox.module.css";

const SearchBox = ({ searchedContact, onSearchContact }) => {
    return (
        <div className={s.searchBox}>
            <label className={s.searchLabel}>
                Find contacts by name
                <input
                    className={s.searchInput}
                    type="text"
                    value={searchedContact}
                    onChange={onSearchContact}
                />
            </label>
        </div>
    );
};

export default SearchBox;
