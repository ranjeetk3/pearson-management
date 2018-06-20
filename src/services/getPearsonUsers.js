import { URL } from "../constants";

export const getPearsonUsers = onSuccess => {
    return fetch(URL, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => onSuccess(data));
};