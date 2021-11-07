import React, { useCallback, useEffect, useRef } from "react";

function HistoryMap() {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }, [mapRef]);

  // useEffect(() => {
  //   initMap();
  // }, [initMap]);

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://maps.googleapis.com/maps/api/js?key=내 키는 비밀이지롱&callback=initMap";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (<>
    <h2>원래는 지도가 보여야합니다ㅠㅠ 쓰앵님 도움 필요!!</h2>
    <div
      className="map"
      style={{ width: "500px", height: "500px" }}
      ref={mapRef}
    ></div>
  </>);
}

export default HistoryMap;