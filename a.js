function veHinh1(n) {
    for(let i = 1; i <= n; i++){
        let s = '';
        for(let j = 1; j <= n; j++){
            // s += '*'
            const center = (n + 1) / 2;
            const khoangCachDong = Math.abs(i - center);
            const khoangCachCot = Math.abs(j - center);
            khoangCachCot + khoangCachDong === center - 1 || i === center || j === center ? s += '*' : s += ' ';
        }
        console.log(s);
    }
}

function veHinh2(n) {
    for(let i = 1; i <= n; i++){
        let s = '';
        for(let j = 1; j <= n; j++){
            s += i >= j ? '*' : ' ';
        }
        console.log(s);
    }
}

function veHinh3(n) {
    for(let i = 1; i <= n; i++){
        let s = '';
        for(let j = 1; j <= n; j++){
            const center = (n + 1) / 2;
            const khoangCachDong = Math.abs(i - center);
            const khoangCachCot = Math.abs(j - center);
            khoangCachCot + khoangCachDong === center - 1 ? s += '*' : s += ' ';
        }
        console.log(s);
    }
}

function veHinh(n, checkPoint) {
    for(let i = 1; i <= n; i++){
        let s = '';
        for(let j = 1; j <= n; j++){
            const dk = checkPoint(i, j, n);
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}

// veHinh(6, (i, j) => i >= j);
veHinh(9, (i, j, n) => {
    const center = (n + 1) / 2;
    const khoangCachDong = Math.abs(i - center);
    const khoangCachCot = Math.abs(j - center);
    return khoangCachCot + khoangCachDong === center - 1 || i === center || j === center;
});
