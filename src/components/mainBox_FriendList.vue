<template>
    <div class="_friendList_container">
        <div class="_frinedList_Main_Wrapper">
            <div class="Main_header">
                <div class="item_left">学生({{_PD.studentList.length}})</div>
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
                    <div class="list_item" v-for="(item,index) in _PD.studentList" :key="index" :class="{selected:(index==PageState.onSelectIndex)}" @click="changeSelection(index)">
                        <div class="user_avatar"><img :src="item.Avatar[0]" /></div>
                        <div class="user_detail">
                            <div class="user_name">{{item.Name}}</div>
                            <div class="user_intro">{{item.Bio}}</div>
                        </div>
                        <div class="user_relation_lvl"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                            <div class="font_front">12</div><div class="font_back">12</div></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="_frinedList_FriendDetail_Wrapper">
            <div class="detail_container" v-if="PageState.onSelectIndex!=-1">
                <div class="detail_UserAvatar">
                    <div class="avatar_container">
                        <img :src="PageState.onSelectStudentData.Avatar[0]">
                        <div class="user_relation_lvl"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg><div class="font_front">12</div><div class="font_back">12</div></div>
                    </div>
                    
                    <div class="user_name">{{ PageState.onSelectStudentData.Name}}</div>
                    <div class="user_intro">{{PageState.onSelectStudentData.Student}}</div>
                    <div class="user_birthday"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c-35.3 0-64 28.7-64 64v71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1 0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4l0 0 0 0 .1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8l0 0 0 0 0 0 .1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9V288c0-35.3-28.7-64-64-64V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H256V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H128V176zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V394.6z"/></svg>
                        {{PageState.onSelectStudentData.Birthday}}
                    </div>
                </div>
                <div class="detail_effect_form" :style="{'display':(PageState.isShowBlankForm?'block':'none')}">
                    <div class="outline">
                        Certenly I cant fill this form in right now.
                        <div class="divider"></div>
                        So I'll left it blank. :) <div> [Click This Block Could Hide this] </div>
                    </div>
                </div>
            </div>
            <div class="detail_contianer" style="display: none;">
                <!-- none select -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { PageData } from '../store'
// console.log(studentList);
const PageState=reactive({
    isShowBlankForm:false,
    onSelectIndex:-1,
    onSelectStudentData:{},
})
const _PD=PageData();
const changeSelection=(_i)=>{
    PageState.onSelectIndex=_i;
    PageState.onSelectStudentData=_PD.studentList[_i];
    // console.log(PageState.onSelectIndex);
}
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
$BirthDayFontColor:#6F8897;
$BirthDayOutLineColor:#BECFD8;
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
                overflow-y: scroll;
                .list_item.selected{
                    background-color: $mainListActiveColor !important;
                }
                .list_item{
                    height: 80px;
                    width: 100%;
                    padding: 8px;
                    padding-top: 6px;
                    padding-bottom: 6px;
                    box-sizing: border-box;
                    background-color: $mainBoxBgColorLeft;
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
                            word-break: keep-all;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            color: $mainSubTitleFontColor;
                            padding-bottom: 2px;
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
                    .font_front{
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
                    .font_back{
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
            .list_wrapper::-webkit-scrollbar{
                display: none;
            }
        }
    }
    ._frinedList_FriendDetail_Wrapper{
        background-color: $mainBoxBgColorRight;
        padding: 18px;
        box-sizing: border-box;
        .detail_container{
            height: 100%;
            width: 100%;
            overflow-y: scroll;
            .detail_UserAvatar{
                height: 45%;
                min-height: 200px;
                max-height: 270px;
                width: 100%;
                // background-color: lightgreen;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .user_name{
                    width: 100%;
                    text-align: center;
                    color: $mainTitleFontColor;
                    font-size: 24px;
                    font-weight: 700;
                }
                .user_intro{
                    width: 100%;
                    font-size: 19px;
                    font-weight: 600;
                    text-align: center;
                    color: $mainSubTitleFontColor;
                }
                .avatar_container{
                    position: relative;
                    height: 135px;
                    width: 135px;
                    img{
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                        overflow: hidden;
                    }
                    .user_relation_lvl{
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        // transform: translateY(10%) translateX(10%);
                        // aspect-ratio: 1.2 / 1;
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
                    .font_front{
                            display: block;
                            position: absolute;
                            width: 26px;
                            height: 26px;
                            font-size: 18px;
                            font-weight: 700;
                            margin-left: 2%;
                            z-index: 33;
                            color:$mainBoxBgColorLeft;
                        }
                    .font_back{
                        display: block;
                        position: absolute;
                        width: 24px;
                        height: 24px;
                        margin-left: 2%;
                        font-size: 16px;
                        font-weight: 700;
                        z-index: 34;
                        color: $mainTitleFontColor;
                    }
                }
                .user_birthday{
                    height: 20px;
                    font-size: 16px;
                    font-weight: 800;
                    color: $BirthDayFontColor;
                    svg{
                        fill: $BirthDayFontColor;
                    }
                    padding: 2px;
                    line-height: 22px;
                    vertical-align: middle;
                    padding-left: 12px;
                    padding-right: 12px;
                    text-align: center;
                    border-radius: 22px;
                    border: 2px solid $BirthDayOutLineColor;
                }
                
            }
            .detail_effect_form{
                padding: 4px;
                box-sizing: border-box;
                .outline{
                    height: 300px;
                    width: 100%;
                    border: 1px solid $decorationColor;
                    border-radius: 12px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    .divider{
                        height: 1px;
                        width: 100%;
                        border-bottom: 1px solid $decorationColor;
                    }
                }
            }
        }
        .detail_container::-webkit-scrollbar{
            display: none;
        }
    }
}
</style>