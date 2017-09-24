module.exports = function multiply(first, second) {
    let arrFirst = [];
    let arrSecond = [];
    let temp = [];

    for (let i=0; i<first.length; i++) {
        arrFirst.unshift(first[i]);
    }
    for (i=0; i<second.length; i++) {
        arrSecond.unshift(second[i]);
    }

    for (i=0; i< Math.max(arrSecond.length, arrFirst.length); i++) {
        if (arrSecond[i]) {
            let j=0;
            while (j<arrFirst.length) {
                if (!!temp[j+i]) {
                    temp[j+i]+=arrFirst[j]*arrSecond[i]
                }else{
                    temp[j+i] = arrFirst[j]*arrSecond[i]
                }
                j++;
            }
        }
    }

    let result ='';
    for (i=0; i<temp.length-1; i++) {
        temp[i+1] += Math.floor(temp[i]/10);
        temp[i] -= Math.floor(temp[i]/10)*10;
        result = temp[i]+result;
    }
    result =temp[temp.length-1]+result;
    return `${result}`;
};