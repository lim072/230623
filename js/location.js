// 4e89a2fc3d962c758dc65aa8a9cb86a4

let key = `4e89a2fc3d962c758dc65aa8a9cb86a4`;

//(37.5070267, 126.7958227)


const mapContainer = document.getElementById("map");
const branchBtn = document.querySelectorAll(".branch li");


var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스  
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.5070267, 126.7958227), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴  
//지도를 표시할 div와 지도옵션으로 지도를 최종 생성하는 코드

// api(포장을 할때 정해져있는 박스 규격) 정보를 보내는 방법 





const markerOptions = [
    {
        title: "본점",   //제목
        letlng: new kakao.maps.LatLng(37.5070267, 126.7958227),  // 지도의 위치
        imgSrc: 'img/marker1.png', //마커 이미지 경로
        imgSize: new kakao.maps.Size(231, 99), //마커 이미지 크기
        imgPos: { offset: new kakao.maps.Point(115, 99) }, //마커 이미지 위치
        button: branchBtn[0] //마커와 매치할 버튼의 인덱스
    },
    {
        title: "2호점",   //제목
        letlng: new kakao.maps.LatLng(37.2354733, 126.5883459),  // 지도의 위치
        imgSrc: 'img/marker1.png', //마커 이미지 경로
        imgSize: new kakao.maps.Size(231, 99), //마커 이미지 크기
        imgPos: { offset: new kakao.maps.Point(115, 99) }, //마커 이미지 위치
        button: branchBtn[1] //마커와 매치할 버튼의 인덱스
    },
    {
        title: "3호점",   //제목
        letlng: new kakao.maps.LatLng(37.520298, 126.768912),  // 지도의 위치
        imgSrc: 'img/marker1.png', //마커 이미지 경로
        imgSize: new kakao.maps.Size(231, 99), //마커 이미지 크기
        imgPos: { offset: new kakao.maps.Point(115, 99) }, //마커 이미지 위치
        button: branchBtn[2] //마커와 매치할 버튼의 인덱스
    }
]



//위 해당 마커옵션들에 반복을 돌면서 마커 정보를 등록합니다.

markerOptions.forEach((el, index) => {

    const marker = new kakao.maps.Marker({
        map: map, //앞의 map은 marker생서시 필요한 정보를 받는 변수이고, 뒤에 map은 위에서 선언한 변수
        position: el.letlng, //지도의 위치, 위도 경도값을 markerOptinos에 담은 latlng을 객체 배열에 접근해서 가져옴
        title: el.title,
        image: new kakao.maps.MarkerImage(el.imgSrc, el.imgSize, el.imgPos)
        //카카오맵의 markerImage라는 메서드를 사용하는데 매서드에 필요한 값은
        //markerOptions의 객체배열에 접근해서 가지고 옵니다.
    });


    //우리는 버튼을 클릭했을때 지정되어있는곳으로 이동해야 합니다
    //버튼을 활성화

    el.button.addEventListener('click', (e) => {
        e.preventDefault();

        for (let el of branchBtn) {
            el.classList.remove('on')
        }
        branchBtn[index].classList.add('on')

        // branchBtn.forEach((el)=>{el.classList.remove('on')})
        // el.button.classList.add('on')

        moveTo(el.letlng)
    })


    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

})

function moveTo(target) {
    const moveLatlng = target;
    map.setCenter(moveLatlng) //지도를 중심으로 이동시키는 함수
}