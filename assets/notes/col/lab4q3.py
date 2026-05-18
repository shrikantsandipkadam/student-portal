s = input()

max_len = 0
last_longest = ""
current = ""

for ch in s:
    if ch != " ":
        current += ch
    else:
        if len(current) >= max_len:
            max_len = len(current)
            last_longest = current
        current = ""
if len(current) >= max_len:
    last_longest = current

print(last_longest)
