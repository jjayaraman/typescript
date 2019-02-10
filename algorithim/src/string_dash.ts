class StringDash {

    numbers = [3,2]
    //,'6','4','7','8'];

    applyDash() {

        this.numbers.forEach(n => {
            if(n % 2 === 0) {
                const index = this.numbers.indexOf(n);
                this.numbers.fill(0, index, index+1);
            }
        });
        console.log(this.numbers);
        
    
    }
    
}

StringDash.prototype.applyDash()