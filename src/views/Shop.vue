<template>
  <div class="shop">
    <div class="main">
      <div class="mini-img">
        <img
          v-for="(item, index) in images"
          :key="item.id"
          :src="item.img"
          @click="scrollTo(index)"
          alt="Loading..."
        />
      </div>
      <div class="full-img">
        <img
          v-for="(item, index) in images"
          :key="item.id"
          :src="item.img"
          :class="`${'img' + index}`"
          alt="Loading..."
        />
        <div class="reviews">
          <p class="title h1 c-black grandslang">Recensioni</p>

          <div class="single" v-for="item in reviews" :key="item.id">
            <div class="flex">
              <div>
                <img :src="item.img" alt="Loading..." />
              </div>
              <div>
                <p class="lato medium">{{ item.name }}</p>
                <p class="h6">Età {{ item.eta }}</p>
              </div>
            </div>

            <p class="desc h5">
              {{ item.desc }}
            </p>
          </div>

          <p class="more text-center">Altre recensioni</p>
        </div>
        <label class="lato light italic" for="">Lascia un commento</label>
        <input class="lato light h6" type="text" />
      </div>
    </div>
    <div class="desc">
      <div class="info">
        <p class="title grandslang h2">(oltre) - Intimità condivisa</p>
        <p class="text lato light h5 c-black">
          Oltre è un gioco innovativo che ha il fine di permettere alle donne di
          essere loro stesse e condividere i loro pensieri ed esperienze
          inerenti alla sessualità. <br />
          <br />
          Ha il fine di abbattere i tabù e normalizzare ciò che già di per se è
          la cosa più naturale al mondo.
        </p>
        <br />
        <span class="flex price">
          <p class="medium h4">39.90€</p>
          <p class="h6">47.90€</p>
        </span>

        <div class="dots flex center spaceEvenly lato light">
          <div class="flex center column">
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1507 19.7024V22.5308H12.847V23.4208H10.1507V26.2669H9.18148V23.4208H6.50281V22.5308H9.18148V19.7024H10.1507Z"
                fill="black"
              />
              <path
                d="M15.3936 28.6372H18.6538V18.3013C18.6538 17.9929 18.6626 17.6757 18.689 17.3585L15.9839 19.6759C15.9134 19.7288 15.8429 19.7729 15.7724 19.7993C15.702 19.8257 15.6315 19.8345 15.5698 19.8345C15.464 19.8345 15.3671 19.8081 15.2878 19.764C15.1997 19.72 15.138 19.6671 15.094 19.5966L14.5036 18.786L19.0062 14.8825H20.5394V28.6283H23.5177V30.0646H15.4024V28.6372H15.3936Z"
                fill="black"
              />
              <path
                d="M29.0513 30.2408C28.2935 30.2408 27.6062 30.1439 26.9806 29.9412C26.355 29.7386 25.8175 29.4566 25.3593 29.0777C24.9011 28.6988 24.5575 28.2495 24.3108 27.7208C24.064 27.1921 23.9407 26.5929 23.9407 25.932C23.9407 24.9628 24.1962 24.1609 24.6985 23.5265C25.2095 22.8921 25.9321 22.4427 26.8749 22.1784C26.0819 21.8788 25.4739 21.4382 25.0773 20.8478C24.672 20.2575 24.4694 19.5526 24.4694 18.7419C24.4694 18.1868 24.5839 17.6669 24.7954 17.1735C25.0157 16.6889 25.3241 16.2659 25.7206 15.9046C26.1259 15.5434 26.6017 15.2614 27.1657 15.0587C27.7296 14.8561 28.3552 14.7503 29.0425 14.7503C29.7298 14.7503 30.3466 14.8561 30.9105 15.0587C31.4744 15.2614 31.9591 15.5434 32.3556 15.9046C32.7609 16.2659 33.0693 16.6889 33.2896 17.1735C33.5099 17.6581 33.6156 18.178 33.6156 18.7419C33.6156 19.5614 33.413 20.2663 32.9988 20.8478C32.5935 21.4382 31.9943 21.8788 31.2013 22.1784C32.1441 22.4427 32.8755 22.8921 33.3777 23.5265C33.88 24.1609 34.1355 24.9628 34.1355 25.932C34.1355 26.5929 34.0121 27.1921 33.7566 27.7208C33.5099 28.2495 33.1574 28.7076 32.708 29.0777C32.2587 29.4478 31.7212 29.7386 31.0956 29.9412C30.4964 30.1439 29.8091 30.2408 29.0513 30.2408ZM29.0513 28.7429C29.5447 28.7429 29.9853 28.6724 30.3818 28.5402C30.7695 28.3992 31.1044 28.2054 31.3775 27.9587C31.6507 27.712 31.8533 27.4124 32.0031 27.0599C32.1441 26.7075 32.2234 26.3286 32.2234 25.9056C32.2234 25.3857 32.1353 24.9364 31.9679 24.5663C31.8005 24.1962 31.5626 23.8966 31.2718 23.6587C30.981 23.4296 30.6462 23.2534 30.2585 23.1476C29.8708 23.0419 29.4831 22.9802 29.0601 22.9802C28.646 22.9802 28.2495 23.0331 27.8618 23.1476C27.4829 23.2534 27.148 23.4296 26.8573 23.6587C26.5665 23.8878 26.3286 24.1962 26.1612 24.5663C25.9937 24.9364 25.9056 25.3857 25.9056 25.9056C25.9056 26.3286 25.9761 26.7163 26.1259 27.0599C26.2669 27.4124 26.4784 27.712 26.7515 27.9587C27.0247 28.2054 27.3507 28.3992 27.7472 28.5402C28.1173 28.6724 28.5579 28.7429 29.0513 28.7429ZM29.0513 21.4647C29.5447 21.4647 29.9677 21.3853 30.3113 21.2356C30.6638 21.0858 30.9458 20.8831 31.1572 20.6364C31.3687 20.3897 31.5361 20.0989 31.6331 19.7729C31.73 19.4468 31.7828 19.112 31.7828 18.7683C31.7828 18.4159 31.7212 18.0811 31.6066 17.7727C31.4921 17.4643 31.3158 17.1911 31.0867 16.962C30.8576 16.7329 30.5757 16.5479 30.232 16.4157C29.8884 16.2835 29.4919 16.213 29.0425 16.213C28.5931 16.213 28.1966 16.2835 27.8529 16.4157C27.5093 16.5479 27.2273 16.7329 26.9982 16.962C26.7691 17.1911 26.5929 17.4643 26.4784 17.7727C26.3638 18.0811 26.3021 18.4159 26.3021 18.7683C26.3021 19.112 26.355 19.4468 26.4519 19.7729C26.5489 20.0989 26.7075 20.3808 26.9277 20.6364C27.148 20.8919 27.43 21.0858 27.7736 21.2356C28.1349 21.3942 28.5579 21.4647 29.0513 21.4647Z"
                fill="black"
              />
              <path
                d="M22.4956 45C10.0891 45 0 34.9021 0 22.4956C0 10.0891 10.0891 0 22.4956 0C34.9021 0 44.9912 10.0891 44.9912 22.4956C45 34.9021 34.9021 45 22.4956 45ZM22.4956 1.32172C10.8204 1.32172 1.32172 10.8204 1.32172 22.4956C1.32172 34.1707 10.8204 43.6695 22.4956 43.6695C34.1707 43.6695 43.6695 34.1707 43.6695 22.4956C43.6783 10.8204 34.1796 1.32172 22.4956 1.32172Z"
                fill="black"
              />
            </svg>

            Spedizione gratuita
          </div>
          <div class="flex center column">
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5829 33.0869C13.0673 33.0869 11.8337 31.8533 11.8337 30.3378V28.8575H17.3321V30.3378C17.3321 31.8622 16.0985 33.0869 14.5829 33.0869Z"
                fill="#FFFDFD"
              />
              <path
                d="M14.9618 33.2103H14.204C12.8294 33.2103 11.7104 32.0913 11.7104 30.7167V28.7341H17.4554V30.7167C17.4554 32.0913 16.3364 33.2103 14.9618 33.2103ZM11.9571 28.9808V30.7167C11.9571 31.9591 12.9704 32.9636 14.204 32.9636H14.9618C16.2042 32.9636 17.2087 31.9503 17.2087 30.7167V28.9808H11.9571Z"
                fill="black"
              />
              <path
                d="M30.7078 33.0869C29.1922 33.0869 27.9586 31.8533 27.9586 30.3378V28.8575H33.457V30.3378C33.457 31.8622 32.2234 33.0869 30.7078 33.0869Z"
                fill="#FFFDFD"
              />
              <path
                d="M31.0779 33.2103H30.3201C28.9455 33.2103 27.8265 32.0913 27.8265 30.7167V28.7341H33.5715V30.7167C33.5803 32.0913 32.4613 33.2103 31.0779 33.2103ZM28.0732 28.9808V30.7167C28.0732 31.9591 29.0865 32.9636 30.3201 32.9636H31.0779C32.3203 32.9636 33.3248 31.9503 33.3248 30.7167V28.9808H28.0732Z"
                fill="black"
              />
              <path
                d="M9.27841 21.1475H12.0893V18.7772H9.27841C8.62636 18.7772 8.08887 19.3059 8.08887 19.9667C8.09768 20.6188 8.62636 21.1475 9.27841 21.1475Z"
                fill="#FFFDFD"
              />
              <path
                d="M12.2126 21.2708H9.27842C8.55588 21.2708 7.96552 20.6805 7.96552 19.9579C7.96552 19.2354 8.55588 18.645 9.27842 18.645H12.2126V21.2708ZM9.27842 18.9006C8.68805 18.9006 8.21224 19.3764 8.21224 19.9667C8.21224 20.5571 8.68805 21.0329 9.27842 21.0329H11.9659V18.9094H9.27842V18.9006Z"
                fill="black"
              />
              <path
                d="M35.7127 18.7772H32.9019V21.1475H35.7127C36.3647 21.1475 36.9022 20.6188 36.9022 19.9579C36.9022 19.3059 36.3736 18.7772 35.7127 18.7772Z"
                fill="#FFFDFD"
              />
              <path
                d="M35.7127 21.2708H32.7785V18.6538H35.7127C36.4352 18.6538 37.0256 19.2442 37.0256 19.9667C37.0256 20.6805 36.4352 21.2708 35.7127 21.2708ZM33.034 21.0241H35.7215C36.3119 21.0241 36.7877 20.5483 36.7877 19.9579C36.7877 19.3676 36.3119 18.8917 35.7215 18.8917H33.034V21.0241Z"
                fill="black"
              />
              <path
                d="M31.069 14.6182C30.8135 14.0895 30.3024 13.737 29.7209 13.6842L22.5748 13.0321C22.4691 13.0233 22.3633 13.0233 22.2488 13.0321L15.1027 13.6842C14.5212 13.737 14.0101 14.0895 13.7546 14.6182L9.98328 22.5044V27.8177C9.98328 28.7165 10.6618 29.4654 11.5605 29.5536L21.9492 30.5493C22.3369 30.5845 22.7246 30.5845 23.1123 30.5493L33.2807 29.5536C34.1707 29.4654 34.858 28.7165 34.858 27.8177V22.5044L31.069 14.6182ZM13.596 19.112L15.6667 14.9266C15.6667 14.9266 22.4867 13.6842 29.342 14.9266L31.4479 19.112C31.4567 19.112 21.3941 18.1692 13.596 19.112Z"
                fill="#FFFDFD"
              />
              <path
                d="M22.522 30.6991C22.3281 30.6991 22.1255 30.6902 21.9316 30.6726L11.5429 29.6769C10.5825 29.5888 9.85114 28.787 9.85114 27.8177V22.478L13.6401 14.5653C13.9132 14.0014 14.4683 13.6137 15.0851 13.5608L22.2312 12.9088C22.3458 12.9 22.4603 12.9 22.5748 12.9088L29.7209 13.5608C30.3465 13.6137 30.9017 14.0014 31.166 14.5653L34.9549 22.478V27.8177C34.9549 28.787 34.2324 29.58 33.2719 29.6769L23.1035 30.6726C22.9185 30.6902 22.7158 30.6991 22.522 30.6991ZM10.0979 22.5309V27.8177C10.0979 28.6548 10.7235 29.3509 11.5606 29.4302L21.9492 30.4259C22.3281 30.4611 22.707 30.4611 23.0859 30.4259L33.2543 29.4302C34.0914 29.3509 34.717 28.6548 34.717 27.8177V22.5309L30.9545 14.6711C30.7254 14.1864 30.2408 13.8516 29.7033 13.7987L22.5572 13.1467C22.4603 13.1379 22.3546 13.1379 22.2576 13.1467L15.1116 13.7987C14.5741 13.8516 14.0982 14.1776 13.8603 14.6711L10.0979 22.5309ZM13.3845 19.2618L15.5874 14.8209L15.6491 14.812C15.7196 14.8032 22.566 13.5784 29.3685 14.812L29.4301 14.8209L29.4566 14.8737L31.6682 19.253L31.448 19.2354C31.351 19.2266 21.3148 18.3014 13.6136 19.2354L13.3845 19.2618ZM21.6673 18.5745C26.2757 18.5745 30.276 18.8917 31.2453 18.971L29.2627 15.0411C22.8656 13.8957 16.4421 14.9266 15.7548 15.0411L13.8075 18.9622C16.3364 18.6714 19.0943 18.5745 21.6673 18.5745Z"
                fill="black"
              />
              <path
                d="M14.5917 26.5401H11.7192C11.1817 26.5401 10.7411 26.0995 10.7411 25.562C10.7411 25.0245 11.1817 24.5839 11.7192 24.5839H14.5917C15.1292 24.5839 15.5698 25.0245 15.5698 25.562C15.5698 26.0995 15.1292 26.5401 14.5917 26.5401Z"
                fill="#FFFDFD"
              />
              <path
                d="M14.5917 26.6634H11.7192C11.1112 26.6634 10.6177 26.17 10.6177 25.562C10.6177 24.954 11.1112 24.4606 11.7192 24.4606H14.5917C15.1997 24.4606 15.6931 24.954 15.6931 25.562C15.6931 26.17 15.1997 26.6634 14.5917 26.6634ZM11.7192 24.7073C11.2522 24.7073 10.8645 25.0862 10.8645 25.562C10.8645 26.029 11.2433 26.4167 11.7192 26.4167H14.5917C15.0587 26.4167 15.4464 26.0378 15.4464 25.562C15.4464 25.095 15.0675 24.7073 14.5917 24.7073H11.7192Z"
                fill="black"
              />
              <path
                d="M33.2014 26.5401H30.3289C29.7914 26.5401 29.3508 26.0995 29.3508 25.562C29.3508 25.0245 29.7914 24.5839 30.3289 24.5839H33.2014C33.7389 24.5839 34.1795 25.0245 34.1795 25.562C34.1795 26.0995 33.7389 26.5401 33.2014 26.5401Z"
                fill="#FFFDFD"
              />
              <path
                d="M33.2014 26.6634H30.3289C29.7209 26.6634 29.2275 26.17 29.2275 25.562C29.2275 24.954 29.7209 24.4606 30.3289 24.4606H33.2014C33.8094 24.4606 34.3029 24.954 34.3029 25.562C34.3029 26.17 33.8094 26.6634 33.2014 26.6634ZM30.3289 24.7073C29.8619 24.7073 29.4742 25.0862 29.4742 25.562C29.4742 26.029 29.8531 26.4167 30.3289 26.4167H33.2014C33.6684 26.4167 34.0561 26.0378 34.0561 25.562C34.0561 25.095 33.6773 24.7073 33.2014 24.7073H30.3289Z"
                fill="black"
              />
              <path
                d="M27.6855 25.1479H17.3321V25.3946H27.6855V25.1479Z"
                fill="black"
              />
              <path
                d="M26.4783 26.7339H18.5392V26.9806H26.4783V26.7339Z"
                fill="black"
              />
              <path
                d="M24.8218 28.3112H20.1958V28.5579H24.8218V28.3112Z"
                fill="black"
              />
              <path
                d="M22.4956 0C10.0891 0 0 10.0891 0 22.4956C0 34.9021 10.0891 44.9912 22.4956 44.9912C34.9021 44.9912 44.9912 34.9021 44.9912 22.4956C45 10.0891 34.9021 0 22.4956 0ZM43.6783 22.4956C43.6783 27.8529 41.6781 32.7433 38.3826 36.4793L8.51185 6.61739C12.2479 3.32191 17.1382 1.32172 22.4956 1.32172C34.1796 1.32172 43.6783 10.8204 43.6783 22.4956ZM22.4956 43.6783C10.8204 43.6783 1.32172 34.1707 1.32172 22.4956C1.32172 16.6536 3.7008 11.3491 7.54259 7.51615L37.4838 37.4486C33.6421 41.2904 28.3464 43.6783 22.4956 43.6783Z"
                fill="black"
              />
            </svg>

            Sei giocatori
          </div>
          <div class="flex center column">
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4956 45C10.0891 45 0 34.9021 0 22.4956C0 10.0891 10.0891 0 22.4956 0C34.9021 0 44.9912 10.0891 44.9912 22.4956C45 34.9021 34.9021 45 22.4956 45ZM22.4956 1.32172C10.8204 1.32172 1.32172 10.8204 1.32172 22.4956C1.32172 34.1707 10.8204 43.6695 22.4956 43.6695C34.1707 43.6695 43.6695 34.1707 43.6695 22.4956C43.6783 10.8204 34.1796 1.32172 22.4956 1.32172Z"
                fill="black"
              />
              <path
                d="M19.2706 16.8651L16.9796 25.7911H27.3419L24.6367 16.7593C24.4693 16.1954 24.1257 15.7196 23.6851 15.3759C25.0509 14.7151 25.9849 13.3317 25.9849 11.7104C25.9849 9.46346 24.1609 7.6395 21.914 7.6395C19.6671 7.6395 17.8431 9.46346 17.8431 11.7104C17.8431 13.3493 18.8124 14.7503 20.2046 15.3936C19.764 15.7725 19.4204 16.2747 19.2706 16.8651Z"
                fill="#FFFDFD"
              />
              <path
                d="M27.8177 26.1435H16.5214L18.9269 16.777C19.0503 16.2923 19.2882 15.8518 19.623 15.4817C18.3278 14.6887 17.5083 13.2524 17.5083 11.7104C17.5083 9.26962 19.4909 7.28705 21.9316 7.28705C24.3724 7.28705 26.355 9.26962 26.355 11.7104C26.355 13.2524 25.5796 14.6358 24.2931 15.4464C24.6103 15.7901 24.8482 16.2042 24.9804 16.6624L27.8177 26.1435ZM17.4378 25.4386H26.866L24.3019 16.8651C24.1609 16.3893 23.8702 15.9663 23.4736 15.6579L23.0331 15.3055L23.5441 15.0587C24.8394 14.4331 25.6501 13.1555 25.6501 11.7192C25.6501 9.67495 23.9847 8.00077 21.9316 8.00077C19.8786 8.00077 18.2132 9.66614 18.2132 11.7192C18.2132 13.1555 19.0591 14.4772 20.3632 15.0852L20.8743 15.3231L20.4337 15.6755C20.0196 16.0104 19.7376 16.4509 19.6054 16.9532L17.4378 25.4386Z"
                fill="black"
              />
              <path
                d="M25.8968 21.729L23.6058 30.655H33.9681L31.263 21.6233C31.0956 21.0593 30.7519 20.5835 30.3113 20.2399C31.6771 19.579 32.6111 18.1956 32.6111 16.5743C32.6111 14.3274 30.7872 12.5034 28.5402 12.5034C26.2933 12.5034 24.4694 14.3274 24.4694 16.5743C24.4694 18.2132 25.4386 19.6142 26.8308 20.2575C26.3902 20.6276 26.0554 21.1386 25.8968 21.729Z"
                fill="#FFFDFD"
              />
              <path
                d="M34.4439 31.0074H23.1564L25.5531 21.6409C25.6765 21.1563 25.9144 20.7157 26.2492 20.3456C24.954 19.5526 24.1345 18.1163 24.1345 16.5743C24.1345 14.1335 26.1171 12.151 28.5578 12.151C30.9986 12.151 32.9812 14.1335 32.9812 16.5743C32.9812 18.1163 32.2058 19.4997 30.9193 20.3104C31.2365 20.654 31.4744 21.0681 31.6066 21.5263L34.4439 31.0074ZM24.064 30.3025H33.4922L30.9281 21.729C30.7871 21.2532 30.4964 20.8302 30.0998 20.5218L29.6593 20.1694L30.1703 19.9227C31.4656 19.297 32.2763 18.0106 32.2763 16.5831C32.2763 14.5389 30.6109 12.8647 28.5578 12.8647C26.5048 12.8647 24.8394 14.5301 24.8394 16.5831C24.8394 18.0194 25.6853 19.3411 26.9894 19.9491L27.5005 20.187L27.0599 20.5395C26.6458 20.8743 26.3638 21.3149 26.2316 21.8171L24.064 30.3025Z"
                fill="black"
              />
              <path
                d="M13.2965 21.729L11.0055 30.655H21.3677L18.6626 21.6233C18.4952 21.0593 18.1516 20.5835 17.711 20.2399C19.0768 19.579 20.0108 18.1956 20.0108 16.5743C20.0108 14.3274 18.1868 12.5034 15.9399 12.5034C13.693 12.5034 11.869 14.3274 11.869 16.5743C11.869 18.2132 12.8383 19.6142 14.2305 20.2575C13.7899 20.6276 13.4463 21.1386 13.2965 21.729Z"
                fill="#FFFDFD"
              />
              <path
                d="M21.8435 31.0074H10.5561L12.9616 21.6409C13.085 21.1563 13.3229 20.7157 13.6577 20.3456C12.3536 19.5526 11.543 18.1163 11.543 16.5743C11.543 14.1335 13.5255 12.151 15.9663 12.151C18.4071 12.151 20.3897 14.1335 20.3897 16.5743C20.3897 18.1163 19.6142 19.4997 18.3278 20.3104C18.645 20.654 18.8829 21.0681 19.0151 21.5263L21.8435 31.0074ZM11.4637 30.3025H20.8919L18.3278 21.729C18.1868 21.2532 17.896 20.8302 17.4995 20.5218L17.0589 20.1694L17.57 19.9227C18.8653 19.297 19.6759 18.0194 19.6759 16.5831C19.6759 14.5389 18.0106 12.8647 15.9575 12.8647C13.9044 12.8647 12.2391 14.5301 12.2391 16.5831C12.2391 18.0194 13.085 19.3411 14.3891 19.9491L14.9001 20.187L14.4596 20.5395C14.0454 20.8743 13.7635 21.3149 13.6313 21.8171L11.4637 30.3025Z"
                fill="black"
              />
              <path
                d="M19.2706 28.4257L16.9796 37.3517H27.3419L24.6367 28.3199C24.4693 27.756 24.1257 27.2802 23.6851 26.9365C25.0509 26.2757 25.9849 24.8923 25.9849 23.271C25.9849 21.0241 24.1609 19.2001 21.914 19.2001C19.6671 19.2001 17.8431 21.0241 17.8431 23.271C17.8431 24.9099 18.8124 26.3109 20.2046 26.9542C19.764 27.3242 19.4204 27.8353 19.2706 28.4257Z"
                fill="#FFFDFD"
              />
              <path
                d="M27.8177 37.7041H16.5214L18.9269 28.3376C19.0503 27.8529 19.2882 27.4124 19.623 27.0423C18.319 26.2405 17.5083 24.813 17.5083 23.271C17.5083 20.8302 19.4909 18.8477 21.9316 18.8477C24.3724 18.8477 26.355 20.8302 26.355 23.271C26.355 24.813 25.5796 26.1964 24.2931 27.007C24.6103 27.3507 24.8482 27.7648 24.9804 28.223L27.8177 37.7041ZM17.4378 36.9992H26.866L24.3019 28.4257C24.1609 27.9499 23.8702 27.5269 23.4736 27.2185L23.0331 26.8661L23.5441 26.6193C24.8394 25.9937 25.6501 24.7161 25.6501 23.2798C25.6501 21.2356 23.9847 19.5614 21.9316 19.5614C19.8786 19.5614 18.2132 21.2267 18.2132 23.2798C18.2132 24.7161 19.0591 26.0378 20.3632 26.6458L20.8743 26.8837L20.4337 27.2361C20.0196 27.571 19.7376 28.0115 19.6054 28.5138L17.4378 36.9992Z"
                fill="black"
              />
            </svg>
            Sorprese all'interno
          </div>
        </div>

        <Button name="acquista ora" link="purchase" />

        <div class="accordion">
          <p class="details lato h5 light" @click="changeShow">
            Dettagli
            <svg
              class="details-svg"
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L8 8L15 1" stroke="black" stroke-width="0.7" />
            </svg>
          </p>

          <div class="accordion_content">
            <p class="lato h5 light">
              Oltre è un gioco innovativo che ha il fine di permettere alle
              donne di essere loro stesse e condividere i loro pensieri ed
              esperienze inerenti alla sessualità. Ha il fine di abbattere i
              tabù e normalizzare ciò che già di per se e la cosa più naturale
              al mondo.
            </p>
            <br />
            <ul class="lato h5 light">
              All’interno del gioco troverai:
              <li>il tabellone</li>
              <li>le pedine</li>
              <li>le carte divise per le categorie da giocare</li>
              <li>un sex toys in omaggio</li>
              <li>5 buoni sconto da poter utilizzare sul nostro sito</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Button from "../components/Button.vue";
import Footer from "../components/Footer.vue";
import {
  setAccordionContent,
  animateAccordion,
  reverseAccordion,
  scrollTo,
  imageStagger,
  animateShopText,
} from "../animations/animations";
export default {
  components: {
    Button,
    Footer,
  },
  data() {
    return {
      show: false,
      images: [
        {
          img: require("../assets/images/GAME.webp"),
        },
        {
          img: require("../assets/images/CARDS_03.webp"),
        },
        {
          img: require("../assets/images/BOX_01.webp"),
        },
        {
          img: require("../assets/images/CARDS_01.webp"),
        },
        {
          img: require("../assets/images/CARDS_02.webp"),
        },
      ],
      reviews: [
        {
          img: require("../assets/svg/reviews1.svg"),
          name: "Martina",
          eta: "23",
          desc: "Grazie a questo prodotto sono riuscita ad aprirmi con le mie amiche. Abbiamo passato una serata alternativa, ci siamo diveritite scoprendo nuovi aspetti di noi stesse. Consiglio ad ogni ragazza di provarlo",
        },
        {
          img: require("../assets/svg/reviews2.svg"),
          name: "Laura",
          eta: "27",
          desc: "Finalmente un gioco utile al benessere personale e soprattutto sessuale. Dopo un po’ di imbarazzo iniziale, poi ci siamo sciolte ed è stato molto divertente ascoltare le esperienze delle mie amiche. ",
        },
        {
          img: require("../assets/svg/reviews3.svg"),
          name: "Claudia",
          eta: "20",
          desc: "Il gioco è stato pensato molto bene. Ho scoperto molte cose che non sapevo e son riuscita a superare l’imbarazzo. Il fatto che nel gioco ci sia pure un sex toy mi piace molto, perchè non ne ho mai provato uno dato che costano molto",
        },
        {
          img: require("../assets/svg/reviews4.svg"),
          name: "Francesca",
          eta: "25",
          desc: "Lo adoro. Un gioco davvero utile per tutte le donne. Mi ha permesso di conoscermi meglio e di confrontarmi con le mie amiche. Il sex toy compreso con il gioco è fantastico, e tutte le mie amiche hanno un codice sconto per poterne comprare uno.",
        },
      ],
    };
  },
  methods: {
    changeShow() {
      this.scrollTo(1);
      this.show = !this.show;
      if (this.show) {
        animateAccordion();
      } else {
        reverseAccordion();
      }
    },
    scrollTo(index) {
      if (window.innerWidth > 900) {
        scrollTo(index);
      }
    },
  },
  mounted() {
    if (window.innerWidth > 900) {
      imageStagger();
      animateShopText();
    } else {
      animateShopText();
      imageStagger();
    }
    setAccordionContent();
  },
};
</script>

<style lang="scss">
.shop {
  padding: 140px 70px;
  display: grid;
  grid-template-columns: 8fr 4fr;

  input {
    margin-top: 15px;
    height: 30px;
    padding-left: 10px;
    width: 100%;
    border: 0.5px solid #000000;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: transparent;
    outline: none;
    margin-bottom: 30px;
  }
  .main {
    height: auto;
    display: flex;
    .mini-img {
      display: flex;
      flex-direction: column;
      margin-right: 25px;
      cursor: pointer;
      width: 30%;
      img {
        margin-bottom: 25px;
        height: auto;
      }
    }
    .full-img {
      display: flex;
      flex-direction: column;

      img {
        margin-bottom: 25px;
      }

      .reviews {
        margin-bottom: 100px;

        img {
          padding-right: 15px;
        }
        .title {
          padding-top: 25px;
          margin-top: 100px;
          padding-bottom: 80px;
          border-top: 1px solid black;
        }

        .single {
          padding-top: 50px;
          padding-bottom: 50px;
          border-bottom: 1px solid black;

          .desc {
            padding-top: 25px;
          }
        }

        .more {
          padding-top: 25px;
        }
      }
    }
  }
  .desc {
    margin-left: 25px;

    .info {
      // position: fixed;
      display: flex;
      flex-direction: column;
      margin-right: 50px;
      .title {
        padding-bottom: 25px;
      }

      .dots {
        padding-top: 50px;
        padding-bottom: 50px;
        text-align: center;
      }

      a {
        width: 100%;
        margin-top: 50px;
      }
    }
  }

  .price {
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;
    p:nth-child(2) {
      padding-left: 25px;
      color: #eb6b45;
      text-decoration: line-through;
    }
  }

  .accordion {
    .details {
      padding-top: 100px;
      padding-bottom: 25px;
      border-bottom: 1px solid black;
      cursor: pointer;
    }

    .accordion_content {
      p {
        padding-top: 25px;
      }

      ul {
        li::before {
          content: "• ";
          color: black;
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .shop {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 70px 35px;

    .desc {
      margin: 0px;

      .info {
        margin-right: 0px;
      }
    }

    .accordion {
      &_content {
        padding-bottom: 50px;

        p {
          padding-top: 0px;
        }
      }
      .details {
        margin-bottom: 50px;
      }
    }

    .main {
      .mini-img {
        display: none;
      }
    }
  }
}
</style>