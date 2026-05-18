class Game:
    def __init__(self,grid):
        self.grid=grid
    def add_randomness(self,r,c,val):
        self.grid[r][c]=val
    def compress(self,row):
        new=[x for x in row if x!=0]
        new+= [0]*(4-len(new))
        return new
    def merge(self,row):
        for i in range(3):
            if row[i]!=0 and row[i]==row[i+1]:
                row[i]*=2
                row[i+1]=0
        return row
    def move_left(self):
        for i in range(4):
            row=self.grid[i]
            row=self.compress(row)
            row=self.merge(row)
            row=self.compress(row)
            self.grid[i]=row
    def move_right(self):
        for i in range(4):
            row=self.grid[i][::-1]
            row=self.compress(row)
            row=self.merge(row)
            row=self.compress(row)
            self.grid[i]=row[::-1]
    def move_up(self):
        for c in range(4):
            col=[self.grid[r][c] for r in range(4)]
            col=self.compress(col)
            col=self.merge(col)
            col=self.compress(col)
            for r in range(4):
                self.grid[r][c]=col[r]
    def move_down(self):
        for c in range(4):
            col=[self.grid[r][c] for r in range(4)][::-1]
            col=self.compress(col)
            col=self.merge(col)
            col=self.compress(col)
            col=col[::-1]
            for r in range(4):
                self.grid[r][c]=col[r]
    def check(self):
        for row in self.grid:
            if 128 in row:
                return 1
        for i in range(4):
            for j in range(4):
                if self.grid[i][j]==0:
                    return 0
                if j<3 and self.grid[i][j]==self.grid[i][j+1]:
                    return 0
                if i<3 and self.grid[i][j]==self.grid[i+1][j]:
                    return 0
        return -1