// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, arr) {
  return {
    _specimenNum: num,
    _dna: arr,

    get specimenNum() {
      return this._specimenNum;
    },
    get dna() {
      return this._dna;
    },
    set specimenNum(value) {
      this._specimenNum = value;
    },
    set dna(value) {
      this._dna = value;
    },

    mutate() {
      let randPos = Math.floor(Math.random() * this.dna.length);
      let randBase = returnRandBase();
      while (this.dna[randPos] === randBase) {
        randBase = returnRandBase();
      }
      this.dna[randPos] = randBase;
      return this.dna;
    },
    compareDNA(newPAequor) {
      let prcntEqual;
      let baseEqual = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === newPAequor.dna[i]) {
          baseEqual++;
        }
      }
      prcntEqual = baseEqual/this.dna.length*100;
      console.log('specimen #' + this.specimenNum + ' and specimen #' + newPAequor.specimenNum + ' have ' + prcntEqual + ' % DNA in common.');
    },
    willLikelySurvive() {
      let positiveBases = 0;
      let prcntPositive;
      for (let base of this.dna) {
        if (base === 'C' || base === 'G') {
          positiveBases++;
        }
      }
      prcntPositive = positiveBases/this.dna.length*100;
      console.log(prcntPositive);
      return (prcntPositive >= 60);
    }
  }
};

survivalDNAgen = () => {
  let tempspecnum = 1;
  let validArr = [];
  while (tempspecnum <= 31) {
    let dnaString = mockUpStrand();
    console.log('New DNA string:  ' + dnaString);
    let aequorFactObj = pAequorFactory(tempspecnum, dnaString);
    if (aequorFactObj.willLikelySurvive()) {
      validArr.push(aequorFactObj);
      tempspecnum++;
    }
  }
  return validArr;
}

// Test

// ----------- mutate test ---------------
// let dnaString = mockUpStrand();
// console.log(dnaString);
// let aequorFactObj = pAequorFactory(2, dnaString);
// let mutatedDnaString = aequorFactObj.mutate();
// console.log(mutatedDnaString);

// ----------- compareDNA test -----------
// let dnaString1 = mockUpStrand();
// console.log('First DNA string:  ' + dnaString1);
// let aequorFactObj1 = pAequorFactory(1, dnaString1);
// let dnaString2 = mockUpStrand();
// console.log('Second DNA string: ' + dnaString2);
// let aequorFactObj2 = pAequorFactory(2, dnaString2);
// aequorFactObj1.compareDNA(aequorFactObj2);

// ----------- willLikelySurvive test -----------
// let dnaString1 = mockUpStrand();
// console.log('First DNA string:  ' + dnaString1);
// let aequorFactObj1 = pAequorFactory(1, dnaString1);
// console.log(aequorFactObj1.willLikelySurvive());

// ----------- survivalDNAgen test --------------
let survArr = survivalDNAgen();
console.log(survArr);



