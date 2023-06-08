// fatch() 를 이용해서 rest서버에 요청을 넣거나 결과를 받아올수 있습니다.
async function loadPersonList(){
    // fatch의 첫 번째 파라미터는 요청 주소입니다.
    const response = await fetch(`http://localhost:8080/resttest/person-list`); // GET방식
    //console.log(response);

    // fetch의 결과로 받은 response의 body에 들어있던 json을 뽑아낼 수 있습니다.
    const jsonData = response.json();
    console.log(jsonData); 

}