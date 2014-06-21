var req = require('request');

var BASE_URL = 'https://api.spotify.com';
var VERSION = '/v1';
var ALBUMS = '/albums';
var ARTISTS ='/artists';
var SEARCH = '/search';
var TRACKS = '/tracks';
var TOPTRACKS = '/top-tracks';
var USERS = '/users';

function Spotify(secret) {
    if ( ! secret) {
        throw new Error('API Key is required');
    }

    this.secret = secret;
}


module.exports = Spotify;

Spotify.prototype.getArtist = function getArtist(id, callback){
    var self = this;
    var reqUrl =BASE_URL + VERSION + ARTISTS + "/" + id;
    req.get(reqUrl, function(error, response, body) {
        self.processResponse(error, response, body, callback);
    });
}

Spotify.prototype.getAlbumsForArtist = function getAlbumsForArtist(id, callback){
    var self = this;
    var reqUrl =BASE_URL + VERSION + ARTISTS + "/" + id + ALBUMS;
    req.get(reqUrl, function(error, response, body) {
        self.processResponse(error, response, body, callback);
    });
}

Spotify.prototype.getTopTracksForArtist= function getTopTracksForArtist(id, country, callback){
    var self = this;
    var reqUrl =BASE_URL + VERSION + ARTISTS + "/" + id + TOPTRACKS;
    var qs = {'country':country};
    req.get({url:reqUrl, qs:qs}, function(error, response, body) {
        self.processResponse(error, response, body, callback);
    });
}

Spotify.prototype.getAlbum = function getAlbum(id, callback){
    var self = this;
    var reqUrl =BASE_URL + VERSION + ALBUMS + "/" + id;

    req.get(reqUrl, function(error, response, body) {
        self.processResponse(error, response, body, callback);
    });
}

Spotify.prototype.getTracksForAlbum = function getTracksForAlbum(id, callback){
    var self = this;
    var reqUrl =BASE_URL + VERSION + ALBUMS + "/" + id + TRACKS;

    req.get(reqUrl, function(error, response, body) {
        self.processResponse(error, response, body, callback);
    });
}

Spotify.prototype.processResponse = function processResponse(error, response, body, callback){
    if (error) {
        if (typeof callback === 'function') {
            callback(error);
        }

        return ;
    }

    if (response.statusCode !== 200){
        if (typeof callback === 'function') {
            callback(new Error(body));
        }
    }

    if (typeof callback === 'function') { 
        callback(null, body);
    }
}
