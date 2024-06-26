// Creates accessible and focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4.4,
    center: { lat: 35, lng: -97 },
  });

  const tourStops = [
    [
      'May 23, 2023',
      { lat: 36.8076595, lng: -119.8667303 },
      'Fresno',
      'CA',
      '93720',
    ], //1
    [
      'Dec 1, 2023',
      { lat: 28.2452413, lng: -82.7133271 },
      'New Port Richey',
      'FL',
      '34653',
    ], // 2
    [
      'Dec 3, 2023',
      { lat: 41.5896484, lng: -88.2831951 },
      'Plainfield',
      'IL',
      '60586',
    ], // 3
    [
      'Dec 5, 2023',
      { lat: 40.4585707, lng: -80.0879147 },
      'Pittsburgh',
      'PA',
      '15214',
    ], //4
    [
      'Dec 6, 2023',
      { lat: 41.4835839, lng: -81.8266921 },
      'Lakewood',
      'OH',
      '44107',
    ], // 5
    [
      'Dec 9, 2023',
      { lat: 38.8071081, lng: -122.5765914 },
      'Hidden Valley Lake',
      'CA',
      '95467',
    ], // 6
    [
      'Dec 17, 2023',
      { lat: 25.6065968, lng: -80.3536341 },
      'Miami',
      'FL',
      '33157',
    ], // 7
    [
      'Dec 17, 2023',
      { lat: 32.8701616, lng: -117.331923 },
      'La Jolla',
      'CA',
      '92037',
    ], // 8
    [
      'Dec 19, 2023',
      { lat: 42.4568023, lng: -71.2277501 },
      'Winchester',
      'MA',
      '01890',
    ], // 9
    [
      'Dec 26, 2023',
      { lat: 38.1384722, lng: -79.1448437 },
      'Staunton',
      'VA',
      '24401',
    ], // 10
    [
      'Jan 2, 2024',
      { lat: 33.9108526, lng: -117.5224724 },
      'Riverside',
      'CA',
      '92503',
    ], // 11
    [
      'Jan 9, 2024',
      { lat: 37.5762122, lng: -122.338338 },
      'San Mateo',
      'CA',
      '94401',
    ], // 12
    [
      'Jan 13, 2024',
      { lat: 34.897702, lng: -81.1065808 },
      'Rock Hill',
      'SC',
      '29730',
    ], // 13
    [
      'Jan 26, 2024',
      { lat: 41.1934806, lng: -85.9541662 },
      'Warsaw',
      'IN',
      '46580',
    ], //14
    [
      'Jan 30, 2024',
      { lat: 47.9962583, lng: -123.5078901 },
      'Port Angeles',
      'WA',
      '98362',
    ], // 15
    [
      'Jan 30, 2024',
      { lat: 32.8194629, lng: -96.653462 },
      'Mesquite',
      'TX',
      '75150',
    ], // 16
    [
      'Feb 8, 2024',
      { lat: 39.6684736, lng: -104.948746 },
      'Denver',
      'CO',
      '80222',
    ],
    [
      'Feb 12, 2024',
      { lat: 38.6895663, lng: -87.074841 },
      'Loogootee',
      'IN',
      '47553',
    ],
    [
      'Feb 20, 2024',
      { lat: 25.8498161, lng: -80.159827 },
      'Miami Beach',
      'Fl',
      '33141',
    ],
    [
      'Feb 24, 2024',
      { lat: 41.1471196, lng: -96.2280514 },
      'Papillion',
      'NE',
      '68133',
    ],
    [
      'Feb 24, 2024',
      { lat: 41.082713, lng: -85.2333002 },
      'Fort Wayne',
      'IN',
      '46808',
    ],
    [
      'Feb 26, 2024',
      { lat: 41.4518089, lng: -105.8176758 },
      'LARAMIE',
      'WY',
      '82072',
    ],
    [
      'Mar 15, 2024',
      { lat: 39.4948876, lng: -119.8475435 },
      'Reno',
      'NV',
      '89509',
    ],
    [
      'Mar 16, 2024',
      { lat: 33.6842736, lng: -84.291791 },
      'DECATUR',
      'GA',
      '30034',
    ],
    [
      'Mar 17, 2024',
      { lat: 36.7985635, lng: -119.2623493 },
      'Dunlap',
      'CA',
      '93621',
    ],
    [
      'Mar 18, 2024',
      { lat: 37.3724625, lng: -79.8214574 },
      'Blue Ridge',
      'VA',
      '24064',
    ],
    [
      'Apr 5, 2024',
      { lat: 38.6264437, lng: -121.3661059 },
      'Carmichael',
      'CA',
      '95608',
    ],
    [
      'Apr 10, 2024',
      { lat: 43.0034997, lng: -74.0213743 },
      'BALLSTON SPA',
      'NY',
      '12020',
    ],
  ];

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([date, position, city, state, zipcode], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${city}, ${state} ${zipcode}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener('click', () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

window.initMap = initMap;
