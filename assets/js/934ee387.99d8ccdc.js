"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9841],{5634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(4848),r=n(8453);const i={slug:"azure-container-instances-caddy-security",title:"Secure Deployment of Application with Azure Container Instances and Caddy",authors:["greenpau"],tags:["blog"]},c=void 0,s={permalink:"/blog/azure-container-instances-caddy-security",editUrl:"https://github.com/authcrunch/authcrunch.github.io/edit/main/blog/2024-02-25-azure-container-instances-caddy-security/index.md",source:"@site/blog/2024-02-25-azure-container-instances-caddy-security/index.md",title:"Secure Deployment of Application with Azure Container Instances and Caddy",description:"This tutorial walks you through deploying applications protected by caddy security app,",date:"2024-02-25T00:00:00.000Z",formattedDate:"February 25, 2024",tags:[{label:"blog",permalink:"/blog/tags/blog"}],readingTime:3.165,hasTruncateMarker:!1,authors:[{name:"Paul Greenberg",title:"Maintainer",url:"https://github.com/greenpau",imageURL:"https://github.com/greenpau.png",key:"greenpau"}],frontMatter:{slug:"azure-container-instances-caddy-security",title:"Secure Deployment of Application with Azure Container Instances and Caddy",authors:["greenpau"],tags:["blog"]},unlisted:!1,nextItem:{title:"Welcome",permalink:"/blog/welcome"}},o={authorsImageUrls:[void 0]},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Azure Configuration",id:"azure-configuration",level:2},{value:"Add Azure File Share",id:"add-azure-file-share",level:3},{value:"Copy Files to Azure File Share",id:"copy-files-to-azure-file-share",level:3},{value:"Container Deployment",id:"container-deployment",level:3},{value:"Accessing Container",id:"accessing-container",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This tutorial walks you through deploying applications protected by caddy security app,\nhosted by Caddy web server via Azure Container Instances (ACI) service."}),"\n",(0,a.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"#azure-configuration",children:"Azure Configuration"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#add-azure-file-share",children:"Add Azure File Share"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#copy-files-to-azure-file-share",children:"Copy Files to Azure File Share"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#container-deployment",children:"Container Deployment"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#accessing-container",children:"Accessing Container"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#troubleshooting",children:"Troubleshooting"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#conclusion",children:"Conclusion"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"azure-configuration",children:"Azure Configuration"}),"\n",(0,a.jsxs)(t.p,{children:["Define environment variables. Change ",(0,a.jsx)(t.code,{children:"app"})," to something else, e.g. ",(0,a.jsx)(t.code,{children:"xyz"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"export ACI_RG_NAME=app-auth-rg-001\nexport ACI_ST_ACCOUNT_NAME=appauthst001\nexport ACI_LOCATION=eastus\nexport ACI_ST_SHARE_NAME=appauthstsh001\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next, create resource group:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'az group create --name "${ACI_RG_NAME}" --location eastus\n'})}),"\n",(0,a.jsx)(t.h3,{id:"add-azure-file-share",children:"Add Azure File Share"}),"\n",(0,a.jsx)(t.p,{children:"References:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/container-instances/container-instances-volume-azure-files",children:"https://learn.microsoft.com/en-us/azure/container-instances/container-instances-volume-azure-files"})}),"\n",(0,a.jsxs)(t.li,{children:["Reference: ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/cli/azure/provider?view=azure-cli-latest#az-provider-register",children:"https://learn.microsoft.com/en-us/cli/azure/provider?view=azure-cli-latest#az-provider-register"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Register a provider using your subscription ID:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"az provider register -n Microsoft.Storage --subscription 91cd6b60-64b7-46e2-bffb-952352196549\n"})}),"\n",(0,a.jsx)(t.p,{children:"Create a storage account:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'az storage account create --resource-group "${ACI_RG_NAME}" --name "${ACI_ST_ACCOUNT_NAME}" --location "${ACI_LOCATION}" --sku Standard_LRS\n'})}),"\n",(0,a.jsx)(t.p,{children:"Review the newly created account:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"az storage account list | jq -r '.[]\n"})}),"\n",(0,a.jsx)(t.p,{children:"Create a file share:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'az storage share create --name "${ACI_ST_SHARE_NAME}" --account-name "${ACI_ST_ACCOUNT_NAME}"\n'})}),"\n",(0,a.jsx)(t.h3,{id:"copy-files-to-azure-file-share",children:"Copy Files to Azure File Share"}),"\n",(0,a.jsx)(t.p,{children:"Navigate to Resource Group, then browse to Storage Share associated with it."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/authcrunch/authcrunch.github.io/assets/3826416/447d6cef-d50e-4c2b-85be-676970a2712a",alt:"image"})}),"\n",(0,a.jsxs)(t.p,{children:['Next, open the share, click "Browse" and add the following nested directories. The ',(0,a.jsx)(t.code,{children:"app-auth-ci-001"})," is the name of the Caddy instance (ACI container)."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"caddy"}),",","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"app-auth-ci-001"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"config"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/authcrunch/authcrunch.github.io/assets/3826416/ee9c2d02-e9a7-4790-a34b-7c959b5c1d8e",alt:"image"})}),"\n",(0,a.jsxs)(t.p,{children:["Next, browse to ",(0,a.jsx)(t.code,{children:"caddy/app-auth-ci-001/config"})," and upload ",(0,a.jsx)(t.code,{children:"Caddyfile"})," with the following content."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/authcrunch/authcrunch.github.io/assets/3826416/a58883fc-3d13-40e9-aae0-1ed037f6cd0a",alt:"image"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'{\n\thttp_port 80\n\thttps_port 443\n\tadmin off\n\tdebug\n\n\torder authenticate before respond\n\torder authorize before basicauth\n\n\tsecurity {\n\t\tlocal identity store localdb {\n\t\t\trealm local\n\t\t\tpath {env.LOCAL_DATA_PATH}caddy/app-auth-ci-001/userdb/users.json\n\t\t\tuser webadmin {\n\t\t\t\tname Webmaster\n\t\t\t\temail webadmin@localhost.localdomain\n\t\t\t\t# echo -n "App@2f4cb79053be" | bcrypt-cli -c 10\n\t\t\t\tpassword "$2a$10$JqJEf2pra4hIkw4CSDePoOfIoXVUFwSn6pJie6m02MUP7YGQVPQAi" overwrite\n\t\t\t\troles "authp/admin" "authp/user"\n\t\t\t}\n\t\t\tuser jsmith {\n\t\t\t\tname John Smith\n\t\t\t\temail jsmith@localhost.localdomain\n\t\t\t\t# password {env.USER_JSMITH_SECRET}\n\t\t\t\tpassword "App@2f4cb79053be"\n\t\t\t\troles "authp/admin" "authp/user"\n\t\t\t}\n\t\t}\n\n\t\tauthentication portal myportal {\n\t\t\tcrypto default token lifetime 7200\n\t\t\tcrypto key sign-verify {env.JWT_SHARED_KEY}\n\t\t\tcookie domain app-auth-ci-001.eastus.azurecontainer.io\n\t\t\tui {\n\t\t\t\tlinks {\n\t\t\t\t\t"My Identity" "/auth/whoami" icon "las la-user"\n\t\t\t\t\t"File Server" "/" icon "las la-cloud"\n\t\t\t\t}\n\t\t\t}\n\t\t\ttransform user {\n\t\t\t\tmatch origin local\n\t\t\t\taction add role authp/user\n\t\t\t}\n\t\t\tenable identity store localdb\n\t\t}\n\n\t\tauthorization policy file_server_policy {\n\t\t\tcrypto key sign-verify {env.JWT_SHARED_KEY}\n\t\t\tset auth url /auth/\n\t\t\tallow roles "authp/admin" "authp/user"\n\t\t}\n\t}\n}\n\n:80 {\n\tredir https://{host}{uri} 302\n}\n\n:443 {\n\ttls internal {\n\t\ton_demand\n\t}\n\n\troute /version* {\n\t\trespond "app 1.0"\n\t}\n\n\troute /debug* {\n\t\tauthorize with file_server_policy\n\t\theader Content-Type text/html\n\t\trespond <<EOF\n\t\t<html>\n\t\t<body>\n\t\t<p>Host: <code>{http.request.host}</code></p>\n\t\t<p>Time: <code>{time.now.common_log}</code></p>\n\t\t<p>ID: <code>{http.auth.user.id}</code></p>\n\t\t</body>\n\t\t</html>\n\t\tEOF 200\n\t}\n\n\troute /auth* {\n\t\tauthenticate with myportal\n\t}\n\n\troute /* {\n\t\tauthorize with file_server_policy\n\t\tfile_server {\n\t\t\troot {env.LOCAL_DATA_PATH}\n\t\t\tbrowse\n\t\t}\n\t}\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"container-deployment",children:"Container Deployment"}),"\n",(0,a.jsx)(t.p,{children:"Get Storage Account Key:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'ACI_ST_ACCOUNT_KEY=$(az storage account keys list --resource-group "${ACI_RG_NAME}" --account-name "${ACI_ST_ACCOUNT_NAME}" --query "[0].value" --output tsv)\necho $ACI_ST_ACCOUNT_KEY\n'})}),"\n",(0,a.jsx)(t.p,{children:"Next, deploy the container:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'az container create --resource-group "${ACI_RG_NAME}" \\\n  --name "app-auth-ci-001" \\\n  --image "ghcr.io/authcrunch/authcrunch:latest" \\\n  --dns-name-label "app-auth-ci-001" \\\n  --ports 80 443 \\\n  --azure-file-volume-account-name "${ACI_ST_ACCOUNT_NAME}" \\\n  --azure-file-volume-account-key "${ACI_ST_ACCOUNT_KEY}" \\\n  --azure-file-volume-share-name "${ACI_ST_SHARE_NAME}" \\\n  --environment-variables LOCAL_DATA_PATH="/app/data/" JWT_SHARED_KEY="d24ae7de-ca54-4334-94ba-301fc414d5de" XDG_DATA_HOME="/app/data/caddy/app-auth-ci-001/data" XDG_CONFIG_HOME="/app/data/caddy/app-auth-ci-001/config" \\\n  --azure-file-volume-mount-path /app/data/ \\\n  --command-line "caddy run --config /app/data/caddy/app-auth-ci-001/config/Caddyfile"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"accessing-container",children:"Accessing Container"}),"\n",(0,a.jsxs)(t.p,{children:["Browse to container URL: ",(0,a.jsx)(t.code,{children:"https://app-auth-ci-001.eastus.azurecontainer.io/"})]}),"\n",(0,a.jsx)(t.p,{children:"The first time your access your container, you get that the site is unreachable."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/authcrunch/authcrunch.github.io/assets/3826416/b243c468-9399-4676-a848-be961c6e5d2f",alt:"image"})}),"\n",(0,a.jsx)(t.p,{children:"If you refresh after 10-15 seconds, you will get the connection is not private. It is expected. Trust the cert and proceed"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/authcrunch/authcrunch.github.io/assets/3826416/2a0337f9-8090-4712-a6f0-dd8b7b920888",alt:"image"})}),"\n",(0,a.jsxs)(t.p,{children:["After that, log in with username ",(0,a.jsx)(t.code,{children:"jsmith"})," and password ",(0,a.jsx)(t.code,{children:"App@2f4cb79053be"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/authcrunch/authcrunch.github.io/assets/3826416/a7b70a8b-fc4c-4c90-90c3-0bccd751c0e1",alt:"image"})}),"\n",(0,a.jsx)(t.p,{children:'Click "File Server" to get redirected to Caddy file server browser:'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/authcrunch/authcrunch.github.io/assets/3826416/c525674d-c54d-457f-a5d6-bef5c96f9d99",alt:"image"})}),"\n",(0,a.jsxs)(t.p,{children:["You should be able to browse the contents of ",(0,a.jsx)(t.code,{children:"/app/data"})," directory."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/authcrunch/authcrunch.github.io/assets/3826416/b9cf61c7-ca34-419e-a058-0c619339b9aa",alt:"image"})}),"\n",(0,a.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsx)(t.p,{children:"List containers:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'az container list --resource-group "${ACI_RG_NAME}"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Check logs:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'az container logs --resource-group "${ACI_RG_NAME}" --name "app-auth-ci-001"\naz container show --resource-group "${ACI_RG_NAME}" --name "app-auth-ci-001"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(t.p,{children:["There are some gaps in my explanation. Please engage, ask questions ",(0,a.jsx)(t.a,{href:"https://github.com/authcrunch/authcrunch.github.io/issues",children:"here"}),"\nor submit edits ",(0,a.jsx)(t.a,{href:"https://github.com/authcrunch/authcrunch.github.io/edit/main/blog/2024-02-25-azure-container-instances-caddy-security/index.md",children:"here"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var a=n(6540);const r={},i=a.createContext(r);function c(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);