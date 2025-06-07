const input = document.getElementById("password");
      const msg = document.getElementById("message");
      const stregth = document.getElementById("stregth");

      input.addEventListener("input", () => {
        if (input.value.length > 0) {
          msg.classList.remove("hidden");
          if (input.value.length > 0 && input.value.length <= 4) {
            //For Message Styling
            msg.classList.remove("text-yellow-400");
            msg.classList.remove("text-green-400");
            msg.classList.add("text-red-400");
            stregth.innerText = " Weak";
            //for Input box Styling
            input.classList.remove("border-yellow-400");
            input.classList.remove("border-green-400");
            input.classList.add("border-red-400");
          } else if (input.value.length > 4 && input.value.length <= 8) {
            //For Message Styling
            msg.classList.remove("text-red-400");
            msg.classList.remove("text-green-400");
            msg.classList.add("text-yellow-400");
            stregth.innerText = " Medium";
            //for Input box Styling
            input.classList.remove("border-red-400");
            input.classList.remove("border-green-400");
            input.classList.add("border-yellow-400");
          } else if (input.value.length > 8) {
            //For Message Styling
            msg.classList.remove("text-yellow-400");
            msg.classList.remove("text-red-400");
            msg.classList.add("text-green-400");
            stregth.innerText = " Strong";
            //for Input box Styling
            input.classList.remove("border-yellow-400");
            input.classList.remove("border-green-400");
            input.classList.add("border-green-400");
          }
        } else {
          msg.classList.add("hidden");
        }
      });