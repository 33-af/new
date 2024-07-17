

import styles from './Search.module.css'


const Search = ({ keywords, setKeywords }) => {
  return (
  <div className={styles.search}>
    <input type="text"
    placeholder='text'
    value={keywords}
    onChange={(e) => setKeywords(e.target.value)}
    className={styles.input}
    />
  </div>
  )
};

export default Search;