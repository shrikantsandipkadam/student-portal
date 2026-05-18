n = int(input())

sq = n * n
power = 1
is_kaprekar = False

while power <= sq:
    a = sq // power
    b = sq % power

    if a + b == n:
        is_kaprekar = True
        break

    power = power * 10

print(is_kaprekar)
