# mynotes
Note App using React.js and Django

Authentication and refreshing token
The app uses [Simply.jwt](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/index.html) as backend package to return access token and refresh token to the frontend,
and jwt-decode npm package in the frontend to decode the jwt returned from backend.
Access token contains user id and user name, which are stored in react context hook and can be used in all frontend components.
Frontend sends refresh token every four minuts to get new access token to avoid letting users log in again.
