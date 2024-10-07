# The Swiss system

**The Swiss system** is a system for holding sports tournaments. The tournament is held without leaving out the participants. Starting from the second round, the competing pair is selected so that the competitors have equal points. Due to that, the formation of unmatchable pairs is excluded and it allows to hold the tournament with fewer rounds.

## Holding procedure

Swiss system tournaments sometimes involve more than a hundred players. The Swiss system allows to shorten the duration of the tournament because it is held in the number of pre-approved rounds. It is considered, to determine the winner it is enough to hold as many games as it is needed to determine the winner with a [knockout system tournament.](./olympic_system) In case of N participant √(N+2k) number of games are fairly classified for a k + 1 participant. In practice, the formula log2N + log2k is used, rounding the number to the nearest whole number. The total number of games is calculated by the formula M \* N / 2, where N is for number of players (pairs), M is for the number of rounds (when all prticipants play in all rounds).

he number of the rounds to determine the winning trio depends on the number of participants:

**Participant number**

**Round number**

| Participant number | Round number |
| ------------------ | ------------ |
| 7 - 8              | 5            |
| 9 - 16             | 6            |
| 17 - 32            | 7            |
| 33 - 64            | 8            |
| 65 - 128           | 9            |
| 129 - 256          | 10           |

## Description

- In the first round all the players are classified (randomly or by [rating](./rating_elo)). The pairs are formed in a following way: The first number of the first half of the table meets the first half of the second half of the table, the second number with the second, and so on. For example, in a tournament of 40 participants, the first number plays with 21, the second with 22, and so on. In case of an odd number of participants the participant with the last number gets a point without a game.
- In the next rounds all the players are divided into groups of equal points. That is, after the first round there will be three groups: winners, draws, and losers. If the number of players in a group is odd, then one player moves to the next group of points.
- The formation of the pairs of the score group is done on the same principle as in the first round (the first number of the first half of the table meets the first number of the second half of the table). However, it is not allowed for the same couple to meet more than once in the tournament. There is also a rule to change the color - it is advisable for the player to play an equal number of games in white and black. In any case, three games in the same color in a row are not allowed except for the last round. In case of the odd number of participants, the player of the last score group with the last number gets a point without a game if he/she has not got one during the tournament yet.
- The places in the tournament are classified by the number of the earned points.
- The participants with an equal number of points are usually classified by the [Buchholz coefficient](./buchholz), or by the Buchholz Cut coefficient. The average rating of competitors is also used.
