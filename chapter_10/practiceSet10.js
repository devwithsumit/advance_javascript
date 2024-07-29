// 1.
function first_question() {
    const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '0a396daa26mshf16a84d7940ea3dp1b5f7cjsn5f11eb73eb68',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };
    let response = fetch(url, options)
    response.then((value) => {
        return value.json()
    }).then((value) => {
        const product_array = value.data.products;
        ihtml = "";
        for (i in product_array) {
            ihtml += `
        <div class="product-card w-[45%] drop-shadow-lg flex items-center justify-center bg-gray-100">
            <div class="flex font-sans bg-gray-100">
                <div class="imgbox w-48 p-5 bg-white">
                    <div class="h-full w-full flex items-center justify-center">
                        <img class="h-full w-full object-contain" src="${product_array[i].product_photo}"
                            alt="" loading="lazy"/>
                    </div>
                </div>
                <form class="flex-auto p-6">
                    <div class="flex-col flex flex-wrap">
                        <h1 class="flex-auto text-xl w-1/2 font-semibold text-gray-900">
                            ${product_array[i].product_title}
                        </h1>
                        <div class="text-lg font-semibold text-red-600">
                            ${product_array[i].product_price}
                        </div>
                        <div class="w-full flex-none text-sm font-medium text-black-700 mt-2">
                            ${product_array[i].product_star_rating} *
                        </div>
                    </div>
                    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <a class="text-md font-semibold rounded-lg bg-blue-300 text-center px-10 py-2"
                            href="${product_array[i].product_url}">Go to product</a>
                    </div>
                    <div class="flex space-x-4 mb-6 text-sm font-medium">
                        <div class="flex-auto flex space-x-4">
                            <button class="h-10 px-6 font-semibold rounded-md border border-balck-800 text-gray-900"
                                type="button">
                                Add to cart
                            </button>
                        </div>
                        <button
                            class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                            type="button" aria-label="Favorites">
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                    </div>
                    <p class="text-sm text-slate-700">
                        ${product_array[i].delivery}
                    </p>
                </form>
            </div>
        </div>
        `
        }
        document.getElementById('main').innerHTML = ihtml
    })
}
first_question()

// 2.
function second_ques(){
    const a = localStorage.getItem('note')
    alert('your saved note : ' + a)
    let n;
    if (a === 'null') {
        n = prompt('type your note')
        localStorage.setItem('note', n)
        while (!confirm('Confirm your note :' + n)) {
            n = prompt('type your note')
            localStorage.setItem('note', n)
        }
    }
    else {
        if (confirm('Do you want to change your note ?')) {
            n = prompt('type your note')
            localStorage.setItem('note', n)
            while (!confirm('Confirm your note :' + n)) {
                n = prompt('type your note')
                localStorage.setItem('note', n)
            }
        }
    }
}
// second_ques()

// 3.
function last_ques(){
    const a = localStorage.getItem('note')
    alert('your saved note : ' + a)
    let n;
    if (a === 'null') {
        n = prompt('TYPE your note')
        localStorage.setItem('note', n)
        while (!confirm('Confirm your note :' + n)) {
            n = prompt('type your note')
            localStorage.setItem('note', n)
        }
        if (confirm('Do you want to DELETE your note ?')) {
            localStorage.removeItem('note')
            alert('note deleted successfully')
        }
    }
    else {
        if (confirm('Do you want to CHANGE/CREATE your note ?')) {
            n = prompt('type your note')
            localStorage.setItem('note', n)
            while (!confirm('Confirm your note :' + n)) {
                n = prompt('type your note')
                localStorage.setItem('note', n)
            }
        }
        if (confirm('Do you want to DELETE your note ?')){
            localStorage.removeItem('note')
            alert('note deleted successfully')
        }
    }
}
// last_ques()
