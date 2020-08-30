<template>
  <b-container fluid class="contact-container" id="contact">
    <b-row class="contact-container__row d-flex justify-content-center align-items-center">
      <b-col
        class="contact-form-wrapper d-flex flex-column justify-content-center align-items-center"
        md="8"
        xl="6"
      >
        <h1>Feel free to contact me</h1>
        <form
          class="contact-form-main d-flex flex-column justify-content-center align-items-center"
          v-on:submit.prevent
        >
          <div class="contact-form-input">
            <input type="text" placeholder="E-mail" v-model="email"/>
            <div class="input-error d-flex justify-content-center align-items-center" v-if="errorAlert.email != ''">
              <span>{{errorAlert.email}}</span>
            </div>
          </div>
          <div class="contact-form-input">
            <input type="text" placeholder="Topic" v-model="topic"/>
          </div>
          <div class="contact-form-input">
            <textarea name id cols="30" rows="10" placeholder="Message" v-model="message"></textarea>
            <div class="input-error d-flex justify-content-center align-items-center" v-if="errorAlert.message != ''">
              <span>{{errorAlert.message}}</span>
            </div>
          </div>
          <button
            class="contact-send-message d-flex justify-content-around align-items-center"
            @click="submitEmail()"
            :disabled="sendingEmail || allowSend==false"
          >
            <span>Send message</span>
            <b-spinner class="spinner" v-if="sendingEmail"></b-spinner>
          </button>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.contact-container {
  background: linear-gradient(
      180deg,
      rgba(34, 47, 62, 0.9) 0%,
      rgba(34, 47, 62, 0.9) 100%
    ),
    url("../../assets/img/damian-zaleski-RYyr-k3Ysqg-unsplash.jpg") no-repeat
      center center;
  background-size: cover;
  .contact-container__row {
    height: 100%;
    .contact-form-wrapper {
      padding: 20px;
      h1 {
        color: white;
        text-align: center;
      }
      .contact-form-main {
        width: 100%;
        height: 500px;
        .contact-form-input {
          width: 250px;
          input,
          textarea {
            width: 100%;
            margin-bottom: 20px;
            border: 1px solid #707070;
            text-align: center;
            outline: 0;
            &::placeholder {
              color: #c43a30;
              font-weight: 500;
            }
            &:focus{
              border: 1px solid white;
              background-color: transparent;
              color: white;
              &::placeholder{
                color: white;
              }
            }
          }
          input {
            height: 50px;
            border-radius: 30px;
          }
          textarea{
            resize: none;
          }
          .input-error{
            width: 100%;
            margin-bottom: 20px;
            span{
              color: white;
              font-size: 14px;
            }
          }
        }
        .contact-send-message {
          outline: 0;
          background-color: #c43a30;
          border: 1px solid black;
          color: white;
          border-radius: 30px;
          transition: all 0.5s cubic-bezier(0.36, 1.36, 0.64, 0.79);
          &:hover {
            color: black;
            background-color: white;
          }
          &:disabled{
            background-image: linear-gradient(
              180deg,
                rgba(34, 47, 62, 0.9) 0%,
                rgba(34, 47, 62, 0.9) 100%
              );
          }
          .spinner{
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 320px) {
    height: 700px;
    .contact-container__row {
      .contact-form-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 0;
        h1 {
          font-size: 2rem;
        }
        .contact-form-main {
          .contact-form-input {
            width: 250px;
            input,
            textarea {
              width: 100%;
              margin-bottom: 20px;
            }
            input {
              height: 40px;
            }
          }
          .contact-send-message {
            width: 150px;
            height: 40px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 400px) {
    height: 800px;
    .contact-container__row {
      .contact-form-wrapper {
        .contact-form-main {
          .contact-form-input {
            width: 320px;
            input,
            textarea {
              width: 100%;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    height: 800px;
    .contact-container__row {
      .contact-form-wrapper {
        width: auto;
        height: 600px;
        border-radius: 50px;
        .contact-form-main {
          .contact-form-input {
            width: 320px;
            input,
            textarea {
              width: 100%;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    height: 100vh;
    .contact-container__row {
      .contact-form-wrapper {
        width: auto;
        height: auto;
        border-radius: 50px;
        h1 {
          font-size: 2.5rem;
        }
        .contact-form-main {
          .contact-form-input {
            width: 500px;
            input,
            textarea {
              width: 100%;
              margin-bottom: 20px;
            }
            input {
              height: 50px;
            }
          }
          .contact-send-message {
            width: 200px;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      sendingEmail: false,
      email: "",
      topic: "",
      message: "",
      errorAlert: {
        email: "",
        message: ""
      },
      successMessage: "",
      errorMessage: ""
    };
  },

  watch: {
    email: function(email) {
      let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!email.match(regex)) {
        this.errorAlert.email = "Please enter valid email";
      } else {
        this.errorAlert.email = "";
      }
    },

    message: function(message) {
      if (message == "") {
        this.errorAlert.message = "Message cannot be empty";
      } else {
        this.errorAlert.message = "";
      }
    }
  },

  computed: {
    allowSend: function(){
      let allow = false;
      ((this.email == "" || this.errorAlert.email != "") || (this.errorAlert.message != "" || this.message == "")) ? allow = false : allow = true;

      return allow;
    }
  },

  methods: {
    submitEmail: async function() {
      this.sendingEmail = !this.sendingEmail;
    
      let data = {
        from: this.email,
        subject: this.topic,
        message: this.message
      };

      await axios.post("/email", data).then(
        (response) => {
          this.successMessage = response.data.success;
        }
      ).catch(
        (error) => {
          this.errorMessage = error.response.error;
        }
      ).finally(
        () => {
          this.sendingEmail = !this.sendingEmail;
        }
      );

    }
  }
};
</script>