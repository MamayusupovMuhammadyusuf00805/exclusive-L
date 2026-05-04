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
      productdetail(result);
    })
    .catch((error) => console.error(error));
};



export const signup = (name, email, password) => {
  console.log(name, email, password);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    first_name: name,
    email_or_phone: email,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/user/register/",
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const login = (email, password) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  
  const raw = JSON.stringify({
    email_or_phone: email, 
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/user/token/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
    });
};