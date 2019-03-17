import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

//Guy-Expensify-App
const FacebookLoginPage = () => (   
      <div className="App">
        <h1>LOGIN WITH FACEBOOK </h1>

      <FacebookLogin
        appId="Guy-Expensify-App" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={()=> {
          console.log(response);
        }}
      />
      </div>
    );  
    
export default FacebookLoginPage;