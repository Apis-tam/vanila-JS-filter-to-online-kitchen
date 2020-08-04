//////////////////////////////////////////////////////////////////////////
//DATA
/////////////////////////////////////////////////////////////////////////
let allFood = [
  {
    id: 0,
    title: "Овсяная каша с фруктами",
    img: "i/im1.jpg",
    price: 25,
    type: "breakfast",
  },
  {
    id: 1,
    title: " Яичница глазунья с овощами на сковородке",
    img: "i/im2.jpg",
    price: 25,
    type: "breakfast",
  },
  {
    id: 2,
    title: "  Сет азербайджанский завтрак",
    img: "i/im3.jpg",
    price: 30,
    type: "breakfast",
  },
  {
    id: 3,
    title: "Яичница с помидорами по-бакински",
    img: "i/im4.jpg",
    price: 45,
    type: "breakfast",
  },
  {
    id: 4,
    title: "Сырники со сметаной",
    img: "i/im5.jpg",
    price: 45,
    type: "lunch",
  },
  {
    id: 5,
    title: "Шпинатный крем-суп",
    img: "i/im6.jpg",
    price: 50,
    type: "dinner",
  },
  {
    id: 6,
    title: "Суп Пити",
    img: "i/im7.jpg",
    price: 85,
    type: "dinner",
  },
  {
    id: 7,
    title: "Борщ украински",
    img: "i/im8.jpg",
    price: 95,
    type: "dinner",
  },
  {
    id: 8,
    title: "Суп Кюфта Бозбаш",
    img: "i/im9.jpg",
    price: 100,
    type: "dinner",
  },
  {
    id: 9,
    title: "Картофель фри",
    img: "i/im10.jpg",
    price: 125,
    type: "lunch",
  },
  {
    id: 10,
    title: "Картофель по-домашнему",
    img: "i/im11.jpg",
    price: 135,
    type: "lunch",
  },
  {
    id: 11,
    title: "Рис с овощами",
    img: "i/im12.jpg",
    price: 150,
    type: "lunch",
  },
];
///////////////////////////////////////////////////
//VAR
///////////////////////////////////////////////
let showFilter = [];
let filterList = document.getElementById("filter-list");
let hide = document.getElementById("food-list");
hide.style.display = "none";
let totalFilter = [];
////
let selectCat = document.getElementById("select-cat");
let selectPrice = document.getElementById("select-price");
////
let chooseList = [];
let priceList = [];
////
let sumProductsField = document.getElementById("sum-products");
let totalPriceField = document.getElementById("total-price");
let count = document.getElementsByClassName("qty__item");
let addBtn = document.getElementsByClassName("product-box__btn");
let sumProducts = 0;
let totalPrice = 0;

//////////////////////////////////////////////////////////////////////////////
//RENDER
///////////////////////////////////////////////////////////////////////////////
const showItemOnDisplay = (totalFilter) => {
  filterList.innerHTML = ``;
  for (let i = 0; i < totalFilter.length; i++) {
    filterList.innerHTML += `  <div class="product-box__item ${totalFilter[i].type}">
        <h3 class="product-box__title">${totalFilter[i].title}</h3>
        <div class="product-box__img">
          <img class="img-fluid" src=${totalFilter[i].img} />
        </div>
        <div class="product-box__meta">
          <p>${totalFilter[i].price} грн.</p>
          <div class="qty">
            <input class="qty__item" type="number" id="${totalFilter[i].id}-choose-value"/> Кол
          </div>
          <button class="product-box__btn" id="${totalFilter[i].id}">Добавить</button>
        </div>
      </div> `;
  }
  eventBtn();
};

////////////////////////////////////////////////////////////////
// EVENT
////////////////////////////////////////////////////////////////
selectCat.addEventListener("change", () => {
  switch (selectCat.value) {
    case "1":
      chooseList = [];
      allFood.forEach((item) => {
        if (item.type == "breakfast") {
          chooseList.push(item);
        }
      });
      show(chooseList, priceList);

      break;

    case "2":
      chooseList = [];
      allFood.forEach((item) => {
        if (item.type == "dinner") {
          chooseList.push(item);
        }
      });
      show(chooseList, priceList);

      break;
    case "3":
      chooseList = [];
      allFood.forEach((item) => {
        if (item.type == "lunch") {
          chooseList.push(item);
        }
      });
      show(chooseList, priceList);

      break;
    case "0":
      chooseList = [];
      chooseList = [...allFood];

      show(chooseList, priceList);

      break;
  }
});
/////////
selectPrice.addEventListener("change", () => {
  switch (selectPrice.value) {
    case "30":
      priceList = [];
      allFood.forEach((item) => {
        if (item.price <= 30) {
          priceList.push(item);
        }
      });
      show(chooseList, priceList);
      break;
    case "50":
      priceList = [];
      allFood.forEach((item) => {
        if (item.price <= 50) {
          priceList.push(item);
        }
      });
      show(chooseList, priceList);
      break;
    case "100":
      priceList = [];
      allFood.forEach((item) => {
        if (item.price <= 100) {
          priceList.push(item);
        }
      });
      show(chooseList, priceList);
      break;
    case "150":
      priceList = [];
      allFood.forEach((item) => {
        if (item.price <= 150) {
          priceList.push(item);
        }
      });
      show(chooseList, priceList);
      break;
    case "0":
      priceList = [];
      priceList = [...allFood];

      show(chooseList, priceList);
      break;
  }
});
////////////////////////////////////////////////
//FILTER
/////////////////////////////////////////
const show = (chooseList, priceList) => {
  if (chooseList.length == 0) {
    totalFilter = [];
    totalFilter = [...allFood, ...priceList];
  } else if (priceList.length == 0) {
    totalFilter = [];
    totalFilter = [...chooseList, ...allFood];
  } else {
    totalFilter = [];
    totalFilter = [...chooseList, ...priceList];
  }
  totalFn(totalFilter);
  //////////////////////////////////
};
const totalFn = (arr) => {
  let newArr = arr.concat();
  let showArr = [];
  for (let i = 0; i < newArr.length; ++i) {
    for (let j = i + 1; j < newArr.length; ++j) {
      if (newArr[i] === newArr[j]) {
        showArr.push(newArr[j]);
      }
    }

    showItemOnDisplay(showArr);
  }
};
////////////////////////////////////////////////////////////
//sum prodact
//TOTAL PRICE
//////////////////////////////////////////////////////////

function eventBtn() {
  let arrBtn = [];

  arrBtn = [...addBtn];

  arrBtn.forEach((item) => {
    item.addEventListener("click", clickFn);
  });

  function clickFn() {
    console.log(this.id);
    allFood.forEach((item) => {
      if (item.id == this.id) {
        let num = Number(
          document.getElementById(`${item.id}-choose-value`).value
        );
        if (num >= 0) {
          totalPrice += item.price * num;
          totalPriceField.innerText = totalPrice;
          sumProducts += num;
          sumProductsField.innerText = sumProducts;
        }
      }
    });
  }
}
window.onload = showItemOnDisplay(allFood);
/////////////////////////////////////////////////
//Modal Window///
const submitBtn = document.getElementById("form");

let message = document.getElementById("massage");
const overlay = document.getElementsByClassName("dialog-overlay")[0];

const dialog = document.getElementsByClassName("dialog")[0];
const closeBtn = document.getElementsByClassName("btn-close")[0];
/////
document.getElementById("cart-btn").addEventListener("click", () => {
  overlay.classList.remove("hide");
  dialog.classList.remove("hide");

  document.getElementById("dialog-mail").value = "";
  document.getElementById("dialog-password").value = "";
  message.innerText = "";
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hide");
  dialog.classList.add("hide");
});

///////////////////////////////////////////////
//SUBMIT
//////////////////////////////////////////////
submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  let mailField = document.getElementById("dialog-mail").value;
  let nameField = document.getElementById("dialog-password").value;

  function validateEmail(mailField) {
    var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(mailField);
  }

  if (validateEmail(mailField) === false) {
    console.log(validateEmail(mailField));
    message.innerText = mailField + " Email is not valid :(";
  } else {
    console.log(validateEmail(mailField));
    if (nameField == "" || nameField == " " || nameField.length <= 1) {
      message.innerText = nameField + "Name is not valid :(";
    } else {
      submitBtn.submit();
      message.innerText = "";
      overlay.classList.add("hide");
      dialog.classList.add("hide");
      totalPriceField.innerText = "";
      let countArr = [...document.getElementsByClassName("qty__item")];
      countArr.forEach((item) => {
        item.value = "";
      });
      sumProductsField.innerText = "";
      alert("Спасибо за оформленный заказ =)");
    }
  }
});
