class Spellathon:
    def __init__(self,data):
        self.letters=data[0]
        self.valid=set(data[1:])
        self.found=set()
        self.score=0
        self.attempts=0
    def play(self,word):
        self.attempts+=1
        if len(word)>=4 and word in self.valid and word not in self.found:
            self.found.add(word)
            self.score+=1
            return 'Correct guess!'
        return 'Incorrect guess!'
    @property
    def remaining_words(self):
        return sorted(self.valid-self.found)