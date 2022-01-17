<div align="center">
  <a href="https://plusauth.com/">
    <img src="https://docs.plusauth.com/images/pa-white.svg" alt="Logo" width="320" height="72" >
  </a>
</div>

<h1 align="center">PlusAuth Angular Starter Project</h1>

 <p align="center">
    Simple Angular project demonstrates basic authentication flows with PlusAuth
    <br />
    <br />
    <a href="https://docs.plusauth.com/quickStart/spa/angular" target="_blank"><strong>Explore the PlusAuth Angular docs »</strong></a>
</p>

<details>
  <summary>Table of Contents</summary>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#what-is-plusauth">What is PlusAuth</a></li>
 </ol>
</details>

---

## About The Project

It is a simple Angular project demonstrating basic authentication flows such as register, login, and logout. To keep things simple, we bootstrapped the project with [angular-cli](https://angular.io/cli) and used
[@plusauth/plusauth-oidc-client-js](https://github.com/PlusAuth/plusauth-oidc-client-js) for authentication.

## Prerequisites

Before running the project, you must first follow these steps:

1. Create a PlusAuth account and a tenant at https://dashboard.plusauth.com
2. Navigate to [Clients](https://dashboard.plusauth.com/~clients) tab and create a client of type `Single Page Application`
3. Go to the details page of the client that you've just created and set the following fields as:

- Redirect Uris: http://localhost:4200/callback, http://localhost:4200/silent-renew
- Post-Logout Redirect Uris: http://localhost:4200/

Write down your Client Id since it will be required in the application's configuration.

## Getting Started

First, we need to supply the required configuration values for the application. Rename `environment.example.ts` file as `environment.ts`

Then modify the values inside the `environment.ts` file using your Client ID and your PlusAuth tenant name.

Finally, start the application with:

```shell
npm start
# or with yarn
yarn start
```

The application is hosted at http://localhost:4200/

> If you are serving your application in a different port from the default one which is `4200`, 
> make sure you have updated your client's configuration mentioned in the [Prerequisites](#prerequisites) section and [auth.service.js](src/app/services/auth.service.js) accordingly.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

## What is PlusAuth

PlusAuth helps individuals, teams, and organizations to implement authorization and authentication systems in a secure, flexible and easy way.

<a href="https://plusauth.com/" target="_blank"><strong>Explore the PlusAuth Website »</strong></a>

<a href="https://docs.plusauth.com/" target="_blank"><strong>Explore the PlusAuth Docs »</strong></a>

<a href="https://forum.plusauth.com/" target="_blank"><strong>Explore the PlusAuth Forum »</strong></a>
