function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  let self = this;
  this.http.onload = function() {
    //   if status is 'ok' pass the response as an argument in the callback
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
      //   otherwise, return the status of the error
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);

  this.send(JSON.stringify(data));
};
// Make an HTTP PUT Request

// Make an HTTP DELETE Request
