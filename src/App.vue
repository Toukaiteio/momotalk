<template>
<div class="container">
  <div class="wrapper">
    <!-- windowBar -->
    <div class="windowbar_container">
      <div class="title">MOMOTALK<div class="help"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg></div></div>
      <div class="close"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
    </div>
    <div class="bottom_wrapper">
      <!-- sideBar -->
      <div class="sidebar_container">
        <div class="sidebar_item active">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
        </div>
        <div class="sidebar_item">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
        </div>
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

<style lang="scss">
$windowBarBgColor:#FC8DA2;
$generalBgColor:white;
$titleFontColor:#FFFFFF;
$listBgColor:#F3F6F6;
$unActiveSideBarBgColor:#4B5B6F;
$unActiveSideBarIconColor:#78808D;
$ActiveSideBarBgColor:#67788D;
$ActiveSideBarIconColor:#FFFFFF;
$mainBoxBgColorLeft:#F3F7F8;
$mainBoxBgColorRight:#FFFFFF;
.container{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 6%;
  padding-left: 12%;
  padding-right: 12%;
  box-sizing: border-box;
  .wrapper{
    height: 100%;
    width: 100%;
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
      padding-left: 32px;
      padding-right: 26px;
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
      }
      .help,.close{
        margin-top: 6px;
        font-size: 44px;
        font-weight: bolder;
        width: 20%;
        text-align: right;
        color: inherit;
      }
      .help{
        font-size: 28px !important;
        filter: drop-shadow(0px 2px 3px gray);
        text-align: left;
        margin-left: 24px;
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
</style>
