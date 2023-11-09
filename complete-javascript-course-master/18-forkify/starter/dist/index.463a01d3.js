function e(e){return e&&e.__esModule?e.default:e}var s=globalThis,i={},r={},n=s.parcelRequire3a11;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in r){var s=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,s.call(n.exports,n,n.exports),n.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,s){r[e]=s},s.parcelRequire3a11=n),(0,n.register)("27Lyk",function(e,s){Object.defineProperty(e.exports,"register",{get:()=>i,set:e=>i=e,enumerable:!0,configurable:!0});var i,r=new Map;i=function(e,s){for(var i=0;i<s.length-1;i+=2)r.set(s[i],{baseUrl:e,path:s[i+1]})}}),n("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.463a01d3.js","eyyUD","icons.c14567a0.svg"]'));var c={};c=new URL("icons.c14567a0.svg",import.meta.url).toString();const t=document.querySelector(".recipe"),a=async function(){try{// 1. Loading recipe
let s=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"),i=await s.json();if(!s.ok)throw Error(`${i.message} (${s.status})`);let{recipe:r}=i.data;r={id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,serving:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients},console.log(r);//2. Reder recipi
let n=`
    <figure class="recipe__fig">
      <img src="${r.image}" alt="${r.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${r.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/e(c)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${r.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/e(c)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${r.serving}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="src/img/icons.svg#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="src/img/icons.svg#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="src/img/icons.svg#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="src/img/icons.svg#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">

        ${r.ingredients.map(e=>`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>
          `).join("")} 
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${r.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${r.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `;t.innerHTML="",t.insertAdjacentHTML("afterbegin",n)}catch(e){alert(e)}};a();//# sourceMappingURL=index.463a01d3.js.map

//# sourceMappingURL=index.463a01d3.js.map
