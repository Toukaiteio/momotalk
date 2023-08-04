<template>
    <div class="_chatPage_Container" :class="{notShot:!PageState.isScreenShotting,shot:PageState.isScreenShotting}">
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
                    <div class="list_item" v-for="(item,index) in _PD.studentList" :key="index" :class="{selected:(index==PageState.onSelectIndex)}" @click="changeSelection(index)">
                        <div class="user_avatar"><img :src="_PD.avatarList[item.Id]" /></div>
                        <div class="user_detail">
                            <div class="user_name">{{item.Name}}</div>
                            <div class="user_lastchat">角色ID:{{index}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="_chatPage_ChatDetail_Wrapper">
            <div class="chat_ContentContainer"  v-if="PageState.onSelectIndex!=-1 && (typeof PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()] != 'undefined') ">
                <!-- target self nohead image statetext -->
                <div class="chat_BaseObject" v-for="(chatitem,chatindex) in PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()]" :key="chatindex"  :class="isNohead(chatitem.type,chatindex)">
                    <div v-if="chatitem.type.indexOf('self')==-1" class="userAvatar">
                        <img v-if="parseInt(chatitem.slIndex)>-1" :src="_PD.avatarList[PageState.onSelectStudentData.Id]">
                    </div>
                    <div class="userChatContent" v-if="chatitem.type.indexOf('image')==-1">
                        <div class="userName" v-if="chatitem.type.indexOf('self')==-1">{{_PD.studentList[parseInt(chatitem.slIndex)].Name}}</div>
                        <div class="Content">
                            <div class="decoration_triangle"></div>
                            <div class="chat_Context">{{ chatitem.content }}</div>
                        </div>
                    </div>
                    <div class="userImageContent" v-if="chatitem.type.indexOf('image')!=-1">
                        <div class="userName" v-if="chatitem.type.indexOf('self')==-1">{{_PD.studentList[parseInt(chatitem.slIndex)].Name}}</div>
                        
                        <div class="imageContainer">
                            <img :src="getImageContent(chatitem.content)">
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="ControlBar" v-show="PageState.isShowControlBar" v-if="PageState.onSelectIndex!=-1">
            <div class="_general_btn" @click="openCreator()">
                    为该角色创建对话
                </div>
            <div class="_general_btn" @click="_PD.enableUnpullableStudent" v-if="!_PD.isShowUnpullable">
                    开启未实装角色
            </div>
            <div class="_general_btn" @click="_PD.disableUnpullableStudent" v-else>
                    关闭未实装角色
            </div>
            <div class="_general_btn" @click="exportToImage()">
                    导出图片
            </div>
            <div class="_general_btn" @click="hideControlBar()">
                隐藏控制栏    
                <!-- 隐藏控制栏(双击此区域恢复显示) -->
            </div>
        </div>
        <div class="ControlBar" v-show="!PageState.isShowControlBar" @click="showControlBar()"></div>
        <div class="screenShotEl" :class="{notShot:!PageState.isScreenShotting,shot:PageState.isScreenShotting}" id="chatBox"  v-if="PageState.onSelectIndex!=-1 && (typeof PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()] != 'undefined')">
                <!-- target self nohead image statetext -->
                <div class="ads">由momotalk模拟器生成,项目地址:https://github.com/Toukaiteio/my_momotalk</div>
                <div class="chat_BaseObject" v-for="(chatitem,chatindex) in PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()]" :key="chatindex"  :class="isNohead(chatitem.type,chatindex)">
                    <div class="userAvatar" v-if="chatitem.type.indexOf('self')==-1">
                        <img v-if="parseInt(chatitem.slIndex)>-1" :src="_PD.avatarList[PageState.onSelectStudentData.Id]">
                    </div>
                    <div class="userChatContent" v-if="chatitem.type.indexOf('image')==-1">
                        <div class="userName" v-if="chatitem.type.indexOf('self')==-1">{{_PD.studentList[parseInt(chatitem.slIndex)].Name}}</div>
                        <div class="Content">
                            <div class="decoration_triangle"></div>
                            <div class="chat_Context">{{ chatitem.content }}</div>
                        </div>
                    </div>
                    <div class="userImageContent" v-if="chatitem.type.indexOf('image')!=-1">
                        <div class="userName" v-if="chatitem.type.indexOf('self')==-1">{{_PD.studentList[parseInt(chatitem.slIndex)].Name}}</div>
                        <div class="imageContainer">
                            <img :src="getImageContent(chatitem.content)">
                        </div>
                        
                    </div>
                </div>
            </div>
    </div>
    <div class="screenShotCover" v-if="PageState.isScreenShotting">
        图片生成中~
    </div>
    <div class="dialog_creator" v-if="PageState.isShowCreator">
        <div class="window_wrapper">
            <div class="header">
               <div>STORY-CREATOR</div>
               <div class="close" @click="()=>{PageState.isShowCreator=false;}"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
            </div>
            <div class="mainbox">
                <div class="inputer_wrapper">
                    <div class="inputer_block chat_detail" v-if="PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()]">
                        <div class="obj_container" v-for="(_item,_index) in PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()]" :key="_index" :class="{selected:_index==PageState.preChatOnSelected}" @click="hardChangeSelect(_index)">
                            <div class="bas_obj" :class="_item.type" v-if="_item.type.indexOf('image')==-1">{{_item.content}}</div> 
                            <div class="bas_obj" :class="_item.type" v-else>
                                [图片:{{_item.content}}]
                            </div> 
                        </div>
                        <!-- <div class="obj_container">
                            <div class="bas_obj self">#Self</div>    
                        </div> -->
                    </div>
                    <div class="inputer_block chat_detail" v-if="!PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()]">
                        尝试点击 【新建】 来创建一段对话吧~
                    </div>
                    <div class="inputer_block fun_btns">
                        <div class="_general_btn" @click="changeSelected(0)">
                            <div class="context">
                                选中上一个
                            </div>
                        </div>
                        <div class="_general_btn" @click="changeSelected(1)">
                            <div class="context">
                                选中下一个
                            </div>
                        </div>
                        <div class="_general_btn" @click="copyOnSelecting()">
                            <div class="context">
                                复制
                            </div>
                        </div>
                        <div class="_general_btn" @click="addOnSelecting()">
                            <div class="context">
                                新建
                            </div>
                        </div>
                        <div class="_general_btn" @click="deleteOnSelecting()">
                            <div class="context">
                                删除
                            </div>
                        </div>
                    </div>
                    <div class="inputer_block config">
                        <div class="inputer_item" v-if="PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected]">内容: <input type="text" v-model="PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].content" /> </div>
                        <div class="inputer_item" v-if="PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected]">类型: <input type="text" v-model="PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].type"/> </div>
                        <div class="inputer_item" v-if="PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected]">角色: <input type="text" v-model="PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].slIndex"/> </div>
                        <div class="inputer_item" v-if="PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected]">延迟: <input type="text" v-model="PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].delay"/> </div>
                        <input type="file" class="image_inputer" v-if="PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].type.indexOf('image')!=-1" @change="image_dragin"/>
                    </div>
                </div>
                <div class="btns">
                    <div class="_general_btn">
                        <div class="context" @click="confirmChat()">
                            确定
                        </div>
                    </div>
                    <div class="_general_btn" @click="chatReset();">
                        <div class="context">
                            重置
                        </div>
                    </div>
                    <div class="_general_btn" @click="()=>{PageState.isShowCreator=false;}">
                        <div class="context">
                            取消
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="mainbox">
                <div class="inputer">
                    <textarea placeholder="请输入对话代码" v-model="PageState.inputDialogData"></textarea>
                </div>
                <div class="btns">
                    <div class="_general_btn">
                        <div class="context">
                            添加
                        </div>
                    </div>
                    <div class="_general_btn">
                        <div class="context">
                            替换
                        </div>
                        </div>
                    <div class="_general_btn" @click="()=>{PageState.isShowCreator=false;}">
                        <div class="context">
                            取消
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        
    </div>

</template>
<script setup>
import { PageData } from '../store';
import { reactive } from 'vue';
import domToImage from 'dom-to-image';
const PageState=reactive({
    onSelectIndex:-1,
    onSelectStudentData:{},
    preChatFlow:{},
    preChatOnSelected:0,
    onChatFlow:{},
    isShowControlBar:true,
    isShowCreator:false,
    identity:false,
    mouseClickTimes:0,
    inputDialogData:'',
    unreadMessageNumberList:[],
    isScreenShotting:false,
});
const hardChangeSelect=(n)=>{
    if(n>=0 && n<PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()].length){
        PageState.preChatOnSelected=n;
    }
}

const changeSelected=(met)=>{
    if(met){
        if(PageState.preChatOnSelected+1<PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()].length){
            PageState.preChatOnSelected+=1;
        }
    }else{
        if(PageState.preChatOnSelected-1>=0){
            PageState.preChatOnSelected-=1;
        }
    }
    
}
const copyOnSelecting=()=>{
    const tempA=PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()].slice(0,PageState.preChatOnSelected+1);
    const tempB=PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()].slice(PageState.preChatOnSelected+1);
    PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()]=tempA.concat([{
        "type":PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].type,
        "content":PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].content,
        "sid":PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].sid,
        "slIndex":PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].slIndex,
        "delay":PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].delay,
    },...tempB]);
    changeSelected(1);
}
const deleteOnSelecting=()=>{
    const tempA=PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()].slice(0,PageState.preChatOnSelected);
    const tempB=PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()].slice(PageState.preChatOnSelected+1);
    PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()]=tempA.concat(tempB);
}
const addOnSelecting=()=>{
    const tempA=PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()].slice(0,PageState.preChatOnSelected+1);
    const tempB=PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()].slice(PageState.preChatOnSelected+1);
    PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()]=tempA.concat([{
        "type":"statetext",
        "content":"请在此处输入内容",
        "sid":PageState.onSelectStudentData.Id.toString(),
        "slIndex":PageState.onSelectIndex.toString(),
        "delay":"normal"
    },...tempB]);
    changeSelected(1);
}

const isNohead=(type,index)=>{
    if(index==0 || type.indexOf('self')!=-1 || type.indexOf('image')!=-1 || type.indexOf('statetext') != -1){
        return type;
    }else{
        if(PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()][index-1].type.indexOf('target')!=-1 && PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()][index].slIndex==PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()][index-1].slIndex && PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()][index-1].type.indexOf('image')==-1){
            return type+" nohead";
        }else{
            return type;
        }
    }
}
// const isAllowScreenShot=()=>{
//     // for(let i of PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()]){
//     //     if(i.type.indexOf('image')!=-1){
//     //         return false;
//     //     }
//     // }
//     // return true;
//     return false;
// }
const exportToImage=()=>{
    PageState.isScreenShotting=true;
    domToImage.toPng(document.getElementById('chatBox'))
    .then(function(dataUrl){
        const fileLink = document.createElement('a');
        fileLink.href = dataUrl;
        const nowtime=new Date();
        fileLink.setAttribute('download',"导出的图片-momotalk-github_Toukaiteio-ts_"+nowtime.getTime()+".png");
        document.body.appendChild(fileLink);
        fileLink.click();
        PageState.isScreenShotting=false;
    }).catch(function(){
        PageState.isScreenShotting=false;
        alert("创建图像失败，您有以下解决方案：\r\n1、请允许浏览器跨域(ALLOW CORS)\r\n2、使资源地址允许跨域访问\r\n3、删除图像消息");
    })
}
const chatReset=()=>{
    PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()]=[{
        "type":"statetext",
        "content":"请在此处输入内容",
        "sid":PageState.onSelectStudentData.Id.toString(),
        "slIndex":PageState.onSelectIndex.toString(),
        "delay":"normal"
    }]
}
const confirmChat=()=>{
    PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()]=[...PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()]];
    localStorage.setItem(PageState.onSelectStudentData.Id.toString(),JSON.stringify(PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()]));
    PageState.isShowCreator=false;
}
const _PD=PageData();
const changeSelection=(_i)=>{
    PageState.onSelectIndex=_i;
    PageState.onSelectStudentData=_PD.studentList[_i];
    if(localStorage.getItem(PageState.onSelectStudentData.Id.toString())==null){
        PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()]=[{
            "type":"statetext",
            "content":"请在此处输入内容",
            "sid":PageState.onSelectStudentData.Id.toString(),
            "slIndex":PageState.onSelectIndex.toString(),
            "delay":"normal"
        }]
        localStorage.setItem(PageState.onSelectStudentData.Id.toString(),JSON.stringify(PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()]))
    }else{
        try{
            PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()]=JSON.parse(localStorage.getItem(PageState.onSelectStudentData.Id.toString()))
        }catch(e){
            PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()]=[{
                "type":"statetext",
                "content":"请在此处输入内容",
                "sid":PageState.onSelectStudentData.Id.toString(),
                "slIndex":PageState.onSelectIndex.toString(),
                "delay":"normal"
            }]
        localStorage.setItem(PageState.onSelectStudentData.Id.toString(),JSON.stringify(PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()]))

        }
    }
    
    // console.log(PageState.onSelectIndex);
}
const openCreator=()=>{
    if(!PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()]){
        PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()]=[...PageState.onChatFlow[PageState.onSelectStudentData.Id.toString()]];
    }
    PageState.isShowCreator=true;
}
const hideControlBar=()=>{
    PageState.isShowControlBar=false;
}
const showControlBar=()=>{
    PageState.mouseClickTimes+=1
    if(PageState.mouseClickTimes>=2){
        PageState.isShowControlBar=true;
        PageState.mouseClickTimes=0;
    }else{
        setTimeout(()=>{PageState.mouseClickTimes=0},700);
    }
}
const getImageContent=(ori)=>{
    if(ori[0]=="#"){
        return localStorage.getItem(ori.replace("#",""));
    }else{
        return ori;
    }
}
const save_to_data_bucket=(size,content)=>{
    if(content.length<=5000000){
        const _type=content.split(";")[0].split(":")[1];
        const _bucket_id=size.toString()+"_"+_type;
        const _ck=localStorage.getItem(_bucket_id);
        if(_ck==null){
            localStorage.setItem(_bucket_id,content);
            PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].content=`#${_bucket_id}`
        }else{
            if(_ck!=content){
                let _counter=1;
                while(localStorage.getItem(_bucket_id+`_${_counter}`)!=null){
                    const _ck_sub=localStorage.getItem(_bucket_id+`_${_counter}`);
                    if(_ck_sub==content){
                        PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].content=`#${_bucket_id}_${_counter}`
                        _counter=-2;
                        break;
                    }
                    _counter+=1;
                }
                if(_counter>0){
                    localStorage.setItem(_bucket_id+`_${_counter}`,content);
                    PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].content=`#${_bucket_id}_${_counter}`
                }
            }else{
                PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()][PageState.preChatOnSelected].content=`#${_bucket_id}`
            }
        }
    }else{
        alert("图片过大!请尝试压缩图片或降低图片分辨率! :(")
    }
}
const image_dragin=(e)=>{
    // console.log(e);
    const _file=e.target.files[0];
    const _tFR=new FileReader();
    _tFR.readAsDataURL(_file);
    _tFR.onload=(E)=>{
        save_to_data_bucket(E.total,E.target.result);
        // PageState.preChatFlow[PageState.onSelectStudentData.Id.toString()].content=
    }
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
$chatBubbleTargetBgColor:#4C5B6F;
$chatBubbleSelfBgColor:#4A8ACA;
$chatFontColor:#F4F5F6;
$creatorCoverBgColor:#f3f7f836;
$windowBarBgColor:#FC8DA2;
$titleFontColor:#FFFFFF;
.screenShotCover{
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: $creatorCoverBgColor;
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    color: $mainTitleFontColor;
}
.dialog_creator{
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: $creatorCoverBgColor;
    backdrop-filter: blur(3px);
    padding: 64px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .window_wrapper{
        height: 100%;
        width: 900px;
        background-color: $mainBoxBgColorLeft;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: 64px;
            background-color: $windowBarBgColor;
            display: flex;
            align-items: center;
            color: $titleFontColor;
            padding: 12px;
            padding-left: 24px;
            padding-right: 24px;
            box-sizing: border-box;
            filter: drop-shadow(0px 0px 2px $titleFontColor);
            user-select: none;
            font-size: 33px;
            font-weight: bolder;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            svg{
                fill: $titleFontColor;
            }
            .close{
                flex: 1;
                width: 0;
                margin-top: 6px;
                font-size: 44px;
                font-weight: bolder;
                width: 20%;
                text-align: right;
                color: inherit;
            }
        }
        .mainbox{
            flex:1;
            height: 0;
            width: 100%;
            padding: 16px;
            box-sizing: border-box;
            overflow-y: hidden;
            .inputer_wrapper{
                width: 100%;
                height: 85%;
                display: flex;
                justify-content: space-between;
                .inputer_block{
                    width: 33%;
                    height: 100%;
                    border: 1px solid black;
                }
                .fun_btns{
                    padding-left: 16px;
                    padding-right: 16px;
                    box-sizing: border-box;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    ._general_btn{
                        padding-left: 16px;
                        padding-right: 16px;
                        box-sizing: border-box;
                    }
                    .context{
                        transform: skewX(-12px);
                        color: $mainTitleFontColor;
                        font-size: 20px;
                    }
                }
                .config{
                    padding: 8px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    .inputer_item{
                        height: 22px;
                        width: 100%;
                        display: flex;
                        input{
                            flex: 1;
                            width: 0;
                            height: 100%;
                        }
                        margin-bottom: 6px;
                    }
                    .image_inputer{
                        flex: 1;
                        width: 100%;
                        height: 0;
                        border: 3px dashed gray;
                        
                        position: relative;
                    }
                    .image_inputer::after{
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 22px;
                        content: "也可拖拽至此上传~";
                    }
                }
                
                .fun_btns::-webkit-scrollbar,.chat_detail::-webkit-scrollbar{
                    display: none;
                }
                .chat_detail{
                    overflow-x: hidden;
                    overflow-y: scroll;
                    .obj_container{
                        height: 32px;
                        width: 100%;
                    }
                    .obj_container.selected{
                        background-color: $windowBarBgColor;
                    }
                    .bas_obj.target{
                        padding-left: 8px;
                        padding-right: 26px;
                        background-color: $chatBubbleTargetBgColor;
                        color: $chatFontColor;
                        float: left;
                    }
                    .bas_obj.self{
                        padding-right: 8px;
                        padding-left: 26px;
                        background-color: $chatBubbleSelfBgColor;
                        color: $chatFontColor;
                        float: right;
                    }
                    .bas_obj.statetext{
                        width: 100%;
                        text-align: center;
                        color: $mainTitleFontColor;
                    }
                    .bas_obj{
                        // width: 100%;
                        height: 32px;
                        line-height: 32px;
                        vertical-align: middle;
                        border-radius: 4px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: keep-all;
                        white-space: nowrap;
                        box-sizing: border-box;
                    }
                }
            }
            .inputer{
                height: 85%;
                width: 100%;
                border-radius: 8px;
                overflow: hidden;
                border: 1px solid gray;
                textarea{
                    height: 100%;
                    width: 100%;
                    outline: none;
                    border: none;
                    font-size: 14px;
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    padding: 8px;
                    box-sizing: border-box;
                    background-color: litghten($mainBoxBgColorLeft);
                }
            }
            .btns{
                height: 15%;
                width: 100%;
                display: inline-flex;
                justify-content: space-evenly;
                padding: 12px;
                box-sizing: border-box;
                ._general_btn{
                    padding-left: 16px;
                    padding-right: 16px;
                    box-sizing: border-box;
                }
                .context{
                    transform: skewX(-12px);
                    color: $mainTitleFontColor;
                    font-size: 20px;

                }
            }
        }
    }
    // background-color: #2BC5FE;
}
._chatPage_Container.notShot{
    overflow: hidden;
}
._chatPage_Container.shot{
    overflow: visible;
}
._chatPage_Container{
    width: 100%;
    height: 100%;
    display: inline-flex;
    position: relative;
    
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
            .list_wrapper::-webkit-scrollbar{
                display: none;
            }
            .list_wrapper{
                height: 100%;
                width: 100%;
                overflow-y: scroll;
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
                            word-break: keep-all;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            padding-bottom: 2px;
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
            background-color: $mainBoxBgColorRight;
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
                    height: 65px;
                    width: 65px;
                    border-radius: 65px;
                    overflow: hidden;
                    img{
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }
                }
                .userImageContent{
                    margin-left: 8px;
                    display: none;
                    .imageContainer{
                        height: 280px;
                        width: 280px;
                        padding: 12px;
                        box-sizing: border-box;
                        border-radius: 12px;
                        border: 1px solid lightgray;
                        background-color: #FEFEFE;
                        overflow: hidden;
                        img{
                            height: 100%;
                            width: 100%;
                            object-fit: contain;
                            border: 1px solid rgb(240, 240, 240);
                            border-radius: 8px;
                            overflow: hidden;
                        }
                    }
                    .userName{
                            width: 100%;
                            color: $mainTitleFontColor;
                            font-size: 20px;
                            font-weight: 700;
                    }
                }
                .userChatContent{
                    flex: 1;
                    width: 0;
                    .userName{
                            width: 100%;
                            color: $mainTitleFontColor;
                            font-size: 20px;
                            font-weight: 700;
                    }
                    .Content{
                        width: 100%;
                        font-size: 22px;
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
                            padding: 12px;
                            padding-top: 6px !important;
                            padding-bottom: 6px !important;
                            box-sizing: border-box;
                            word-break: break-all;
                        }
                    }
                }
            }
            .chat_BaseObject.nohead{
                margin-top: 6px !important;
                .userAvatar{
                display: none;
            }
            .userChatContent{
                margin-left: 65px;
                .userName{
                    display: none;
                }
            }
                .decoration_triangle{
                    opacity: 0;
                }
            }
            .chat_BaseObject.statetext{
                .userAvatar{
                    display: none;
                }
                .userChatContent{
                    .userName{
                        display: none;
                    }
                    .chat_Context{
                        width: 100%;
                        text-align: center;
                        font-size: 24px;
                        font-weight: 600;
                        color: $chatBubbleTargetBgColor;
                        word-break: break-all;
                        padding-left: 32px;
                        padding-right: 32px;
                        box-sizing: border-box;
                        }
                }
                
            }
            .chat_BaseObject.image{
                .chat_Context,.decoration_triangle{
                    display: none;
                }
                .userImageContent{
                    display: initial;
                }
            }
            .chat_BaseObject.image.cover{
                .userImageContent{
                    .imageContainer{
                        img{
                            object-fit: cover;
                        }
                    }
                }
            }
            .chat_BaseObject.image.fit{
                .userImageContent{
                    .imageContainer{
                        img{
                            object-fit:contain;
                        }
                    }
                }
            }
            .chat_BaseObject.image.fill{
                .userImageContent{
                    .imageContainer{
                        img{
                            object-fit: fill;
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
                            padding: 12px;
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
                            padding: 12px;
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
    .ControlBar{
        position: absolute;
        width: 50%;
        right: 0;
        bottom: 0;
        height: 60px;
        padding: 6px;
        padding-left: 12px;
        padding-right: 12px;
        box-sizing: border-box;
        background-color: transparent;
        color: $mainTitleFontColor !important;
        display: inline-flex;
        justify-content: space-evenly;
    }
    .screenShotEl.notShot{
        position: absolute;
        top: 5000px;
        left: -5000px;
    }
    .screenShotEl.shot{
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .screenShotEl{
        
        background-color: $mainBoxBgColorRight;
        width: 650px;
        height: fit-content;
        .ads{
            word-break: break-all;
            word-wrap: break-word;
            color: white;
            filter: drop-shadow(0px 0px 2px lightgray);
        }
        .chat_BaseObject{
            background-color: $mainBoxBgColorRight;
            margin-top: 22px;
            // height: 135px;
            display: flex;
            width: 100%;
            // background-color: #2BC5FE;
            .userAvatar{
                height: 65px;
                width: 65px;
                border-radius: 65px;
                overflow: hidden;
                img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
            .userImageContent{
                    margin-left: 8px;
                    display: none;
                    .imageContainer{
                        height: 280px;
                        width: 280px;
                        padding: 12px;
                        box-sizing: border-box;
                        border-radius: 12px;
                        border: 1px solid lightgray;
                        background-color: #FEFEFE;
                        overflow: hidden;
                        img{
                            height: 100%;
                            width: 100%;
                            object-fit: contain;
                            border: 1px solid rgb(240, 240, 240);
                            border-radius: 8px;
                            overflow: hidden;
                        }
                    }
                    .userName{
                            width: 100%;
                            color: $mainTitleFontColor;
                            font-size: 20px;
                            font-weight: 700;
                    }
                }
            .userChatContent{

                flex: 1;
                width: 0;
                .userName{
                        width: 100%;
                        color: $mainTitleFontColor;
                        font-size: 20px;
                        font-weight: 700;
                }
                .Content{
                    width: 100%;
                    font-size: 22px;
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
                        padding: 12px;
                        padding-top: 6px !important;
                        padding-bottom: 6px !important;
                        box-sizing: border-box;
                        word-break: break-all;
                    }
                }
            }
        }
        .chat_BaseObject.nohead{
            margin-top: 12px !important;
            .userAvatar{
                display: none;
            }
            .userChatContent{
                margin-left: 65px;
                .userName{
                    display: none;
                }
            }
            .decoration_triangle{
                opacity: 0;
            }
        }
        .chat_BaseObject.statetext{
            .userAvatar{
                display: none;
            }
            .userChatContent{
                .userName{
                    display: none;
                }
                .chat_Context{
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                    font-weight: 600;
                    color: $chatBubbleTargetBgColor;
                    word-break: break-all;
                    padding-left: 32px;
                    padding-right: 32px;
                    box-sizing: border-box;
                    }
            }
            
        }
        .chat_BaseObject.image{
            .chat_Context,.decoration_triangle{
                display: none;
            }
            .userImageContent{
                display: initial;
            }
        }
        .chat_BaseObject.image.cover{
                .userImageContent{
                    .imageContainer{
                        img{
                            object-fit: cover;
                        }
                    }
                }
            }
            .chat_BaseObject.image.fit{
                .userImageContent{
                    .imageContainer{
                        img{
                            object-fit:contain;
                        }
                    }
                }
            }
            .chat_BaseObject.image.fill{
                .userImageContent{
                    .imageContainer{
                        img{
                            object-fit: fill;
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
                        padding: 12px;
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
                        padding: 12px;
                        box-sizing: border-box;
                        word-break: break-all;
                    }
            }
        }
        }
}
</style>