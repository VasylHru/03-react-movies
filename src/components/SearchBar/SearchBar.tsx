import type{ FormEvent } from "react";
import toast from "react-hot-toast";
import style from './SearchBar.module.css'

interface SearchBarProps {
  onSubmit: (query: string) => void ;
}

 const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = (form.elements.namedItem('query') as HTMLInputElement).value.trim();

    if (!input) {
      toast.error('Please enter your search query.');
      return;
    }

    onSubmit(input);
    form.reset(); 
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <a
          className={style.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            className={style.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={style.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar