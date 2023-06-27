"use client";

import { useState } from "react";
import style from "./movieCard.module.css";
import Image from "next/image";

export function MovieCard({ movie }) {
  const [countTicket, setCountTicket] = useState(0);

  const minusHandle = () => {
    setCountTicket((currentValue) => {
      if (currentValue <= 0) {
        return 0;
      }
      return currentValue - 1;
    });
  };

  const plusHandle = () => {
    setCountTicket((currentValue) => {
      if (currentValue >= 30) {
        return 30;
      }

      return currentValue + 1;
    });
  };

  return (
    <div className={style.cardBox}>
      <div style={{ width: 100, height: 120, position: "relative" }}>
        <Image
          fill
          src={movie.posterUrl}
          style={{ objectFit: "cover" }}
          className={style.poster}
        ></Image>
      </div>

      <div className={style.movieCardInfo}>
        <div className={style.movieCardName}> {movie.title}</div>

        <div className={style.movieCardGenre}> {movie.genre}</div>
      </div>

      <div className={style.ticketBox}>
        <button onClick={minusHandle} className={style.buttonTicket}>
          -
        </button>

        <div>{countTicket}</div>

        <button onClick={plusHandle} className={style.buttonTicket}>
          +
        </button>
      </div>
    </div>
  );
}
