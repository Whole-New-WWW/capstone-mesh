import React from 'react';
import Auth from './Auth';
import UserState from './UserState';

export default function Application() {
  return (
    <Auth>
      <UserState />
    </Auth>
  );
}
