[![Build Status](https://travis-ci.org/burntcookie90/node-spotify.svg?branch=master)](https://travis-ci.org/burntcookie90/node-spotify)

Example
======

all response objects in callbacks contain the json response from the API call

    var Spotify = require('./lib/spotify');
    var spotify = new Spotify('API_KEY');
    
    spotify.getArtist('5wFXmYsg3KFJ8BDsQudJ4f', function(error, response){
    })
    
    spotify.getAlbumsForArtist('5wFXmYsg3KFJ8BDsQudJ4f', function(error, response){
    })
    
    spotify.getTopTracksForArtist('5wFXmYsg3KFJ8BDsQudJ4f', 'US', function(error, response){
    })
    
    spotify.getAlbum('5piFSrg34mjWz2mprT1a4s', function(error, response){
    })
    
    spotify.getTracksForAlbum('5piFSrg34mjWz2mprT1a4s', function(error, response){
    })
