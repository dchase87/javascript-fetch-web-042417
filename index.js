const app = "I don't do much.";

const token = '38506122c5ad44293ec16f5bab80f4bb4a5ff826'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
