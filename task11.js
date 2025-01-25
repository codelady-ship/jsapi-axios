const url = "https://dummyjson.com/products";
const productContainer = document.querySelector(".productContainer");
const loader = document.querySelector(".loader");
const darkLightTog = document.querySelector("#darkLight"); 


let isLoading = true;
// Show/Hide loader
const getLoader = () => {
  loader.style.display = isLoading ? "block" : "none";
};
getLoader();

// Toggle Dark/Light Mode
darkLightTog.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
});

// Fetch products
axios.get(url).then((res) => {
        if (res.status === 200) {
        isLoading = false;
        getLoader(); // Hide loader after products are loaded

        res.data.products.forEach(({id, thumbnail, title, description, price, discountPercentage}) => {productContainer.innerHTML += `
        <a href="product.html?product=${id}" class="card">
    <div class="-mx-4 flex flex-wrap p-8">
  <div class="w-full px-4 md:w-70 lg:w-70">
    <div class="mb-4 rounded-xl py-4 px-4 shadow-md transition-all hover:shadow-lg sm:p-3 lg:px-2 xl:px-9">
      <div class="mx-auto mb-7 inline-block aspect-w-2 aspect-h-2"> 
        <img src="${thumbnail}" class="object-cover w-40 h-32" alt="Product Image">
      </div>
      <div class="fordark">
        <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Product: ${id}</h3>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">${title}</h2>
        <p class="text-base font-medium text-body-color">${description}</p>
        </br>
        <div style="display:flex;gap:80px;border-top:2px solid black; ">
        <p class="text-base font-medium text-body-color"">Price: ${price}</p>
        <p class="text-base font-medium text-body-color">Discount: ${discountPercentage}%</p>
        </div>
      </div>
    </div>
  </div>
</div>
 </a>`;});
  }
}).catch((err) => {productContainer.innerHTML = `
  <h1 style="color:black; font-weight:bold">${err.message}</h1>`;
    });
