
var selectedSearchType = "Album";

document.getElementById('submit').addEventListener('click',function(){
  var query=document.getElementById('queryInput').value;
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://unsa-unofficial-spotify-api.p.rapidapi.com/search?query="+query+"&count=20&type=tracks",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "e654d75ca5msh5a28e58f26eb8ffp167829jsnf0cfcfd59b55",
      "x-rapidapi-host": "unsa-unofficial-spotify-api.p.rapidapi.com"
    }
  };
  //AJAX based
  /*
  $.ajax(settings).done(function (response) {
    //change this line to whatever is returned by the api call
    if(selectedSearchType == 'Album'){
      let resultData = response.Results[0];
      let artistName = resultData.artists[0].name;
      console.log(artistName)
      var numTracks = resultData.total_tracks;
      var albumID = resultData.href;
      document.getElementById('resultDataDiv').innerHTML = "";
      document.getElementById('resultDataDiv').innerHTML +=`<b>The top search result for your query is an album created by ${artistName} and it was released on ${resultData.release_date} with ${resultData.total_tracks} song(s) on the album </b>`;
      document.getElementById('playerFrame').src = "https://open.spotify.com/embed/album/" + albumID;
    }
    else if (selectedSearchType == 'Artist'){

    }
    else{
      resultData = response.Results[0];
      var songLink = resultData.external_urls.spotify;
      var name = resultData.name;
      var artistLink = resultData.album.artists[0].external_urls.spotify;
      var songID = resultData.id;
      var artistName = resultData.artists[0].name;
      document.getElementById('resultDataDiv').innerHTML = "";
      document.getElementById('resultDataDiv').innerHTML +=`<b>The top search result for your query is a song named ${name} sung by ${artistName}`;
      document.getElementById('playerFrame').src = "https://open.spotify.com/embed/track/" + songID;
    }
    console.log(response);

  });*/
  //end AJAX based
  //local based
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
  var albumData = {
      "AMsg": "fill this form for buying, reporting errors or customising this API : https://form.jotform.com/210354634322042",
      "Query": "thriller",
      "Results": [
          {
              "album_type": "album",
              "artists": [
                  {
                      "external_urls": {
                          "spotify": "https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm"
                      },
                      "href": "artists/3fMbdgg4jU18AjLCKBhRSm",
                      "id": "3fMbdgg4jU18AjLCKBhRSm",
                      "name": "Michael Jackson",
                      "type": "artist",
                      "uri": "spotify:artist:3fMbdgg4jU18AjLCKBhRSm"
                  }
              ],

              "external_urls": {
                  "spotify": "https://open.spotify.com/album/1C2h7mLntPSeVYciMRTF4a"
              },
              "href": "albums/1C2h7mLntPSeVYciMRTF4a",
              "id": "1C2h7mLntPSeVYciMRTF4a",
              "images": [
                  {
                      "height": 640,
                      "url": "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
                      "width": 640
                  },
                  {
                      "height": 300,
                      "url": "https://i.scdn.co/image/ab67616d00001e024121faee8df82c526cbab2be",
                      "width": 300
                  },
                  {
                      "height": 64,
                      "url": "https://i.scdn.co/image/ab67616d000048514121faee8df82c526cbab2be",
                      "width": 64
                  }
              ],
              "name": "Thriller 25 Super Deluxe Edition",
              "release_date": "1982-11-30",
              "release_date_precision": "day",
              "total_tracks": 30,
              "type": "album",
              "uri": "spotify:album:1C2h7mLntPSeVYciMRTF4a"
          }
      ]
  }
  if(selectedSearchType == 'Album'){
    let resultData = albumData.Results[0];
    let artistName = resultData.artists[0].name;
    console.log(artistName)
    var numTracks = resultData.total_tracks;
    var albumID = resultData.id;
    document.getElementById('resultDataDiv').innerHTML = "";
    document.getElementById('resultDataDiv').innerHTML +=`<b>The top search result for your query is an album created by ${artistName} and it was released on ${resultData.release_date} with ${resultData.total_tracks} song(s) on the album </b>`;
    document.getElementById('playerFrame').src = "https://open.spotify.com/embed/album/" + albumID;
  }
  else if (selectedSearchType == 'Artist'){

  }
  else{
    resultData = sampleData.Results[0];
    var songLink = resultData.external_urls.spotify;
    var name = resultData.name;
    var artistLink = resultData.album.artists[0].external_urls.spotify;
    var songID = resultData.id;
    var artistName = resultData.artists[0].name;
    document.getElementById('resultDataDiv').innerHTML = "";
    document.getElementById('resultDataDiv').innerHTML +=`<b>The top search result for your query is a song named ${name} sung by ${artistName}`;
    document.getElementById('playerFrame').src = "https://open.spotify.com/embed/track/" + songID;
  }
  //end local based
})

//https://rapidapi.com/shekhar1000.sc/api/unsa-unofficial-spotify-api/




document.getElementById('searchSelect').addEventListener('change',function(){
  selectedSearchType = document.getElementById('searchSelect').value;
  if (selectedSearchType[0] == 'A') {
    document.getElementById('searchHeader').innerHTML = 'Search for an '+selectedSearchType;
  }
  else{
    document.getElementById('searchHeader').innerHTML = 'Search for a '+selectedSearchType;
  }

})
