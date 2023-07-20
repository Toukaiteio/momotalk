import { defineStore } from 'pinia'
import student_half from '@/assets/student.json';
import student_half2 from '@/assets/student2.json';
export const PageData = defineStore('main', {
  state:()=>{
    return {
        studentList:student_half,
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
    }
  }
})