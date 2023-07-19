<template>
<div class="container">
  <div class="wrapper">
    <!-- windowBar -->
    <div class="windowbar_container">
      <div class="title">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" x="0" y="0" viewBox="0 0 512 477.9" fill="%23FFFFFF"><path d="M101.8 396.4c-53.3 0-98.4 53.8-101.8 79.5 81.4 7.9 196.1-6.8 252.1-65-74.7 13.5-135.9-5.2-150.3-14.5zM281.4 412.5c55.1 73.3 137.7 58.5 230.5 63.3 3.5-42.1-73.2-80.9-103.9-82.2-39.9 28.5-123.3 19.5-126.6 18.9z"/><path d="M256.4 0C136.8 45 31.5 151.4 31.5 259.4c0 85 68.4 153.9 195.3 137.3 3.9-.5 7.6-1.1 11.2-1.7-1.1-.4-2.1-.9-2.9-1.3-19.4-9.8-53.4-56.7-39-112.6 1.4 59.3 39.7 102.6 57.1 111 2.7 1.3 11.9 4.6 25.5 6.7 51.9 8 164.9 4.7 187.9-116.7C498.9 111.4 256.4 0 256.4 0z"/></svg>
        </div>
        <div class="context">
          MOMOTALK
        </div>
        
        <div class="help"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M5 0C2 0 0 2 0 5v54c0 3 2 5 5 5h54c3 0 5-2 5-5V5c0-3-2-5-5-5zm26 8 9 2 5 6 1 5v5l-3 4-5 5-3 1-1 1-1 1v2l-1 2h-5l-2-2v-2l1-3 1-2 4-4 3-2 3-1 1-2v-4l-1-2-6-2-5 1-2 2h-2l-4-3a2 2 0 0 1 0-3l4-3 9-2zm-2 38a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" fill="%23FFFFFF"/></svg></div></div>
      <div class="close"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
    </div>
    <div class="bottom_wrapper">
      <!-- sideBar -->
      <div class="sidebar_container">
        <router-link to="/" class="sidebar_item" :class="{'active':PageStateObj.isDefaultPage}" @click="goPage(true);">
          <svg data-v-6983fa4c="" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="34.053787px" height="39.500008px" viewBox="0 0 34.053787 39.500008" version="1.1" class="icon info">
            <defs>
              <path d="M6.52658 6.5C6.52658 2.91015 11.2276 0 17.0266 0C22.8256 0 27.5266 2.91015 27.5266 6.5C27.5266 10.0899 22.8256 13 17.0266 13C11.2276 13 6.52658 10.0899 6.52658 6.5Z" id="path_1"></path>
              <clipPath id="clip_1"><use xlink:href="#path_1">
              </use>
            </clipPath>
          </defs>
          <!-- 此处借用了 https://github.com/U1805/momotalk 的图标 -->
          <g id="info">
            <path d="M0.0265776 39.5L34.0265 39.5C34.0265 39.5 35.0516 27.19 24.5266 25.5C24.5016 25.45 9.55158 25.55 9.52658 25.5C-0.988403 27.09 0.0265776 39.5 0.0265776 39.5Z" id="Line" fill-rule="evenodd" stroke="none"></path>
            <g id="Oval-2"><g clip-path="url(#clip_1)">
              <use xlink:href="#path_1" fill="none" stroke="#ff899e" stroke-width="4"></use>
            </g></g>
            <path d="M5.52658 16.5C5.52658 10.1487 10.6753 5 17.0266 5C23.3779 5 28.5266 10.1487 28.5266 16.5C28.5266 22.8513 23.3779 28 17.0266 28C10.6753 28 5.52658 22.8513 5.52658 16.5Z" id="Oval" fill-rule="evenodd" stroke="none"></path>
          </g></svg>
        </router-link>
        <router-link to="/c" class="sidebar_item" :class="{'active':!PageStateObj.isDefaultPage}" @click="goPage(false)">
          <svg data-v-6983fa4c="" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="39px" height="31px" viewBox="0 0 39 31" version="1.1" class="icon message">
            <g id="Group-2">
              <path d="M34.001 0L4.999 0Q4.87628 0 4.75371 0.00602151Q4.63114 0.012043 4.50901 0.0240715Q4.38688 0.0361001 4.26549 0.0541066Q4.1441 0.0721132 4.02374 0.0960544Q3.90338 0.119996 3.78434 0.149814Q3.6653 0.179632 3.54787 0.215255Q3.43043 0.250879 3.31489 0.292221Q3.19934 0.333564 3.08597 0.380526Q2.97259 0.427489 2.86165 0.479957Q2.75072 0.532426 2.64249 0.590276Q2.53426 0.648125 2.429 0.711215Q2.32374 0.774305 2.2217 0.842483Q2.11967 0.910662 2.0211 0.983765Q1.92253 1.05687 1.82767 1.13472Q1.73281 1.21257 1.64188 1.29499Q1.55095 1.3774 1.46417 1.46417Q1.3774 1.55095 1.29499 1.64188Q1.21257 1.73281 1.13472 1.82767Q1.05687 1.92253 0.983765 2.0211Q0.910662 2.11967 0.842483 2.2217Q0.774305 2.32374 0.711215 2.429Q0.648125 2.53426 0.590276 2.64249Q0.532426 2.75072 0.479957 2.86165Q0.427489 2.97259 0.380526 3.08597Q0.333564 3.19934 0.292221 3.31489Q0.250879 3.43043 0.215255 3.54787Q0.179632 3.6653 0.149814 3.78434Q0.119996 3.90338 0.0960544 4.02374Q0.0721132 4.1441 0.0541066 4.26549Q0.0361001 4.38688 0.0240715 4.50901Q0.012043 4.63114 0.00602151 4.75371Q0 4.87628 0 4.999L0 22.001Q0 22.1237 0.00602151 22.2463Q0.012043 22.3689 0.0240715 22.491Q0.0361001 22.6131 0.0541066 22.7345Q0.0721132 22.8559 0.0960544 22.9763Q0.119996 23.0966 0.149814 23.2157Q0.179632 23.3347 0.215255 23.4521Q0.250879 23.5696 0.292221 23.6851Q0.333564 23.8007 0.380526 23.914Q0.427489 24.0274 0.479957 24.1383Q0.532426 24.2493 0.590276 24.3575Q0.648125 24.4657 0.711215 24.571Q0.774305 24.6763 0.842483 24.7783Q0.910662 24.8803 0.983765 24.9789Q1.05687 25.0775 1.13472 25.1723Q1.21257 25.2672 1.29499 25.3581Q1.3774 25.449 1.46417 25.5358Q1.55095 25.6226 1.64188 25.705Q1.73281 25.7874 1.82767 25.8653Q1.92253 25.9431 2.0211 26.0162Q2.11967 26.0893 2.2217 26.1575Q2.32374 26.2257 2.429 26.2888Q2.53426 26.3519 2.64249 26.4097Q2.75072 26.4676 2.86165 26.52Q2.97259 26.5725 3.08597 26.6195Q3.19934 26.6664 3.31489 26.7078Q3.43043 26.7491 3.54787 26.7847Q3.6653 26.8204 3.78434 26.8502Q3.90338 26.88 4.02374 26.9039Q4.1441 26.9279 4.26549 26.9459Q4.38688 26.9639 4.50901 26.9759Q4.63114 26.988 4.75371 26.994Q4.87628 27 4.999 27L34.001 27Q34.1237 27 34.2463 26.994Q34.3689 26.988 34.491 26.9759Q34.6131 26.9639 34.7345 26.9459Q34.8559 26.9279 34.9763 26.9039Q35.0966 26.88 35.2157 26.8502Q35.3347 26.8204 35.4521 26.7847Q35.5696 26.7491 35.6851 26.7078Q35.8007 26.6664 35.914 26.6195Q36.0274 26.5725 36.1383 26.52Q36.2493 26.4676 36.3575 26.4097Q36.4657 26.3519 36.571 26.2888Q36.6763 26.2257 36.7783 26.1575Q36.8803 26.0893 36.9789 26.0162Q37.0775 25.9431 37.1723 25.8653Q37.2672 25.7874 37.3581 25.705Q37.4491 25.6226 37.5358 25.5358Q37.6226 25.449 37.705 25.3581Q37.7874 25.2672 37.8653 25.1723Q37.9431 25.0775 38.0162 24.9789Q38.0893 24.8803 38.1575 24.7783Q38.2257 24.6763 38.2888 24.571Q38.3519 24.4657 38.4097 24.3575Q38.4676 24.2493 38.52 24.1383Q38.5725 24.0274 38.6195 23.914Q38.6664 23.8007 38.7078 23.6851Q38.7491 23.5696 38.7847 23.4521Q38.8204 23.3347 38.8502 23.2157Q38.88 23.0966 38.9039 22.9763Q38.9279 22.8559 38.9459 22.7345Q38.9639 22.6131 38.9759 22.491Q38.9879 22.3689 38.994 22.2463Q39 22.1237 39 22.001L39 4.999Q39 4.87628 38.994 4.75371Q38.9879 4.63114 38.9759 4.50901Q38.9639 4.38688 38.9459 4.26549Q38.9279 4.1441 38.9039 4.02374Q38.88 3.90338 38.8502 3.78434Q38.8204 3.6653 38.7847 3.54787Q38.7491 3.43043 38.7078 3.31489Q38.6664 3.19934 38.6195 3.08597Q38.5725 2.97259 38.52 2.86165Q38.4676 2.75072 38.4097 2.64249Q38.3519 2.53426 38.2888 2.429Q38.2257 2.32374 38.1575 2.2217Q38.0893 2.11967 38.0162 2.0211Q37.9431 1.92253 37.8653 1.82767Q37.7874 1.73281 37.705 1.64188Q37.6226 1.55095 37.5358 1.46417Q37.4491 1.3774 37.3581 1.29499Q37.2672 1.21257 37.1723 1.13472Q37.0775 1.05687 36.9789 0.983765Q36.8803 0.910662 36.7783 0.842483Q36.6763 0.774305 36.571 0.711215Q36.4657 0.648125 36.3575 0.590276Q36.2493 0.532426 36.1383 0.479957Q36.0274 0.427489 35.914 0.380526Q35.8007 0.333564 35.6851 0.292221Q35.5696 0.250879 35.4521 0.215255Q35.3347 0.179632 35.2157 0.149814Q35.0966 0.119996 34.9763 0.0960544Q34.8559 0.0721132 34.7345 0.0541066Q34.6131 0.0361001 34.491 0.0240715Q34.3689 0.012043 34.2463 0.00602151Q34.1237 0 34.001 0ZM11 14.5C11 15.3284 11.6716 16 12.5 16C13.3284 16 14 15.3284 14 14.5C14 13.6716 13.3284 13 12.5 13C11.6716 13 11 13.6716 11 14.5ZM18 14.5C18 15.3284 18.6716 16 19.5 16C20.3284 16 21 15.3284 21 14.5C21 13.6716 20.3284 13 19.5 13C18.6716 13 18 13.6716 18 14.5ZM25 14.5C25 15.3284 25.6716 16 26.5 16C27.3284 16 28 15.3284 28 14.5C28 13.6716 27.3284 13 26.5 13C25.6716 13 25 13.6716 25 14.5Z" id="Rectangle-3-Subtract" fill-rule="evenodd" stroke="none"></path>
              <path d="M11 26L11 31L18 26L11 26Z" id="Line" fill-rule="evenodd" stroke="none">

              </path></g></svg>
        </router-link>
      </div>
      <!-- MainBox -->
      <div class="mainbox_container">
        <div class="mainbox">
          <router-view></router-view>
          <!-- router-view here -->
        </div>
      </div>
    </div>

  </div>

</div>

</template>
<script setup>
  import { reactive } from 'vue';
  const PageStateObj=reactive({
    isDefaultPage:true,
    onSelectStudentIndex:-1, //do remember set to -1 when page was changed
  })
  const goPage=(_v)=>{

    if(PageStateObj.isDefaultPage!=_v){
      PageStateObj.isDefaultPage=_v;
      PageStateObj.onSelectStudentIndex=-1;
    }
    console.log(PageStateObj.isDefaultPage)
  }
</script>
<style lang="scss">
$windowBarBgColor:#FC8DA2;
$generalBgColor:white;
$titleFontColor:#FFFFFF;
$listBgColor:#F3F6F6;
$unActiveSideBarBgColor:#4B5B6F;
$unActiveSideBarIconColor:#78808D;
$ActiveSideBarBgColor:#67788D;
$ActiveSideBarIconColor:#FFFFFF;
$generalBtnBgColor:#FFFFFF;
$generalBtnFontColor:#696D6F;
.container{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 6%;
  padding-left: 16%;
  padding-right: 16%;
  box-sizing: border-box;
  .wrapper{
    height: 100%;
    width: 100%;
    min-width: 948px;
    background-color: $generalBgColor;
    border-radius: 8px;
    filter: drop-shadow(0px 0px 6px lightgray);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .windowbar_container{
      width: 100%;
      height: 64px;
      display: inline-flex;
      align-items: center;
      color: $titleFontColor;
      padding: 12px;
      padding-left: 24px;
      padding-right: 24px;
      box-sizing: border-box;
      user-select: none;
      svg{
        fill: $titleFontColor;
      }
      .title{
        font-size: 33px;
        width: 80%;
        font-weight: bolder;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        display: inline-flex;
        align-items: center;
        .context{
          margin-left: 8px;
          filter: drop-shadow(0px 0px 2px $titleFontColor);
        }
      }
      .help,.close{
        margin-top: 6px;
        font-size: 44px;
        font-weight: bolder;
        width: 20%;
        text-align: right;
        color: inherit;
      }
      .logo{
        margin-top: 6px;
      }
      .logo,.help{
        svg{
          height: 28px;
          width: 28px;
          border-radius: 5px;
        }
        
        overflow: hidden;
      }
      .help{
        font-size: 24px !important;
        filter: drop-shadow(0px 2px 3px gray);
        text-align: left;
        margin-left: 18px;
      }
      background-color: $windowBarBgColor;
    }
    .bottom_wrapper{
      width: 100%;
      flex: 1;
      height: 0px;
      display: flex;
      // background-color: $unActiveSideBarBgColor;
      .sidebar_container{
        width: 10%;
        min-width: 98px;
        max-width: 110px;
        height: 100%;
        background-color: $unActiveSideBarBgColor;
        .sidebar_item{
          aspect-ratio:1 / 1;
          width: 100%;
          background-color: $unActiveSideBarBgColor;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 52px;
          svg{
            fill: $unActiveSideBarIconColor;
          }
        }
        .sidebar_item.active{
          background-color: $ActiveSideBarBgColor !important;
          svg{
            fill: $ActiveSideBarIconColor !important;
          }
          
        }
      }
      .mainbox_container{
        box-sizing: border-box;
        width: 0px;
        height: 100%;
        flex:1;
        .mainbox{
          width: 100%;
          height: 100%;
          router-view{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
._general_btn{
  transform: skewX(-12deg);
  background-color: $generalBtnBgColor;
  border-radius: 6px;
  overflow: hidden;
  padding: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: $generalBtnFontColor !important;
  filter: drop-shadow(-2px 3px 4px lightgray);
  *{
    transform: skewX(12deg);
  }
}
</style>
