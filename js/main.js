const menuEmail = document.querySelector('.navbar-email');
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){

        shoppingCartContainer.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){

        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMoibleMenuClose = mobileMenu.classList.contains('inactive');

    if(!isMoibleMenuClose){

        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

}

const productList = [];
productList.push ({

    name: 'Bicicleta',
    price: 100,
    image:  'https://pedalmoto.com/blog/wp-content/uploads/2019/10/bicycle-daylight-forest-100582-min-1030x687.jpg',
});
productList.push ({

    name: 'Perro',
    price: 200,
    image: 'https://elcomercio.pe/resizer/oMRS7qgoB1mkmMl6PG-I9sKZs6k=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/J3DWLF2CG5C43EJOETR4RJLFFM.webp',
});
productList.push ({

    name: 'Aerosol',
    price: 300,
    image: 'https://pedalmoto.com/blog/wp-content/uploads/2019/10/bicycle-daylight-forest-100582-min-1030x687.jpg',
});

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
</div>*/


function rederProducts(arr){


    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', product.image);
        
        productInfoFigure.appendChild(productImgCart);
        
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
        
        
        }

}
rederProducts(productList);

console.log("Si estoy apareciendo como js");