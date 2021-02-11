
if ( document.URL.match(/new/)||document.URL.match(/edit/) ) {

    var myIcon = L.icon({
        iconUrl: '/assets/marker-icon-574c3a5cca85f4114085b6841596d62f00d7c892c7b03f28cbfa301deb1dc437.png',
    });

    $(document).on('change','#img',function() {
        $(this).fileExif(function(exif) {

            // 画像のExif情報をキーバリュー式で代入
            const exif_data = Object.entries(exif).map(([key, value]) => ({'key': key, 'value': value}));

            // GPS情報の検出
            const target_latituderef  = exif_data.find((key) => {return (key.key === 'GPSLatitudeRef');});
            const target_latitude     = exif_data.find((key) => {return (key.key === 'GPSLatitude');});
            const target_longituderef = exif_data.find((key) => {return (key.key === 'GPSLongitudeRef');});
            const target_longitude    = exif_data.find((key) => {return (key.key === 'GPSLongitude');});

            // 半球位置による調整
            const code_latitude = (function (x) {
                if (x == "N")    {return 1;}
                else if(x == "S"){return -1;}
            })(target_latituderef.value);

            const code_longitude  =(function (x) {
                if (x == "E")    {return 1;}
                else if(x == "W"){return -1;}
            })(target_longituderef.value);

            
            
            // 経度緯度計算
            const decimal = 8;
            const gps_latitude = code_latitude * ((target_latitude.value[0]) +
                                                  (target_latitude.value[1]/60) + 
                                                  (target_latitude.value[2]/3600)).toFixed(decimal);
            const gps_longitude = code_longitude*((target_longitude.value[0]) + 
                                                  (target_longitude.value[1]/60) + 
                                                  (target_longitude.value[2]/3600)).toFixed(decimal);
            // 緯度経度出力
            $("#gps-latitude").text(gps_latitude);
            $("#gps-longitude").text(gps_longitude);

            // 再度MAP表示する場合、先のMAPを削除削除
            var container = L.DomUtil.get('mapid');
            if(container!=null){container._leaflet_id = null;}

            // MAP表示
            var map = L.map('mapid');
            $('.gps-map').css('display','initial');
            map.setView([gps_latitude, gps_longitude], 15);
            L.tileLayer(
                'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18
            }).addTo(map);
            L.marker([gps_latitude, gps_longitude],{icon: myIcon}).addTo(map);
        });
    });
}