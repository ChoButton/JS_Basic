// 자바 스크립트의 함수는 함수를 리턴할수 있음.
function calculator(n1, n2){
    
    function add(){
        return n1 + n2;
    }
    return add;
}

const closure = calculator(5, 6);
console.log(typeof closure);

const n = closure();
console.log(`closer()의 결과 : ${n}`);

// 즉시 실행 함수
// 함수를 선언하고, 선언부 뒤에 (); 를 추가로 붙이면 그 함수는
// 선언과 동시에 실행까지 됩니다.
const start = (() => {
    console.log(`즉시 실행 구문이 붙음`);
})();

// 리턴자료가 없었기 때문에, start 변수에 저장 받은 자료가 없음
// start();
