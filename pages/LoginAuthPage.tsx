/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from '@emotion/react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import { Dispatch } from 'redux';
import { AccountInfo, AuthenticationResult, IPublicClientApplication } from '@azure/msal-browser';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import logo from './GB_Logo_FindYourDeal_web.jpg';
import SignInButton from '../components/SignInButton';
import SignOutButton from '../components/SignOutButton';
import { RemoveAccessToken, SetAccessToken } from '../redux/slices/loginAuthSlice';
import { loginRequest } from '../authConfig';
import { RootState } from '../redux/store';

function removeAccessTokenFromStore(dispatch: Dispatch) {
  dispatch(RemoveAccessToken());
  // console.log('Access token successfully removed from store.');
}

function requestAndStoreAccessToken(
  dispatch: Dispatch,
  instance: IPublicClientApplication,
  accounts: AccountInfo[]
) {
  const request = {
    ...loginRequest,
    account: accounts[0],
  };

  // Silently acquires an access token which is then attached to a request for Microsoft Graph data
  instance
    .acquireTokenSilent(request)
    .then((response: AuthenticationResult) => {
      // console.log('Access token silently added to store.');
      const accessTokenPayload = { accessToken: response.accessToken };
      dispatch(SetAccessToken(accessTokenPayload));
    })
    .catch(() => {
      // console.log(e);
      instance.acquireTokenPopup(request).then((response: AuthenticationResult) => {
        const accessTokenPayload = { accessToken: response.accessToken };
        dispatch(SetAccessToken(accessTokenPayload));
      });
    });
}

// removed "e" as the catch argument

export default function LoginAuthPage() {
  const { accessToken } = useSelector((state: RootState) => state.loginAuth);
  const dispatch = useDispatch();
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken === null && isAuthenticated) {
      requestAndStoreAccessToken(dispatch, instance, accounts);
    } else if (accessToken !== null && !isAuthenticated) {
      removeAccessTokenFromStore(dispatch);
    }

    if (isAuthenticated) {
      navigate('/home');
    } else if (!isAuthenticated && window.location.pathname !== '/') {
      navigate('/');
    }

    // console.log(`isAuthenticated: ${isAuthenticated}`);
  });

  const Logo = styled.img`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
  `;

  return (
    <Container maxWidth="sm">
      <Grid>
        <Grid item xs={12} sm={12}>
          <Logo src={logo} alt="Logo" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <div
            css={css`
              color: red;
              background-color: #fff;
              font-family: franklin-gothic-urw, Arial, Helvetica, sans-serif;
              font-weight: bolder;
              font-size: 100px;
              letter-spacing: 0em;
              line-height: 1em;
              text-transform: none;
              text-align: center;
            `}
          >
            <h2>Admin Portal</h2>
            {isAuthenticated ? <SignOutButton /> : <SignInButton />}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
