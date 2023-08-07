import { defineStore } from 'pinia'
import student_half from '@/assets/student.json';
import student_half2 from '@/assets/student2.json';
export const PageData = defineStore('main', {
  state:()=>{
    return {
        studentList:(()=>{
            const _t_stl={};
            for(let i of student_half){
              _t_stl[i.Id]=i;
            }
            for(let i of student_half2){
              _t_stl[i.Id]=i;
            }
            return _t_stl;
          })()
        ,
        isDBReady:false,
        indexedDBTarget:null,
        avatarList:{},
        isShowUnpullable:false,
        imageResource:{}
    }
  },
  actions:{
    // enableUnpullableStudent(){
    //     this.isShowUnpullable=true;
    //     localStorage.setItem("isup",1);
    //     this.studentList=this.studentList.concat(student_half2);
    // },
    // disableUnpullableStudent(){
    //     this.isShowUnpullable=false;
    //     localStorage.setItem("isup",0);
    //     this.studentList=student_half;
    // },
    image_attach(key,content){
      this.imageResource[key]=content;
    },
    store_init(){
      const request = indexedDB.open("imageDatas", 1);
      request.onupgradeneeded = (event) => {
        if(!this.isDBReady){
          const db = event.target.result;
          db.createObjectStore("Images", { keyPath: "id" });
          this.isDBReady=true;
          this.indexedDBTarget=db;
        }
      };
      request.onsuccess=(event)=>{
        if(!this.isDBReady){
          this.isDBReady=true;
          this.indexedDBTarget=event.target.result;
        }
      }
    },
    DBStorage_setItem(key,value){
      const transaction = this.indexedDBTarget.transaction("Images", "readwrite");
      const objectStore = transaction.objectStore("Images");
      const imageObj = { id: key, imageData: value };
      objectStore.add(imageObj);
    },
    DBStorage_updateItem(key,value){
      const transaction = this.indexedDBTarget.transaction("Images", "readwrite");
      const objectStore = transaction.objectStore("Images");
      const imageObj = { id: key, imageData: value };
      objectStore.put(imageObj);
    },
    DBStorage_getItem(key,callBack){
      const transaction = this.indexedDBTarget.transaction("Images", "readonly");
      const objectStore = transaction.objectStore("Images");
      const getUserRequest = objectStore.get(key);
      getUserRequest.onsuccess=()=>{
        callBack(getUserRequest.result);
      }
    },
    DBStorage_removeItem(key){
      const transaction = this.indexedDBTarget.transaction("Images", "readwrite");
      const objectStore = transaction.objectStore("Images");
      objectStore.delete(key);
    },
    addToAvatarList(id,data){
      this.avatarList[id]=data;
    },
    pushCustomStudent(_sObj){
      this.studentList[_sObj['Id']]=_sObj;
    },
    changeBaseCustomedStudent(_sObj,lid,from=0){
      this.studentList[lid]["Name"]=_sObj["Name"];
      this.studentList[lid]["Avatar"][0]=_sObj["Avatar"][0];
      this.avatarList[lid]=_sObj["Avatar"][0];
      if(!from){
        localStorage.setItem(`${_sObj['Id']}_custom`,JSON.stringify(_sObj));
        // const _t_cC=localStorage.getItem("createdChara");
        // if(_t_cC==null){
        //   localStorage.setItem("createdChara",JSON.stringify([_sObj['Id']]));
        // }else if(_t_cC.indexOf(_sObj['Id'])==-1){
        //   localStorage.setItem("createdChara",JSON.stringify([...JSON.parse(_t_cC),_sObj['Id']]))
        // }
      }
    }
  }
})