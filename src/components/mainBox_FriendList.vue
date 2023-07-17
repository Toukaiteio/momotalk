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
                                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Main_insert">
                <div class="insert_decoration"><div class="decoration"></div></div>
                <div class="insert_Context">所有学生</div>
            </div>
            <div class="Main_body">
                <div class="list_wrapper">
                    <div class="list_item">
                        <div class="user_avatar"><img src="../assets/temp_placeHolder_1.png" /></div>
                        <div class="user_detail">
                            <div class="user_name">#username</div>
                            <div class="user_intro">#userintro</div>
                        </div>
                        <div class="user_relation_lvl"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></div>
                    </div>
                </div>
            </div>
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
$mainSubTitleFontColor:#9CA5AB;
$mainInsertBgColor:#E5F0F8;
$mainListActiveColor:#DAE5E9;
$decorationColor:#496F8F;
$insertDecorationColor:#2BC5FE;
$userRelationDecorationColor:#F3B6D1;
$userRelationDecorationOutlineColor:#E37DC8;
._friendList_container{
    width: 100%;
    height: 100%;
    display: inline-flex;
    ._frinedList_Main_Wrapper,._frinedList_FriendDetail_Wrapper{
        width: 50%;
        height: 100%;
    }
    ._frinedList_Main_Wrapper{
        background-color: $mainBoxBgColorLeft;
        display: flex;
        flex-direction: column;
        .Main_header{
            padding: 16px;
            box-sizing: border-box;
            width: 100%;
            height: 5%;
            min-height: 68px;
            max-height: 75px;
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
                    font-size: 22px;
                    padding-top: 3px;
                    padding-bottom: 3px;
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
                        .arrow{
                                fill: $decorationColor;
                                padding-left: 4px;
                                padding-right: 2px;
                                text-align: center;
                            }
                    }
                }
            }
        }
        .Main_insert{
            padding: 3px;
            box-sizing: border-box;
            border-top:1px solid $mainListActiveColor;
            background-color: $mainInsertBgColor;
            height: 5%;
            min-height: 42px;
            max-height: 45px;
            width: 100%;
            display: inline-flex;
            align-items: center;
            .insert_decoration{
                height: 52%;
                margin-top: 2px;
                width: 27.5px;
                padding-left: 12px;
                padding-right: 12px;
                box-sizing: border-box;
                .decoration{
                    height: 100%;
                    width: 100%;
                    background-color: $insertDecorationColor;
                }
            }
            .insert_Context{
                font-size: 20px;
                font-weight: 600;
                color: $mainSubTitleFontColor;
                margin-bottom: 4px;
            }
        }
        .Main_body{
            flex: 1;
            width: 100%;
            height: 0px;
            .list_wrapper{
                height: 100%;
                width: 100%;
                background-color: $mainBoxBgColorLeft;
                .list_item{
                    height: 80px;
                    width: 100%;
                    padding: 8px;
                    padding-top: 6px;
                    padding-bottom: 6px;
                    box-sizing: border-box;
                    background-color: $mainListActiveColor;
                    display: flex;
                    .user_avatar{
                        padding-left: 8px;
                        padding-right: 8px;
                        height: 100%;
                        width: 80px;
                        text-align: center;
                        img{
                            display: inline-block;
                            object-fit: cover;
                            height: 100%;
                            aspect-ratio: 1 / 1;
                            border-radius: 74px;
                            overflow: hidden;
                        }
                    }
                    .user_detail{
                        flex: 1;
                        width: 0px;
                        height: 100%;
                        padding-top: 8px;
                        padding-bottom: 8px;
                        box-sizing: border-box;
                        .user_name{
                            height: 60%;
                            width: 100%;
                            color: $mainTitleFontColor;
                            font-size: 24px;
                            font-weight: 700;
                        }
                        .user_intro{
                            height: 40%;
                            width: 100%;
                            font-size: 19px;
                            font-weight: 600;
                            color: $mainSubTitleFontColor;
                        }
                    }
                    .user_relation_lvl{
                        height: 100%;
                        position: relative;
                        aspect-ratio: 1.2 / 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 38px;
                        svg{
                            fill: $userRelationDecorationColor;
                            stroke: $userRelationDecorationOutlineColor;
                            stroke-width: 22px;
                        }
                    }
                    .user_relation_lvl::before{
                            content: '12';
                            display: block;
                            position: absolute;
                            width: 26px;
                            height: 26px;
                            font-size: 18px;
                            font-weight: 700;
                            margin-left: 5%;
                            z-index: 33;
                            color:$mainBoxBgColorLeft;
                        }
                    .user_relation_lvl::after{
                        content:'12';
                        display: block;
                        position: absolute;
                        width: 24px;
                        height: 24px;
                        margin-left: 5%;
                        font-size: 16px;
                        font-weight: 700;
                        z-index: 34;
                        color: $mainTitleFontColor;
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