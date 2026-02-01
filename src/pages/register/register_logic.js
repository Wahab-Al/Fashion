import { useState } from "react"
import { useNavigate } from "react-router"

// to navigate into login page


// handle registeration process
const handleRegisterationFunc =  async (event)=> {
  // create user and save it in localStorage
  const [user, setUser] = useState({
    name: '', surname: '', email: '', password: '', city: '', zip: '', state: ''
  })
  const navigate = useNavigate()
  event.preventDefault()
  const isValidUser = Object.values(user).every(value => value.trim() !== '')
  if(isValidUser){
    setUser(isValidUser)
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/login')
  }else {
    console.log('invalid infos');
  }
}


export  { handleRegisterationFunc }

{/**

    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });

  // dialog:
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  
    Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });

  // Opps...:
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });

  // sure:
  Swal.fire({
    title: "The Internet?",
    text: "That thing is still around?",
    icon: "question"
  });


  <button data-swal-toast-template="#my-template">
    Trigger toast
  </button>
  Swal.bindClickHandler();
  Swal.mixin({
    toast: true
  }).bindClickHandler("data-swal-toast-template");
  */}