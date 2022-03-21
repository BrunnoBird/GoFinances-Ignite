import fetchMock from 'jest-fetch-mock';
import { mocked } from 'ts-jest/utils';
import { startAsync } from 'expo-auth-session';
import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from './auth';

fetchMock.enableMocks();
jest.mock('expo-auth-session');

describe('Auth Hook', () => {

  it('should be able to sign in with Google account existing', async () => {

    //Primeiro, nós precisamos do Token. Então, vamos Mockar a função de startAsync.
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValueOnce({
      type: 'success',
      params: {
        access_token: 'any_token',
      }
    });

    //Agora que temos o Token, vamos mockar a requisição ttp dos dados de profile do usuário.
    fetchMock.mockResponseOnce(JSON.stringify({
        id: 'any_id',
        email: 'brunno.gonzalez@email.com',
        name: 'Brunno',
        photo: 'any_photo.png'
      } 
    ));

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user.email)
    .toBe('brunno.gonzalez@email.com');
  });

  it('user should not connect if cancel authentication with Google', async () => {

    const googleMocked = mocked(startAsync as any);
    //MockReturnValueOnce = Faz uso do mock apenas uma unica vez em cada teste, para não deixar reaproveitar
    googleMocked.mockReturnValueOnce({
      type: 'cancel',
      params: {
        access_token: 'any_token'
      }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());
    
    expect(result.current.user).not.toHaveProperty('id');
  });

  it('should be error with incorrectly Google parameters', async () => {

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    try {
      await act(() => result.current.signInWithGoogle());
    } catch {
      expect(result.current.user).toEqual({});
    }
  });
});