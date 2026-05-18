class Product:
    def __init__(self, name, price, stock):
        self.name = name
        self.price = price
        self.stock = stock
        self.reviews = {}  # user → rating
    def get_avg_rating(self):
        if len(self.reviews) == 0:
            return 0.0
        return sum(self.reviews.values()) / len(self.reviews)
class Store:
    def __init__(self):
        self.catalog = {}
    def add_product(self, name, price, stock):
        self.catalog[name] = Product(name, price, stock)

    def restock(self, name, quantity):
        if name in self.catalog:
            self.catalog[name].stock += quantity
    def purchase(self, name, quantity):
        if name not in self.catalog or self.catalog[name].stock < quantity:
            print("Insufficient stock")
        else:
            self.catalog[name].stock -= quantity
    def add_review(self, user, name, rating):
        if name in self.catalog:            
            self.catalog[name].reviews[user] = rating
    def display_inventory(self):
        items = list(self.catalog.values())
        items.sort(key=lambda x: (-x.get_avg_rating(), x.price))

        for item in items:
            print(item.name, item.stock, round(item.get_avg_rating(), 1))
store = Store()
n = int(input())
for _ in range(n):
    name, price, stock = input().split()
    store.add_product(name, int(price), int(stock))
q = int(input())
for _ in range(q):
    cmd = input().split()
    if cmd[0] == "PURCHASE":
        store.purchase(cmd[1], int(cmd[2]))
    elif cmd[0] == "RESTOCK":
        store.restock(cmd[1], int(cmd[2]))
    elif cmd[0] == "REVIEW":
        store.add_review(cmd[1], cmd[2], int(cmd[3]))
print("--- Final Inventory ---")
store.display_inventory()