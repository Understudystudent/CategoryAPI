
let tbody = document.getElementById("tbody")



// fetch function
fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data)
            tbody.append(td_fun(data));
        })
    })
// create td
function td_fun({ imageUrl, categoryName, description }) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                    <img src="${imageUrl}" class="h-10 w-10 rounded-full" alt="">
                </div>
                <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                        ${categoryName}
                    </div>
                    <div class="text-sm text-gray-500">
                        ${description}
                    </div>
                </div>
            </div>
        </td>
    `;
    return tr;
}
