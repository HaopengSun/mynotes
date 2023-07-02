# mynotes
Note App using React.js and Django

Authentication and refreshing token
The app uses:
- [Simply.jwt](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/index.html) as backend package to return access token and refresh token to the frontend,
- [jwt-decode](https://www.npmjs.com/package/jwt-decode) npm package in the frontend to decode the jwt returned from backend.
- Access token contains user id and user name, which are stored in react context hook and can be used in all frontend components.
- Frontend sends refresh token every four minuts to get new access token to avoid letting users log in again.
- [cors header](https://pypi.org/project/django-cors-headers/) to handle Cross-Origin Resource Sharing
- [Django rest framework](https://www.django-rest-framework.org/) and [react router dom ](https://reactrouter.com/en/main) to handle routing
