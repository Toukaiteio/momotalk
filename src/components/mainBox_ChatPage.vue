<template>
    <div class="_chatPage_Container">
        <div class="_chatPage_Main_Wrapper">
            <div class="Main_header">
                <div class="item_left">未读消息(0)</div>
                <div class="item_right">
                    <div class="_general_btn">
                        <div class="unread">
                            <div class="context">
                                未读
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
                            <div class="user_lastchat">#userlastchat</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="_chatPage_ChatDetail_Wrapper">
            <div class="chat_ContentContainer">
                <div class="chat_BaseObject target">
                    <div class="userAvatar">
                        <img src="../assets/temp_placeHolder_1.png">
                    </div>
                    <div class="userChatContent">
                        <div class="userName">#userName</div>
                        <div class="Content">
                            <div class="decoration_triangle"></div>
                            <div class="chat_Context">#chatContext#chatContext#chatContext#chatContext#chatContext#chatContext#chatContext#chatContext#chatContext#chatContext#chatContext</div>
                        </div>
                    </div>
                </div>
                <div class="chat_BaseObject self">
                    <div class="userAvatar">
                        <img src="../assets/temp_placeHolder_1.png">
                    </div>
                    <div class="userChatContent">
                        <div class="userName">#userName</div>
                        <div class="Content">
                            <div class="decoration_triangle"></div>
                            <div class="chat_Context">#chatContext#chatContext#chatContext#chatContext#chatContext#chatContext#chatContext#chatContext#chatContext#chatContext#chatContext</div>
                        </div>
                    </div>
                </div>
                <div class="chat_BaseObject self">
                    <div class="userAvatar">
                        <img src="../assets/temp_placeHolder_1.png">
                    </div>
                    <div class="userChatContent">
                        <div class="userName">#userName</div>
                        <div class="Content">
                            <div class="decoration_triangle"></div>
                            <div class="chat_Context">#chatContext#chaxt</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$mainBoxBgColorLeft:#F3F7F8;
$mainBoxBgColorRight:#FFFFFF;
$mainTitleFontColor:#50555A;
$mainSubTitleFontColor:#9CA5AB;
$mainInsertBgColor:#E5F0F8;
$mainListActiveColor:#DAE5E9;
$decorationColor:#496F8F;
$insertDecorationColor:#2BC5FE;
$chatBubbleTargetBgColor:#4C5B6F;
$chatBubbleSelfBgColor:#4A8ACA;
$chatFontColor:#F4F5F6;
._chatPage_Container{
    width: 100%;
    height: 100%;
    display: inline-flex;
    ._chatPage_Main_Wrapper,._chatPage_ChatDetail_Wrapper{
        width: 50%;
        height: 100%;
    }
    ._chatPage_Main_Wrapper{
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
                .unread{
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
                .unread::before{
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
                        .user_lastchat{
                            height: 40%;
                            width: 100%;
                            font-size: 19px;
                            font-weight: 600;
                            color: $mainSubTitleFontColor;
                        }
                    }
                }
            }
        }
    }
    ._chatPage_ChatDetail_Wrapper{
        background-color: $mainBoxBgColorRight;
        box-sizing: border-box;
        padding-left: 12px;
        padding-right: 12px;
        .chat_ContentContainer{
            height: 100%;
            width: 100%;
            padding-top: 12px;
            padding-bottom: 12px;
            box-sizing: border-box;
            overflow-y: scroll;
            .chat_BaseObject{
                margin-top: 22px;
                // height: 135px;
                display: flex;
                width: 100%;
                // background-color: #2BC5FE;
                .userAvatar{
                    height: 75px;
                    width: 75px;
                    border-radius: 75px;
                    overflow: hidden;
                    img{
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }
                }
                .userChatContent{
                    flex: 1;
                    width: 0;
                    .userName{
                            width: 100%;
                            color: $mainTitleFontColor;
                            font-size: 24px;
                            font-weight: 700;
                    }
                    .Content{
                        width: 100%;
                        font-size: 24px;
                        color: $chatFontColor;
                        position: relative;
                        display: flex;
                        box-sizing: border-box;
                        .decoration_triangle{
                            position: absolute;
                            width: 0;
                            height: 0;
                            top: 12px;
                            
                        }
                        .chat_Context{
                            // flex: 1;
                            // width: 0;
                            
                            border-radius: 12px;
                            padding: 6px;
                            box-sizing: border-box;
                            word-break: break-all;
                        }
                    }
                }
            }
            .chat_BaseObject.target{
                .userChatContent{
                    
                    .userName{
                        padding-left: 7px;
                        box-sizing: border-box;
                        text-align: left;
                    }
                }
                .Content{
                    // text-align: right;
                    padding-left: 8px;
                    padding-right: 24px;
                    .decoration_triangle{
                            left: -4px;
                            border:12px solid $chatBubbleTargetBgColor;
                            border-bottom:4px solid transparent;
                            border-top:4px solid transparent;
                            border-left:1px solid transparent;
                        }
                        .chat_Context{
                            background-color: $chatBubbleTargetBgColor;
                            border-radius: 12px;
                            padding: 6px;
                            box-sizing: border-box;
                            word-break: break-all;
                        }
                }
            }
            .chat_BaseObject.self{
                flex-direction: row-reverse;
                .userAvatar{
                    display: none;
                }
                .userChatContent{
                    .userName{
                        display: none;
                        // padding-right: 7px;
                        // box-sizing: border-box;
                        // text-align: right;
                    }
                }
                
                .Content{
                    padding-right: 8px;
                    padding-left: 24px;
                    flex-direction: row-reverse;
                    // text-align: right;
                    .decoration_triangle{
                            position: absolute;
                            width: 0;
                            height: 0;
                            top: 12px;
                            right: -4px;
                            border:12px solid $chatBubbleSelfBgColor;
                            border-bottom:4px solid transparent;
                            border-top:4px solid transparent;
                            border-right:1px solid transparent;
                            border-left: 12px solid $chatBubbleSelfBgColor;
                        }
                        .chat_Context{
                            background-color: $chatBubbleSelfBgColor;
                            border-radius: 12px;
                            padding: 6px;
                            box-sizing: border-box;
                            word-break: break-all;
                        }
                }
            }
        }
        .chat_ContentContainer::-webkit-scrollbar{
            display: none;
        }
        
    }
}
</style>