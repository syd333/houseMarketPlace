import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

function Profile() {
  const auth = getAuth();

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);
  return user ? <div>hey {user.displayName}</div> : 'not logged in';
}

export default Profile;
