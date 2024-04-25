import { AbstractControl } from "@angular/forms"

export const PasswordMatchValidator = (passwordControlName:string,confirmPasswordControlName:string )=>{

   const Validator = (form:AbstractControl) =>{
      const passwordControl = form.get(passwordControlName)
      const confirmPasswordControl = form.get(confirmPasswordControlName)

      if(!passwordControl || !confirmPasswordControl) return
      if(passwordControl.value !== confirmPasswordControl.value){
         confirmPasswordControl.setErrors({notmatch:true});
      }else{
         const error = confirmPasswordControl.errors
         if(!error) return;

         delete error.notmatch;
         confirmPasswordControl.setErrors(error);
      }

   }
   return Validator
}