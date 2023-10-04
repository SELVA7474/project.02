const edit=document.querySelector('.edit');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');

registerlink.addEventListener('click',()=>{
    edit.classlist.add('active');
});
loginlink.addEventListener('click',()=>{
    edit.classlist.remove('active');
});
