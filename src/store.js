import { defineStore } from 'pinia'
import student_half from '@/assets/student.json';
import student_half2 from '@/assets/student2.json';
export const PageData = defineStore('main', {
  state:()=>{
    return {
        studentList:[...student_half],
        avatarList:{},
        isShowUnpullable:false
    }
  },
  actions:{
    enableUnpullableStudent(){
        this.isShowUnpullable=true;
        localStorage.setItem("isup",1);
        this.studentList=this.studentList.concat(student_half2);
    },
    disableUnpullableStudent(){
        this.isShowUnpullable=false;
        localStorage.setItem("isup",0);
        this.studentList=student_half;
    },
    addToAvatarList(id,data){
      this.avatarList[id]=data;
    },
    pushCustomStudent(_sObj){
      this.studentList.push(_sObj)
    },
    changeBaseCustomedStudent(_sObj,lid,from=0){
      this.studentList[lid]["Name"]=_sObj["Name"];
      this.studentList[lid]["Avatar"][0]=_sObj["Avatar"][0];
      if(!from){
        localStorage.setItem(`${_sObj['Id']}_custom`,JSON.stringify(_sObj));
        const _t_cC=localStorage.getItem("createdChara");
        if(_t_cC==null){
          localStorage.setItem("createdChara",JSON.stringify([_sObj['Id']]));
        }else if(_t_cC.indexOf(_sObj['Id'])==-1){
          localStorage.setItem("createdChara",JSON.stringify([...JSON.parse(_t_cC),_sObj['Id']]))
        }
      }
    }
  }
})