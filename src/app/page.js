import style from "./page.module.css";
import { MovieCard } from "@/components/MovieCard/MovieCard";

const movies = [
  {
    title: "Властелин колец: Братство Кольца",
    posterUrl: "https://i.postimg.cc/pdCLNMqX/1.webp",
    releaseYear: 2001,
    description:
      "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
    genre: "fantasy",
    id: "2aT976Fs_Bek0e2ZR_05V",
    rating: 8,
    director: "Питер Джексон",
    reviewIds: ["M0bg9QY5gVtupNaglrmua", "w32kK5oV6UIr1ZHdkkMAn"],
  },

  {
    title: "Властелин колец: Две крепости",
    posterUrl: "https://i.postimg.cc/9MfFCgnP/2.webp",
    releaseYear: 2002,
    description:
      "Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены довериться Голлуму, который взялся провести их к вратам Мордора. Громадная армия Сарумана приближается: члены братства и их союзники готовы принять бой. Битва за Средиземье продолжается.",
    genre: "fantasy",
    id: "CTzeB2PGEHHBwxCNlU4uo",
    rating: 8,
    director: "Питер Джексон",
    reviewIds: ["yvLjlSo9w6T4Mp6gG22pc", "PnxKfx6XS_RqcIxC7w4a7"],
  },
];

export default function Home() {
  return (
    <>
      <div className={style.filterBox}>
        <h2 className={style.headerFilter}>Фильтр поиска</h2>

        <div>
          <p className={style.headerFilterName}>Название</p>
          <input className={style.borderFilter} />
        </div>

        <div>
          <p className={style.headerFilterName}>Жанр</p>
          <select name="genre" className={style.borderFilter}></select>
        </div>

        <div>
          <p className={style.headerFilterName}>Кинотеатр</p>
          <select name="cinema" className={style.borderFilter}></select>
        </div>
      </div>
      <div className={style.cinemaBox}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </>
  );
}
