var urlEnd = "4uMhAVYx5R4SvILLWR1Y0J";
var mostRecentSearch = "";
var selectedSearchType = document.getElementById('searchSelect').value
document.getElementById('submit').addEventListener('click',function(){

  /*const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://unsa-unofficial-spotify-api.p.rapidapi.com/search?query=krypton%20fanfare&count=20&type=tracks",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "e654d75ca5msh5a28e58f26eb8ffp167829jsnf0cfcfd59b55",
      "x-rapidapi-host": "unsa-unofficial-spotify-api.p.rapidapi.com"
    }
  };

  $.ajax(settings).done(function (response) {

    console.log(response);

  });*/
})

//https://rapidapi.com/shekhar1000.sc/api/unsa-unofficial-spotify-api/
var sampleData = {
    "AMsg": "fill this form for buying, reporting errors or customising this API : https://form.jotform.com/210354634322042",
    "Query": "krypton fanfare",
    "Results": [
        {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2uFUvKGK48Cb3jk8uKsxnz"
                        },
                        "href": "artists/2uFUvKGK48Cb3jk8uKsxnz",
                        "id": "2uFUvKGK48Cb3jk8uKsxnz",
                        "name": "The University of Georgia Redcoat Band",
                        "type": "artist",
                        "uri": "spotify:artist:2uFUvKGK48Cb3jk8uKsxnz"
                    }
                ],

                "external_urls": {
                    "spotify": "https://open.spotify.com/album/5FUWtvqXm4LUiuA2v2bFNi"
                },
                "href": "albums/5FUWtvqXm4LUiuA2v2bFNi",
                "id": "5FUWtvqXm4LUiuA2v2bFNi",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2736cd24373f9246c1bbfaefd5a",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e026cd24373f9246c1bbfaefd5a",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048516cd24373f9246c1bbfaefd5a",
                        "width": 64
                    }
                ],
                "name": "Gameday Faves: Georgia Bulldogs Classics",
                "release_date": "2009-09-08",
                "release_date_precision": "day",
                "total_tracks": 15,
                "type": "album",
                "uri": "spotify:album:5FUWtvqXm4LUiuA2v2bFNi"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2uFUvKGK48Cb3jk8uKsxnz"
                    },
                    "href": "artists/2uFUvKGK48Cb3jk8uKsxnz",
                    "id": "2uFUvKGK48Cb3jk8uKsxnz",
                    "name": "The University of Georgia Redcoat Band",
                    "type": "artist",
                    "uri": "spotify:artist:2uFUvKGK48Cb3jk8uKsxnz"
                }
            ],

            "disc_number": 1,
            "duration_ms": 38600,
            "explicit": false,
            "external_ids": {
                "isrc": "USMZ40900099"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7qglbPXS5sKOA5vK5f0yUH"
            },
            "href": "tracks/7qglbPXS5sKOA5vK5f0yUH",
            "id": "7qglbPXS5sKOA5vK5f0yUH",
            "is_local": false,
            "name": "Krypton Fanfare",
            "popularity": 15,
            "preview_url": "https://p.scdn.co/mp3-preview/387382efa55bc4ab7d8a3902e717a4b82f6e14a1?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
            "track_number": 5,
            "type": "track",
            "uri": "spotify:track:7qglbPXS5sKOA5vK5f0yUH"
        }

    ]
}
document.getElementById('submit').addEventListener('click',function(){
  //change this line to whatever is returned by the api call
  mostRecentSearch = selectedSearchType;
  resultData = sampleData.Results[0];
  var songLink = resultData.external_urls.spotify;
  var name = resultData.name;
  var artistLink = resultData.album.artists[0].external_urls.spotify;
  var songID = resultsData.href;
  document.getElementById('playerFrame').src = "https://open.spotify.com/embed/" + songID;

})

document.getElementById('searchSelect').addEventListener('change',function(){
  if (selectedSearchType[0] == 'A') {
    document.getElementById('searchHeader').innerHTML = 'Search for an '+selectedSearchType;
  }
  else{
    document.getElementById('searchHeader').innerHTML = 'Search for a '+selectedSearchType;
  }
})
console.log("sample data");
//sampleData = "'"+sampleData+"'";
console.log(sampleData);
