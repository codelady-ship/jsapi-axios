const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product");  // `product` ID-ni alırıq.

const productUrl = "https://dummyjson.com/products";  // API url

// HTML elementlər
const productIdContainer = document.querySelector(".productIdContainer");

fetch(productUrl + "/" + productId)  // API URL-i və ID ilə sorğu edirik
  .then((res) => res.json())
  .then(({ id, thumbnail, title, description, price, category, warrantyInformation, availabilityStatus, brand, shippingInformation, discountPercentage }) => {
    // HTML daxilində göstərilən məlumat
    productIdContainer.innerHTML = `
<div class="card">
    <div class="flex p-8">
        <!-- Şəkil Sütunu -->
        <div class="w-1/2 pr-8">
            <div class="mx-auto mb-7 inline-block">
                <img src="${thumbnail}" width="50%" height="auto" alt="Product Image" class="object-cover">
            </div>
        </div>
        
        <!-- Məlumatlar Sütunu -->
        <div class="w-1/2">
            <h3 class="dark" class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Product: ${id}</h3>
            <h2 class="dark" class="text-2xl font-bold text-gray-800 dark:text-white mb-2">${title}</h2>
            <div  class="border p-3 mb-4">
                <p class="dark" class="text-base font-medium text-body-color">${description}</p>
                <p class="dark" class="text-base font-medium text-body-color">Category: ${category}</p>
                <p class="dark" class="text-base font-medium text-body-color">Brand: ${brand}</p>
            </div>

            <p class="dark" class="text-base font-medium text-body-color">Warranty Information: ${warrantyInformation}</p>
            <p class="dark" class="text-base font-medium text-body-color">Shipping Information: ${shippingInformation}</p>

            <div class="flex gap-8 border-t pt-3">
                <p class="dark" class="text-base font-medium text-body-color">Price: ${price}</p>
                <p class="dark" class="text-base font-medium text-body-color">Discount: ${discountPercentage}%</p>
            </div>

            <p class="dark" class="text-base font-medium text-body-color mt-3">Availability Status: ${availabilityStatus}</p>
        </div>
    </div>
</div>`;
  })
  .catch((err) => {
    productIdContainer.innerHTML = `<h1 style="color:black; font-weight:bold">${err.message}</h1>`;
  });
