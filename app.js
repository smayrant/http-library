const http = new easyHTTP();

// Get Posts
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Create data
const data = {
    title: 'Custom post',
    body: 'This is a custom post'
}

http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post)
    }
});