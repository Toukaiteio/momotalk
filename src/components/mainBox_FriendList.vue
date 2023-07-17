<template>
    <div class="_friendList_container">
        <div class="_frinedList_Main_Wrapper">
            <div class="Main_header">
                <div class="item_left">学生(0)</div>
                <div class="item_right">
                    <div class="_general_btn">
                        <div class="relation_lvl">
                            <div class="context">
                                羁绊等级
                            </div>
                        </div>
                    </div>
                    <div class="_general_btn">
                        <div class="list_wrapper">
                            <div class="list_display">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Main_insert"></div>
            <div class="Main_body"></div>
        </div>
        <div class="_frinedList_FriendDetail_Wrapper">

        </div>
    </div>
</template>

<script setup>
</script>
<style lang="scss" scoped>
$mainBoxBgColorLeft:#F3F7F8;
$mainBoxBgColorRight:#FFFFFF;
$mainTitleFontColor:#50555A;
$decorationColor:#496F8F;
._friendList_container{
    width: 100%;
    height: 100%;
    display: inline-flex;
    ._frinedList_Main_Wrapper,._frinedList_FriendDetail_Wrapper{
        width: 50%;
        height: 100%;
        padding: 16px;
        box-sizing: border-box;
    }
    ._frinedList_Main_Wrapper{
        background-color: $mainBoxBgColorLeft;
        .Main_header{
            width: 100%;
            height: 5%;
            min-height: 43px;
            max-height: 52px;
            font-size: 25px;
            font-weight: bold;
            color: $mainTitleFontColor;
            fill: $mainTitleFontColor;
            display: inline-flex;
            align-items: center;
            .item_left{
                width: 35%;
            }
            .item_right{
                height: 100%;
                width: 65%;
                display: inline-flex;
                align-items: center;
                justify-content: space-evenly;
                position: relative;
                .relation_lvl{
                    text-align: center;
                    font-size: 22px;
                    font-weight: 600;
                    padding-right: 16px;
                    padding-left: 16px;
                    box-sizing: border-box;
                    height: 100%;
                    width: 100%;
                    transform: skewX(0deg);
                    border-radius: 3px;
                    .context{
                        transform: skewX(12deg);
                    }
                    overflow: hidden;
                    position: relative;
                }
                .relation_lvl::before{
                        content: '';
                        position: absolute;
                        aspect-ratio: 1 / 1;
                        top: -9px;
                        right: -9px;
                        height: 19px;
                        width: 19px;
                        transform: rotateZ(45deg);
                        background-color: $decorationColor;
                    }
                .list_wrapper{
                    padding-right: 16px;
                    padding-left: 16px;
                    box-sizing: border-box;
                    height: 100%;
                    display: inline-flex;
                    align-items: center;
                    transform: skewX(0deg);
                    justify-content: center;
                    font-size: 29px;
                    .list_display{
                        height: 100%;
                        transform: skewX(0deg);
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        svg{
                            transform: skewX(0deg);
                            overflow: visible;
                        }
                    }
                }
            }
        }
    }
    ._frinedList_FriendDetail_Wrapper{
        background-color: $mainBoxBgColorRight;
    }
}
</style>