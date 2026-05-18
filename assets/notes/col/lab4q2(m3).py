grid = [input() for _ in range(4)]
#Method 3: Sum + Product Invariant Method (Math-based)
def check_group(cells):
    s = 0
    p = 1
    for ch in cells:
        if ch < '1' or ch > '4':
            return False
        d = ord(ch) - ord('0')
        s += d
        p *= d
    return s == 10 and p == 24

# rows
for i in range(4):
    if not check_group(grid[i]):
        print(False)
        exit()

# columns
for j in range(4):
    col = ""
    for i in range(4):
        col += grid[i][j]
    if not check_group(col):
        print(False)
        exit()

# blocks
for br in range(0, 4, 2):
    for bc in range(0, 4, 2):
        blk = ""
        for i in range(br, br + 2):
            for j in range(bc, bc + 2):
                blk += grid[i][j]
        if not check_group(blk):
            print(False)
            exit()

print(True)
