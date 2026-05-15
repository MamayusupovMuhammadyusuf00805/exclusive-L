export const baseUrl = "https://ecommercev01.pythonanywhere.com";

export const categorydataFetch = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/product/categories/`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export const productdataFunction = (categoryId = "") => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const url = categoryId
    ? `${baseUrl}/product/list/?category_id=${categoryId}`
    : `${baseUrl}/product/list/`;

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export const productdetailFunction = (productId) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    `${baseUrl}/product/detail/?product_id=${productId}`,
    requestOptions,
  )
    .then((response) => response.json())
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
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
    });
};
 const getToken = () => window.localStorage.getItem("token");


export const updateUser = (form) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const raw = JSON.stringify({
    "first_name": form.firstname, 
    "last_name": form.lastName,
    "email": form.email,
    "phone": form.phoneNumber,
    "address": form.address,
    "password": form.password
  });

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  return fetch("https://ecommercev01.pythonanywhere.com/user/update-profile/", requestOptions)
    .then((response) => response.json());
};


export const userInfoFetch = () => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  return fetch("https://ecommercev01.pythonanywhere.com/user/profile/", {
    method: "GET",
    headers: myHeaders
  }).then(res => res.json());
};


export const filterCategory=(id)=>{
    const requestOptions = {
  method: "GET",
  redirect: "follow"
};

 return fetch(`${baseUrl}product/list/?category_id=${id}`, requestOptions)
  .then((response) => response.json())
  .then((result) =>{
     return(result)
  })
  .catch((error) => console.error(error));
}



export const addtoLike=(id)=>{
    const myHeaders = new Headers();
    getToken() && myHeaders.append("Authorization", `Bearer ${getToken()}`);

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow"
};

 return fetch(`${baseUrl}/action/add-to-wishlist/?product_id=${id}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    return(result)
  })
  .catch((error) => console.error(error));
}