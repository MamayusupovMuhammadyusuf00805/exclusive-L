const baseurl = "https://ecommercev01.pythonanywhere.com/";

export const categorydata = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/product/categories/",
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      categorydata(result);
    })
    .catch((error) => console.error(error));
};

export const productdata = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/product/list/?category_id=1",
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
     productdata(result);
    })
    .catch((error) => console.error(error));
};

export const productdetail = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

 return fetch(
    "https://ecommercev01.pythonanywhere.com/product/detail/?product_id=1",
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
        productdetail(result)
    })
    .catch((error) => console.error(error));
};
