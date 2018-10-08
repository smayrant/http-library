const http = new easyHTTP();

// Get Posts
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Create data to be utilized in examples
const data = {
    title: 'Custom post',
    body: 'This is a custom post'
}

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post)
//     }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post)
//     }
// });

// Delete post
http.delete("https://jsonplaceholder.typicode.com/posts1", function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});