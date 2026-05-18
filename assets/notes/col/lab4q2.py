grid = []
for _ in range(4):
    grid.append(input())

# check rows
for i in range(4):
    seen = [0, 0, 0, 0, 0]
    for j in range(4):
        ch = grid[i][j]
        if ch < '1' or ch > '4' or seen[int(ch)] == 1:
            print(False)
            exit()
        seen[int(ch)] = 1

# check columns
for j in range(4):
    seen = [0, 0, 0, 0, 0]
    for i in range(4):
        ch = grid[i][j]
        if seen[int(ch)] == 1:
            print(False)
            exit()
        seen[int(ch)] = 1

# check 2x2 blocks
for br in range(0, 4, 2):
    for bc in range(0, 4, 2):
        seen = [0, 0, 0, 0, 0]
        for i in range(br, br + 2):
            for j in range(bc, bc + 2):
                ch = grid[i][j]
                if seen[int(ch)] == 1:
                    print(False)
                    exit()
                seen[int(ch)] = 1

print(True)
