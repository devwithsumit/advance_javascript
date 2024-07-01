// function loadScript(url,callback) {
//     let scriptTag = document.createElement('script')
//     scriptTag.src = url
//     document.head.append(scriptTag)
//     scriptTag.onload = () => {
//         callback(url); //callback the referred function with url agrument when script is loaded
//     }
// }
// loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js', 
//     //passing callback func in this func
//     function(src){
//     alert('script is loaded : ' + src)
// });

// error handling in callbacks
function loadScript(url, callback) {
    let scriptTag = document.createElement('script')
    scriptTag.src = url
    document.head.append(scriptTag)
    scriptTag.onload = () => {
        callback(null, url); // Call the callback when the script loads successfully
    };

    scriptTag.onerror = () => {
        callback(new Error('scr got some issues'))
        // Optionally, you might want to call the callback with an error indication here
    };
}
//creating error in src to understand the error handling
loadScript('https://cdnjs.1cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js',
    //passing callback func in this func
    function (error, src) {
        if (error) {
            console.error(error);
            alert('error loading the script. try again later')
            return
        }
        alert('script is loaded, src : ' + src)
    });