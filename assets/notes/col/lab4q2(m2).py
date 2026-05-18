#Method 2: Bitmask Method (Most Efficient & Elegant)
#👉 Uses integers as sets (no list conversion, no split).
grid = [input() for _ in range(4)]

# check rows
for i in range(4):
    mask = 0
    for j in range(4):
        d = ord(grid[i][j]) - ord('0')
        if d < 1 or d > 4 or (mask & (1 << d)):
            print(False)
            exit()
        mask |= (1 << d)

# check columns
for j in range(4):
    mask = 0
    for i in range(4):
        d = ord(grid[i][j]) - ord('0')
        if mask & (1 << d):
            print(False)
            exit()
        mask |= (1 << d)

# check 2x2 blocks
for br in range(0, 4, 2):
    for bc in range(0, 4, 2):
        mask = 0
        for i in range(br, br + 2):
            for j in range(bc, bc + 2):
                d = ord(grid[i][j]) - ord('0')
                if mask & (1 << d):
                    print(False)
                    exit()
                mask |= (1 << d)

print(True)
