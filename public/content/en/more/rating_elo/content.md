# Rating Elo

**Elo rating** is a method of calculating the relative skill levels of players.

Under the Elo rating we often understand the FIDE rating that chess players get after playing a standard time-control tournament. In 2012, **a rating for rapid chess and blitz also included.** In addition, many chess federations as well as internet portals have their own ratings. Each rating system has its own characteristics and does not correspond to the original Elo rating.

The rating is calculated based on the result of the players' direct encounter.

At the core of the elo system is the assumption that the power of each chess player is presented as a probable variable that is logically aligned. The calculation of a player's rating based on the results of any tournament is based on a comparison of the points he has scored and the points predicted based on his rating. If the number of points scored as a result of the tournament is higher than expected, the player's rating is increased. If the number of points earned during the tournament is lower than expected, the player's rating is reduced.

## Elo rating calculator formula

The expected value of rating points that player A receives while playing against player B calculates (its equal to the half of the sum of player A's probability of winning and the probability of a draw ending).

    ![image info](../../../../images/ratingFormula.svg)

Where:

- EA - The expected value of the number of player's score
- RA - A - player's rating
- RB - B - player's rating

The players new rating is calculated in the following formula:

R′A = RA + K ∙ (SA - EA)

Where:

- K - 10, for players with any published rating of at least 2400 and at least 30 games played in previous events. Thereafter it remains permanently at 10. and at least 30 games played in previous events. Thereafter it remains permanently at 10, 20 for players with a rating always under 2400, 40 s a player new to the rating list until the completion of events with a total of 30 games and for all players until their 18th birthday, as long as their rating remains under 2300.
- SA - the actual number of points scored by the player A - (1 point for a win, 0.5 for a draw, and 0 for defeat)
- R′A - new rating player A
