export default function Data() {
  return (
    <>
      <div>
        <h1>Rating Elo</h1>
        <p>
          {" "}
          <strong>Elo rating </strong>is a method of calculating the relative
          skill levels of players.
        </p>
        <p>
          {" "}
          Under the Elo rating we often understand the FIDE rating that chess
          players get after playing a standard time-control tournament. In 2012,{" "}
          <b>a rating for rapid chess and blitz also included.</b> In addition,
          many chess federations as well as internet portals have their own
          ratings. Each rating system has its own characteristics and does not
          correspond to the original Elo rating.
        </p>
        <p>
          {" "}
          The rating is calculated based on the result of the players direct
          encounter.
        </p>
        <p>
          {" "}
          At the core of the elo system is the assumption that the power of each
          chess player is presented as a probable variable that is logically
          aligned. The calculation of a players rating based on the results of
          any tournament is based on a comparison of the points he has scored
          and the points predicted based on his rating. If the number of points
          scored as a result of the tournament is higher than expected, the
          players rating is increased. If the number of points earned during the
          tournament is lower than expected, the players rating is reduced.
        </p>
        <h2>Elo rating calculator formula</h2>
        <p>
          {" "}
          The expected value of rating points that player A receives while
          playing against player B calculates (its equal to the half of the sum
          of player As probability of winning and the probability of a draw
          ending).
        </p>
        <p>Where:</p>
        <ul>
          {" "}
          <li>
            {" "}
            <p>
              {" "}
              <img
                className="mwe-math-fallback-image-inline"
                src="https://wikimedia.org/api/rest_v1/media/math/render/svg/6d368f77b6dfe496467559869a421efed0881bcd"
                alt="{\displaystyle E_{A}}"
                aria-hidden="true"
              />{" "}
              - The expected value of the number of players score{" "}
            </p>{" "}
          </li>{" "}
          <li>
            {" "}
            <p>
              {" "}
              <img
                className="mwe-math-fallback-image-inline"
                src="https://wikimedia.org/api/rest_v1/media/math/render/svg/0b096f1c60d7fdc543f3bc583fe32601f1c2f0cf"
                alt="R_{A}"
                aria-hidden="true"
              />{" "}
              -{" "}
              <img
                className="mwe-math-fallback-image-inline"
                src="https://wikimedia.org/api/rest_v1/media/math/render/svg/7daff47fa58cdfd29dc333def748ff5fa4c923e3"
                alt="A"
                aria-hidden="true"
              />{" "}
              players rating{" "}
            </p>{" "}
          </li>{" "}
          <li>
            {" "}
            <p>
              {" "}
              <img
                className="mwe-math-fallback-image-inline"
                src="https://wikimedia.org/api/rest_v1/media/math/render/svg/33d79a4532363bb4ed9602166704c3f98928478f"
                alt="R_{B}"
                aria-hidden="true"
              />{" "}
              -{" "}
              <img
                className="mwe-math-fallback-image-inline"
                src="https://wikimedia.org/api/rest_v1/media/math/render/svg/47136aad860d145f75f3eed3022df827cee94d7a"
                alt="B"
                aria-hidden="true"
              />{" "}
              players rating{" "}
            </p>{" "}
          </li>
        </ul>
        <p>The players new rating is calculated in the following formula:</p>
        <p>
          {" "}
          <img
            className="mwe-math-fallback-image-inline"
            src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e531bf369b5e5ce507e354735180ecb2f9d44e0c"
            alt="Формула Рейтинга эло"
            width="214"
            height="24"
            aria-hidden="true"
          />
        </p>
        <p>Where:</p>
        <ul>
          {" "}
          <li>
            {" "}
            <img
              className="mwe-math-fallback-image-inline"
              src="https://wikimedia.org/api/rest_v1/media/math/render/svg/2b76fce82a62ed5461908f0dc8f037de4e3686b0"
              alt="K"
              aria-hidden="true"
            />{" "}
            - 10, for players with any published rating of at least 2400 and at
            least 30 games played in previous events. Thereafter it remains
            permanently at 10. and at least 30 games played in previous events.
            Thereafter it remains permanently at 10, 20 for players with a
            rating always under 2400, 40 s a player new to the rating list until
            the completion of events with a total of 30 games and for all
            players until their 18th birthday, as long as their rating remains
            under 2300.{" "}
          </li>{" "}
          <li>
            {" "}
            <img
              className="mwe-math-fallback-image-inline"
              src="https://wikimedia.org/api/rest_v1/media/math/render/svg/f581ca4fd5bc6d22270c6050703cf23e5b840435"
              alt="S_{A}"
              aria-hidden="true"
            />{" "}
            - the actual number of points scored by the player{" "}
            <img
              className="mwe-math-fallback-image-inline"
              src="https://wikimedia.org/api/rest_v1/media/math/render/svg/7daff47fa58cdfd29dc333def748ff5fa4c923e3"
              alt="A"
              aria-hidden="true"
            />{" "}
            - (1 point for a win, 0.5 for a draw, and 0 for defeat){" "}
          </li>{" "}
          <li>
            {" "}
            <img
              className="mwe-math-fallback-image-inline"
              src="https://wikimedia.org/api/rest_v1/media/math/render/svg/99935e6c376a3ed76329a18facaa07221d685208"
              alt="{\displaystyle R_{A}^{\prime }}"
              aria-hidden="true"
            />{" "}
            - new rating player{" "}
            <img
              className="mwe-math-fallback-image-inline"
              src="https://wikimedia.org/api/rest_v1/media/math/render/svg/7daff47fa58cdfd29dc333def748ff5fa4c923e3"
              alt="A"
              aria-hidden="true"
            />{" "}
          </li>
        </ul>
      </div>
      )
    </>
  );
}
